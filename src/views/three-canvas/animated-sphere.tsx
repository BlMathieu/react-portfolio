import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color, type MeshStandardMaterial } from "three";

function AnimatedSphere() {
 /* const materialRef = useRef<MeshStandardMaterial>(null);
  const emissiveColor = useRef(new Color()).current;

  const min_intensity = 1;
  const max_intensity = 1;

  useFrame(({ clock }) => {
    if (materialRef.current) {
      const elapsed = clock.elapsedTime;

      const intensity = min_intensity + ((Math.sin(elapsed * 2) + 1) / 2) * (max_intensity - min_intensity);
      materialRef.current.emissiveIntensity = intensity;

      //const hue = ((elapsed * 40) % 360) / 360;

      //emissiveColor.setHSL(hue, 1, 0.3);

      materialRef.current.emissive.copy(emissiveColor);
    }
  });*/

  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#000000"
        toneMapped={false}
        emissive={'#a1d16d'}
        emissiveIntensity={1.5}
      />
    </mesh>
  );
}

export { AnimatedSphere };
