import React, { useRef } from 'react';
import { Sphere as ThreeSphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
const Sphere = () => {
  const sphereRef = useRef();



  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01; // Adjust the rotation speed as desired
    }
  });

  const textureUrl = "https://unsplash.com/fr/photos/tj7Bj_743JA";

  return (
    <ThreeSphere args={[1, 32, 32]} ref={sphereRef}>
      <meshStandardMaterial attach="material" />
      <meshBasicMaterial attach="material" side={THREE.BackSide}>
        <texture url={textureUrl} attach="map" />
      </meshBasicMaterial>
      <meshBasicMaterial attach="material" side={THREE.FrontSide}>
        <texture url={textureUrl} attach="map" />
      </meshBasicMaterial>
    </ThreeSphere>
  );
};

export default Sphere;