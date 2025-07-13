import { useEffect, useState } from "react";

function AnimatedSphere() {
  const [hex_color_left, setColorLeft] = useState<string>("");
  const [hex_color_right, setColorRight] = useState<string>("");
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    const scrollDiv = document.getElementById("content-div");

    scrollTrigger();

    function scrollTrigger() {
      if (!scrollDiv) return;

      const SCROLL_TOP = scrollDiv.scrollTop;
      const MAX_SCROLL_TOP = scrollDiv.scrollHeight;
      const SCROLL_PERCENT = SCROLL_TOP / MAX_SCROLL_TOP;

      setPercent(SCROLL_PERCENT);

      const ascending = Math.round(SCROLL_PERCENT * 255);
      const descending = Math.round((1 - SCROLL_PERCENT) * 255);

      const hex_ascending = ascending.toString(16).padStart(2, "0");
      const hex_descending = descending.toString(16).padStart(2, "0");

      const color_left = `#${hex_ascending}${hex_descending}00`;
      const color_right = `#${hex_descending}00${hex_ascending}`;

      setColorLeft(color_left);
      setColorRight(color_right);
    }

    scrollDiv?.addEventListener("scroll", scrollTrigger);

    return () => scrollDiv?.removeEventListener("scroll", scrollTrigger);
  }, []);

  return (
    <>
      <mesh position={[-5, 0, 0]}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshStandardMaterial
          color="#000000"
          emissive={hex_color_left}
          //emissive={"#dd00ff"}
          emissiveIntensity={4 + 15 * percent}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[5, 0, 0]}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshStandardMaterial
          color="#000000"
          toneMapped={false}
          emissive={hex_color_right}
          //emissive={"#ff0000"}
          emissiveIntensity={4 + 15 * percent}
        />
      </mesh>
    </>
  );
}

export { AnimatedSphere };
