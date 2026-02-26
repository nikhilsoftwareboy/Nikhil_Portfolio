import os
from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit
from flask_cors import CORS
import threading

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# ... (keep existing imports)

app = Flask(__name__)
# Enable CORS for the frontend origin (replace dynamically in production)
CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(app, cors_allowed_origins="*")

# In-memory "database" for the portfolio
contact_messages = []
online_users_count = 0
lock = threading.Lock()

# Email Configuration (Replace with environment variables in production)
# IMPORTANT: For Gmail, you will need to generate an "App Password"
# Standard passwords will not work if 2FA is enabled.
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SENDER_EMAIL = "kumarnikhil0180@gmail.com"  # Your email
# SENDER_PASSWORD = "your_app_password_here" 

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "ok", "message": "Backend is running"}), 200

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.json
    if not data or not data.get('name') or not data.get('email') or not data.get('message'):
        return jsonify({"error": "Missing required fields"}), 400
    
    name = data.get('name')
    sender_email = data.get('email')
    message_content = data.get('message')

    # Store contact message
    message_entry = {
        "name": name,
        "email": sender_email,
        "message": message_content,
        "timestamp": os.sys.gettrace() # simple timestamp conceptually
    }
    contact_messages.append(message_entry)

    # Send Email via smtplib
    try:
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = SENDER_EMAIL # Send to yourself
        msg['Subject'] = f"New Portfolio Message from {name}"
        
        body = f"Name: {name}\nEmail: {sender_email}\n\nMessage:\n{message_content}"
        msg.attach(MIMEText(body, 'plain'))

        # Only attempt to send if password is provided
        password = os.environ.get("EMAIL_APP_PASSWORD", "")
        if password:
            server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
            server.starttls()
            server.login(SENDER_EMAIL, password)
            server.send_message(msg)
            server.quit()
        else:
            print(f"Warning: EMAIL_APP_PASSWORD not set. Email not sent, but saved in memory:\n{body}")

    except Exception as e:
        print(f"Failed to send email: {e}")
        # We still return success as we logged the message
    
    return jsonify({"success": True, "message": "Message received!"}), 201

@socketio.on('connect')
def handle_connect():
    global online_users_count
    with lock:
        online_users_count += 1
    # Broadcast new count to all connected clients
    emit('users_update', {'count': online_users_count}, broadcast=True)
    print(f"Client connected. Online users: {online_users_count}")

@socketio.on('disconnect')
def handle_disconnect():
    global online_users_count
    with lock:
        online_users_count = max(0, online_users_count - 1)
    # Broadcast new count to all connected clients
    emit('users_update', {'count': online_users_count}, broadcast=True)
    print(f"Client disconnected. Online users: {online_users_count}")

if __name__ == '__main__':
    # Run the application on port 5000
    socketio.run(app, debug=True, port=5000, allow_unsafe_werkzeug=True)
