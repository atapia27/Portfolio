import { useRef, useEffect, useState, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

interface AnimatedText3DProps {
  text: string;
  position: [number, number, number];
  fontSize?: number;
  color?: string;
  delay?: number;
  duration?: number;
  isTitle?: boolean;
  opacity?: number;
}

export function AnimatedText3D({
  text,
  position,
  fontSize = 0.5,
  color = "#ff6b6b", // portfolio-coral equivalent
  delay = 0,
  duration = 1,
  isTitle = false,
  opacity = 1,
}: AnimatedText3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [textProgress, setTextProgress] = useState(0);
  const [font, setFont] = useState<any>(null);
  const { clock } = useThree();
  const shadeColor = "#4C2020";

  // Load the Adventure Time font
  useEffect(() => {
    if (isTitle) {
      const loader = new FontLoader();
      loader.load(
        "/Adventure Time/Adventure_Time_Regular.json",
        (font: any) => {
          setFont(font);
        },
      );
    }
  }, [isTitle]);

  // Create text mesh using useMemo to prevent recreation
  const textMesh = useMemo(() => {
    if (!isTitle || !font) return null;

    const geometry = new TextGeometry(text, {
      font: font,
      size: fontSize,
      height: 0.1,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.01,
      bevelOffset: 0,
      bevelSegments: 5,
    });

    // Center the geometry
    geometry.computeBoundingBox();
    const centerOffset =
      -0.5 * (geometry.boundingBox!.max.x - geometry.boundingBox!.min.x);
    geometry.translate(centerOffset, 0, 0); // Remove the Y translation that was causing offset

    // Create materials with front and side colors
    const materials = [
      new THREE.MeshPhongMaterial({
        color: color,
        transparent: true,
        opacity: 1,
      }), // front
      new THREE.MeshPhongMaterial({
        color: shadeColor,
        transparent: true,
        opacity: 0.8,
      }), // side - much darker
    ];

    const mesh = new THREE.Mesh(geometry, materials);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    return mesh;
  }, [isTitle, font, text, fontSize, color, shadeColor]);

  // Update material opacity when it changes
  useEffect(() => {
    if (textMesh && textMesh.material) {
      const materials = Array.isArray(textMesh.material)
        ? textMesh.material
        : [textMesh.material];
      materials.forEach((material, index) => {
        if (material instanceof THREE.MeshPhongMaterial) {
          material.opacity = index === 0 ? opacity : opacity * 0.8;
          material.transparent = true;
        }
      });
    }
  }, [textMesh, opacity]);

  return (
    <group ref={groupRef} position={position}>
      {isTitle && textMesh ? (
        <primitive object={textMesh} />
      ) : (
        <mesh>
          <boxGeometry args={[fontSize * 2, fontSize, 0.1]} />
          <meshPhongMaterial color={color} transparent opacity={opacity} />
        </mesh>
      )}
    </group>
  );
}
