import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import "./three-canvas.css";
import { useEffect, useState } from "react";
import { AnimatedStars } from "./animated-stars";
import { AnimatedSphere } from "./animated-sphere";

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

      <AnimatedSphere />

      <ambientLight intensity={0.6} />
      <pointLight position={[0, 0, 3]} intensity={2} color="#ffffff" />

      <OrbitControls />

      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>
    </Canvas>
  );
}

export { ThreeCanvasView };
