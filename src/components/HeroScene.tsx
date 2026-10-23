"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function LEDScreen() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  const gradientMap = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;
    const grad = ctx.createLinearGradient(0, 0, 128, 256);
    grad.addColorStop(0, "#ff2e88");
    grad.addColorStop(0.5, "#7b5cff");
    grad.addColorStop(1, "#18e0ff");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 256);

    ctx.globalAlpha = 0.3;
    ctx.fillStyle = "#fff";
    for (let i = 0; i < 6; i++) {
      ctx.fillRect(0, i * 48, 128, 2);
    }
    ctx.globalAlpha = 1;

    ctx.font = "bold 28px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.shadowColor = "rgba(0,0,0,0.5)";
    ctx.shadowBlur = 4;
    ctx.fillText("LUMORA", 64, 120);
    ctx.font = "bold 14px Arial";
    ctx.fillText("LIGHT UP", 64, 148);

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
    if (glowRef.current) {
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <group ref={meshRef}>
        {/* LED Screen */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 5, 0.15]} />
          <meshStandardMaterial map={gradientMap} emissive="#7b5cff" emissiveIntensity={0.3} />
        </mesh>
        {/* Frame */}
        <mesh position={[0, 0, -0.01]}>
          <boxGeometry args={[3.2, 5.2, 0.12]} />
          <meshStandardMaterial color="#1a1a2a" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Glow behind */}
        <mesh ref={glowRef} position={[0, 0, -0.5]}>
          <planeGeometry args={[6, 9]} />
          <meshBasicMaterial color="#7b5cff" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
        </mesh>
        {/* Drone arms */}
        {[[-1.8, 3], [1.8, 3], [-1.8, -3], [1.8, -3]].map(([x, y], i) => (
          <group key={i} position={[x, y, 0.1]}>
            <mesh>
              <cylinderGeometry args={[0.08, 0.08, 0.3, 8]} />
              <meshStandardMaterial color="#2a2a3d" metalness={0.6} />
            </mesh>
            <DroneRotor position={[0, 0.2, 0]} dir={i % 2 === 0 ? 1 : -1} />
          </group>
        ))}
        {/* Cables */}
        {[[-1.5, 2.7], [1.5, 2.7]].map(([x, y], i) => (
          <mesh key={`cable-${i}`} position={[x * 0.5, y * 0.5 + 1.3, 0.05]}>
            <boxGeometry args={[0.02, Math.sqrt(x * x + y * y) * 0.5, 0.02]} />
            <meshStandardMaterial color="#5a5a7a" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function DroneRotor({ position, dir }: { position: [number, number, number]; dir: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += dir * delta * 15;
  });
  return (
    <group ref={ref} position={position}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.015, 4, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function Particles() {
  const count = 80;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#7b5cff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function GlowOrb({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[1.5, 16, 16]} />
      <MeshDistortMaterial color={color} transparent opacity={0.08} distort={0.4} speed={2} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} color="#8080c0" />
        <pointLight position={[-6, 6, 8]} intensity={1.5} color="#ff2e88" distance={40} />
        <pointLight position={[8, 2, 6]} intensity={1.2} color="#18e0ff" distance={40} />
        <directionalLight position={[0, 10, 5]} intensity={0.4} />
        <LEDScreen />
        <Particles />
        <GlowOrb position={[-5, -3, -4]} color="#ff2e88" />
        <GlowOrb position={[5, 3, -5]} color="#18e0ff" />
      </Canvas>
    </div>
  );
}
