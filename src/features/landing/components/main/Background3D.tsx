import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextScene3D } from "./TextScene3D";

export function Background3D() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="bg-transparent"
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} />

        <Suspense fallback={null}>
          <TextScene3D />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI * 0.55}
          minPolarAngle={Math.PI * 0.45}
          maxAzimuthAngle={Math.PI / 9}
          minAzimuthAngle={-Math.PI / 9}
          dampingFactor={0.1}
          enableDamping={true}
        />
      </Canvas>
    </div>
  );
}
