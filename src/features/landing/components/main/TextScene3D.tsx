import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { AnimatedText3D } from "./AnimatedText3D";

export function TextScene3D() {
  const groupRef = useRef<THREE.Group>(null);
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [animationStartTime, setAnimationStartTime] = useState<number | null>(
    null,
  );
  const [bounceAnimation, setBounceAnimation] = useState(false);
  const { clock } = useThree();

  // Start animation after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStartTime(clock.elapsedTime);
    }, 2.5 * 1000); // 2.5s delay
    return () => clearTimeout(timer);
  }, [clock]);

  // Use useFrame for smooth animations
  useFrame(() => {
    if (animationStartTime === null) return;

    const currentTime = clock.elapsedTime;
    const elapsed = currentTime - animationStartTime;
    const progress = Math.max(0, Math.min(1, elapsed / 0.6)); // 0.6 second duration (faster)

    // Single phase: fast clockwise spin with scale from 1/10 to full size
    const spinSpeed = Math.pow(progress, 0.3); // Exponential speed
    const newRotation = -spinSpeed * Math.PI * 12; // Negative for clockwise, 3 full rotations

    // Scale calculation: 0-50% size from 0-90% of animation, then grow to full size
    let newScale;
    if (progress <= 0.9) {
      // 0-90%: scale from 0.1 to 0.5 (50% size)
      newScale = 0.1 + (progress / 0.9) * 0.4;
    } else {
      // 90-100%: scale from 0.5 to 1.0 (final growth)
      const finalProgress = (progress - 0.9) / 0.1;
      newScale = 0.5 + finalProgress * 0.5;
    }

    const newOpacity = spinSpeed * 0.8 + progress * 0.2; // Opacity from 0 to 1

    setRotation(newRotation);
    setScale(newScale);
    setOpacity(newOpacity);

    // Start bounce animation after initial animation completes
    if (progress >= 1 && !bounceAnimation) {
      setBounceAnimation(true);
    }

  });

  // Full left-to-right rotation animation between constraints after initial animation completes
  useFrame(() => {
    if (!bounceAnimation || animationStartTime === null) return;

    const currentTime = clock.elapsedTime;
    const rotationTime = currentTime - (animationStartTime + 0.6); // Start after initial animation
    const rotationProgress = (rotationTime % 18) / 18; // 8 second cycle for slower rotation

    // Half rotation between the constraints (±Math.PI / 18 = ±10°)
    const maxRotation = Math.PI / 32; // Half of maxAzimuthAngle constraint
    const rotationAngle =
      Math.sin(rotationProgress * Math.PI * 2) * maxRotation;

    if (groupRef.current) {
      groupRef.current.rotation.y = rotationAngle;
    }
  });

  return (
    <group
      ref={groupRef}
      scale={[scale, scale, scale]}
      rotation={[0, 0, rotation]}
      position={[0, 1.25, 0]} // Move the entire group slightly lower
    >
      {/* Title - Cognitive */}
      <AnimatedText3D
        text="Cognitive"
        position={[0, 0.625, 0]} // Half the distance above center
        fontSize={1.25}
        color="#FF6B6B"
        delay={0}
        duration={1}
        isTitle={true}
        opacity={opacity}
      />

      {/* Title - Engineering */}
      <AnimatedText3D
        text="Engineering"
        position={[0, -0.625, 0]} // Half the distance below center
        fontSize={1.25}
        color="#FF6B6B"
        delay={0}
        duration={1}
        isTitle={true}
        opacity={opacity}
      />
    </group>
  );
}
