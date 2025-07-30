import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";
import type { Project } from "../data/projects";

interface ProjectVisualizationProps {
  selectedProject: Project | null;
  projects: Project[];
}

export function ProjectVisualization({
  selectedProject,
  projects,
}: ProjectVisualizationProps) {
  const groupRef = useRef<THREE.Group>(null);
  const cognitiveRingRef = useRef<THREE.Mesh>(null);
  const technicalRingRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    if (cognitiveRingRef.current) {
      cognitiveRingRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
    if (technicalRingRef.current) {
      technicalRingRef.current.rotation.z = -state.clock.elapsedTime * 0.15;
    }
  });

  // Categorize projects
  const frontendProjects = projects.filter(
    (p) =>
      p.technologies.includes("React") ||
      p.technologies.includes("Next.js") ||
      p.technologies.includes("Vue") ||
      p.technologies.includes("TypeScript") ||
      p.technologies.includes("JavaScript"),
  );
  const backendProjects = projects.filter(
    (p) =>
      p.technologies.includes("Python") ||
      p.technologies.includes("FastAPI") ||
      p.technologies.includes("SQLAlchemy") ||
      p.technologies.includes("Firebase") ||
      p.technologies.includes("TensorFlow"),
  );

  return (
    <group ref={groupRef}>
      {/* Frontend Projects Ring */}
      <group position={[-2, 0, 0]}>
        <Torus
          ref={cognitiveRingRef}
          args={[1.2, 0.08, 8, 16]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial color="#d946ef" transparent opacity={0.4} />
        </Torus>

        {frontendProjects.map((project, i) => {
          const angle =
            (i / Math.max(frontendProjects.length, 1)) * Math.PI * 2;
          const radius = 1.2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <Sphere key={project.id} args={[0.08, 12, 12]} position={[x, y, 0]}>
              <meshStandardMaterial
                color={
                  selectedProject?.id === project.id ? "#ffffff" : "#d946ef"
                }
                emissive={
                  selectedProject?.id === project.id ? "#ffffff" : "#d946ef"
                }
                emissiveIntensity={
                  selectedProject?.id === project.id ? 0.6 : 0.2
                }
              />
            </Sphere>
          );
        })}
      </group>

      {/* Backend Projects Ring */}
      <group position={[2, 0, 0]}>
        <Torus
          ref={technicalRingRef}
          args={[1.2, 0.08, 8, 16]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial color="#0ea5e9" transparent opacity={0.4} />
        </Torus>

        {backendProjects.map((project, i) => {
          const angle =
            (i / Math.max(backendProjects.length, 1)) * Math.PI * 2;
          const radius = 1.2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <Sphere key={project.id} args={[0.08, 12, 12]} position={[x, y, 0]}>
              <meshStandardMaterial
                color={
                  selectedProject?.id === project.id ? "#ffffff" : "#0ea5e9"
                }
                emissive={
                  selectedProject?.id === project.id ? "#ffffff" : "#0ea5e9"
                }
                emissiveIntensity={
                  selectedProject?.id === project.id ? 0.6 : 0.2
                }
              />
            </Sphere>
          );
        })}
      </group>

      {/* Central Connection */}
      <Torus args={[0.3, 0.05, 8, 12]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#eab308" transparent opacity={0.6} />
      </Torus>

      {/* Featured Projects - floating above */}
      {projects
        .filter((p) => p.featured)
        .map((project, i) => {
          const angle =
            (i / projects.filter((p) => p.featured).length) * Math.PI * 2;
          const radius = 3;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <Sphere
              key={`featured-${project.id}`}
              args={[0.12, 12, 12]}
              position={[x, y, 0.5]}
            >
              <meshStandardMaterial
                color="#eab308"
                emissive="#eab308"
                emissiveIntensity={0.4}
              />
            </Sphere>
          );
        })}
    </group>
  );
}
