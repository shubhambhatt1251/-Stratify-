
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create blockchain network visualization
    const geometry = new THREE.SphereGeometry(0.1, 8, 8);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x10b981,
      transparent: true,
      opacity: 0.6
    });

    const nodes: THREE.Mesh[] = [];
    const lines: THREE.Line[] = [];

    // Create nodes
    for (let i = 0; i < 50; i++) {
      const node = new THREE.Mesh(geometry, material);
      node.position.set(
        Math.random() * 40 - 20,
        Math.random() * 40 - 20,
        Math.random() * 40 - 20
      );
      nodes.push(node);
      scene.add(node);
    }

    // Create connections between nodes
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x10b981,
      transparent: true,
      opacity: 0.2
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < 10) {
          const lineGeometry = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position,
            nodes[j].position
          ]);
          const line = new THREE.Line(lineGeometry, lineMaterial);
          lines.push(line);
          scene.add(line);
        }
      }
    }

    camera.position.z = 30;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the entire network
      scene.rotation.y += 0.001;
      scene.rotation.x += 0.0005;

      // Pulse nodes
      nodes.forEach((node, index) => {
        const time = Date.now() * 0.001;
        node.material.opacity = 0.3 + 0.3 * Math.sin(time + index * 0.1);
        node.scale.setScalar(0.8 + 0.4 * Math.sin(time + index * 0.1));
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ zIndex: -1 }}
    />
  );
};
