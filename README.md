# Modern 3D Interactive Developer Portfolio

A dark-mode first, fully responsive interactive portfolio. Built with **React** (Vite), **Tailwind CSS**, **Framer Motion**, and **React Three Fiber**. The backend is powered by **Python / Flask** with **Socket.IO** for real-time features like the online users counter.

## 🚀 Features
- **3D Animated Background**: Built using React Three Fiber with interactive stars/particles.
- **Real-time Live Users**: Flask-SocketIO pushes real-time online user count to the Contact section.
- **Customization Config**: Easily tune colors, texts, and assets through `frontend/src/config.js`.
- **Smooth Animations**: Reveal-on-scroll animations and a custom cursor powered by Framer Motion.
- **Dark/Light Theme Toggle**: Remembers user preference using `localStorage`.
- **Responsive Design**: Tailored for Desktop, Tablet, and Mobile.

---

## 🛠️ Tech Stack
- **Frontend**: React, Vite, Tailwind CSS (v3), Framer Motion, Three.js, React Three Fiber.
- **Backend**: Python 3, Flask, Flask-SocketIO, Flask-CORS.

---

## 💻 Getting Started

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Activate your virtual environment and install dependencies:
   ```bash
   python -m venv venv
   # On Windows:
   .\venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   pip install -r requirements.txt
   ```
   *(If requirements.txt is missing, `pip install flask flask-socketio flask-cors`)*
3. Run the Flask server:
   ```bash
   python app.py
   ```
   The backend will run on `http://localhost:5000`.

### 2. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 🎨 How to Adapt & Customize

### 1. Configuration (`frontend/src/config.js`)
Virtually all content is driven by this single file. Open it to edit:
- **Theme Settings**: Set `defaultTheme` ('dark' or 'light').
- **Cursor Settings**: Change `cursor.color` to adjust the custom cursor ring.
- **Hero & About Settings**: Modify titles, bios, subtitles, and skill bars.
- **Projects**: Add/remove projects from the array. Include new images via URL or local imports.
- **Experience**: Edit your work timeline.

### 2. Changing the Accent Color
1. Open `frontend/tailwind.config.js`.
2. Locate the `accent: '#00dc82'` value in `theme.extend.colors`.
3. Change it to your desired HEX code.
4. Also verify `config.js` `cursor.color` matches this for consistency.

### 3. Modifying the 3D Scene
1. Open `frontend/src/components/Scene.jsx`.
2. Configure the `<Stars>` attributes (count, radius, speed) or replace `AnimatedParticles` with your own `.obj` or `.gltf` spline model using `@react-three/drei`'s `useGLTF`.

---

## 🤝 Contact API
The contact form submits a POST request to `http://localhost:5000/api/contact`. 
You can implement actual email sending logic (e.g., using `smtplib` or SendGrid) inside `backend/app.py` in the `handle_contact` route.

Enjoy building your portfolio!
