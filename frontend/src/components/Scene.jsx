import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { useTheme } from '../ThemeContext';

const AnimatedParticles = () => {
    const ref = useRef();

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group ref={ref}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
};

const Scene = () => {
    const { theme } = useTheme();

    return (
        <Canvas camera={{ position: [0, 0, 1] }}>
            <color attach="background" args={[theme === 'dark' ? '#0d1117' : '#ffffff']} />
            <AnimatedParticles />
            {/* Disable orbit controls zoom and pan to keep it as background */}
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
    );
};

export default Scene;
