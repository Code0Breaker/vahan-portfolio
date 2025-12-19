"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars, Trail } from "@react-three/drei";
import * as THREE from "three";

// Floating geometric shape that morphs and rotates
function MorphingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
      
      // Subtle scale pulsing
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial
          ref={materialRef}
          color="#00ffaa"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

// Secondary rotating ring
function OrbitRing({ radius, speed, color, opacity }: { radius: number; speed: number; color: string; opacity: number }) {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * speed;
      ringRef.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.01, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

// Particle field that follows mouse
function ParticleField({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    const colorPrimary = new THREE.Color("#00ffaa");
    const colorSecondary = new THREE.Color("#7b61ff");
    const colorAccent = new THREE.Color("#ff6b6b");
    
    for (let i = 0; i < count; i++) {
      // Spherical distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 3 + Math.random() * 4;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Random colors from palette
      const colorChoice = Math.random();
      const color = colorChoice < 0.5 ? colorPrimary : colorChoice < 0.8 ? colorSecondary : colorAccent;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      sizes[i] = Math.random() * 2 + 0.5;
    }
    
    return { positions, colors, sizes };
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
      mesh.current.rotation.x = mouse.y * 0.1;
      mesh.current.rotation.z = mouse.x * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Orbiting glowing spheres
function OrbitingSphere({ 
  radius, 
  speed, 
  size, 
  color, 
  offset = 0 
}: { 
  radius: number; 
  speed: number; 
  size: number; 
  color: string; 
  offset?: number;
}) {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (sphereRef.current) {
      const t = state.clock.elapsedTime * speed + offset;
      sphereRef.current.position.x = Math.cos(t) * radius;
      sphereRef.current.position.z = Math.sin(t) * radius;
      sphereRef.current.position.y = Math.sin(t * 2) * 0.5;
    }
  });

  return (
    <Trail
      width={0.5}
      length={6}
      color={color}
      attenuation={(t) => t * t}
    >
      <mesh ref={sphereRef}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} />
      </mesh>
    </Trail>
  );
}

// Floating code symbols
function FloatingSymbol({ position, symbol, color }: { position: [number, number, number]; symbol: string; color: string }) {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      textRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={textRef} position={position}>
        <planeGeometry args={[0.5, 0.5]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}

// Main scene component
function Scene() {
  return (
    <>
      {/* Ambient stars in background */}
      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
      
      {/* Central morphing geometry */}
      <MorphingGeometry />
      
      {/* Orbit rings */}
      <OrbitRing radius={2.5} speed={0.3} color="#00ffaa" opacity={0.2} />
      <OrbitRing radius={3} speed={-0.2} color="#7b61ff" opacity={0.15} />
      <OrbitRing radius={3.5} speed={0.15} color="#ff6b6b" opacity={0.1} />
      
      {/* Particle field */}
      <ParticleField count={150} />
      
      {/* Orbiting spheres with trails */}
      <OrbitingSphere radius={2.8} speed={0.5} size={0.08} color="#00ffaa" offset={0} />
      <OrbitingSphere radius={3.2} speed={0.4} size={0.06} color="#7b61ff" offset={Math.PI} />
      <OrbitingSphere radius={2.5} speed={0.6} size={0.05} color="#ff6b6b" offset={Math.PI / 2} />
      
      {/* Floating symbols for tech vibe */}
      <FloatingSymbol position={[-4, 1, -2]} symbol="<>" color="#00ffaa" />
      <FloatingSymbol position={[4, -1, -3]} symbol="{}" color="#7b61ff" />
      <FloatingSymbol position={[-3, -2, -1]} symbol="()" color="#ff6b6b" />
      <FloatingSymbol position={[3, 2, -2]} symbol="/>" color="#00ffaa" />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

