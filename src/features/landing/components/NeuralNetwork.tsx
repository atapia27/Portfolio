import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Sphere } from "@react-three/drei";
import * as THREE from "three";

export function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  // Simplified network structure
  const nodes = [
    { position: [0, 0, 0] as [number, number, number], color: "#ffffff" },
    { position: [-1.5, 1, 0] as [number, number, number], color: "#0ea5e9" },
    { position: [1.5, 1, 0] as [number, number, number], color: "#0ea5e9" },
    { position: [-1.5, -1, 0] as [number, number, number], color: "#d946ef" },
    { position: [1.5, -1, 0] as [number, number, number], color: "#d946ef" },
    { position: [0, 2, 0] as [number, number, number], color: "#eab308" },
    { position: [0, -2, 0] as [number, number, number], color: "#eab308" },
  ];

  const connections = [
    { start: nodes[0].position, end: nodes[1].position },
    { start: nodes[0].position, end: nodes[2].position },
    { start: nodes[0].position, end: nodes[3].position },
    { start: nodes[0].position, end: nodes[4].position },
    { start: nodes[0].position, end: nodes[5].position },
    { start: nodes[0].position, end: nodes[6].position },
    { start: nodes[1].position, end: nodes[2].position },
    { start: nodes[3].position, end: nodes[4].position },
  ];

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <Sphere key={i} args={[0.12, 16, 16]} position={node.position}>
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}

      {/* Connections */}
      {connections.map((connection, i) => (
        <Line
          key={i}
          points={[connection.start, connection.end]}
          color="#ffffff"
          lineWidth={1}
          transparent
          opacity={0.6}
        />
      ))}
    </group>
  );
}
