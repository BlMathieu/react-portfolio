import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import "./three-canvas.css";
import { useEffect, useState } from "react";
import { AnimatedStars } from "./animated-stars";

function ThreeCanvasView() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const onResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Canvas
      style={{ width: size.width, height: size.height }}
      className="canvas-container"
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <color attach="background" args={["#000000"]} />
      <AnimatedStars />
      {/* Une sphère lumineuse au centre */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          emissive="#ff00ff"
          emissiveIntensity={3}
          color="#000000"
        />
      </mesh>

      {/* Lumière */}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 3]} intensity={2} color="#ffffff" />

      {/* Contrôle de la caméra */}
      <OrbitControls />

      {/* Post-processing bloom */}
      <EffectComposer>
        <Bloom
          intensity={1.5} // force de l’effet
          luminanceThreshold={0.1} // seuil de déclenchement du bloom
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>
    </Canvas>
  );
}

export { ThreeCanvasView };
