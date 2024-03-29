"use client";

import { useEffect, useState } from "react";

export default function GlowingBlob() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const startDiv = document.getElementById("startBlob")!;
      const endDiv = document.getElementById("endBlob")!;

      const startPos = startDiv ? startDiv.getBoundingClientRect().top : null;
      const endPos = endDiv ? endDiv.getBoundingClientRect().top : null;

      if (startPos && endPos) {
        setIsVisible(startPos < window.innerHeight / 2 && endPos > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll(); // Initial check in case the component is in view on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const moveBlob = (e: MouseEvent | TouchEvent) => {
      const blob = document.getElementById("blob") as HTMLDivElement | null;
      // const blur = document.getElementById("blur") as HTMLDivElement | null;

      if (!blob || !blur) return;

      const { clientX, clientY } = "touches" in e ? e.touches[0]! : e;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        {
          duration: 3000,
          fill: "forwards",
        },
      );
    };

    document.body.addEventListener("mousemove", moveBlob);
    document.body.addEventListener("touchmove", moveBlob);

    return () => {
      document.body.removeEventListener("mousemove", moveBlob);
      document.body.removeEventListener("touchmove", moveBlob);
    };
  }, []);

  if (!isVisible) return null;
  else return <div id="blob"></div>;
}
