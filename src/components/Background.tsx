"use client";
import React, { useEffect, useState } from "react";
// import { useSpring } from "react-spring";
import styled, { keyframes } from "styled-components";
import { motion, useSpring } from "framer-motion";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState([0, 0]);
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition([e.clientX, e.clientY]);
  };

  useEffect(() => {
    document.addEventListener("pointermove", handleMouseMove);

    return () => {
      document.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  return mousePosition;
};
const rotation = keyframes`
from{
  transform:translate(-50%, -50%) rotate(0deg);
}
to{
  transform:translate(-50%, -50%) rotate(360deg);
}
`;

const StyledCircle = styled(motion.div)`
  width: 40vw;
  aspect-ratio: 0.75;
  background: white;
  position: relative;
  transform: translate(-50%, -50%);
  animation: ${rotation};
  animation-duration: 50s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  background: red;
  background: linear-gradient(0deg, #00534a 0%, #f1dba8 100%);
`;

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default function Background() {
  const [x, y] = useMousePosition();
  /* const [{ X, Y }, set] = useSpring(() => ({
    X: x,
    Y: y,
    config: config.molasses,
  })); 
  useEffect(() => {
    set({ X: x, Y: y });
  }, [x, y]);*/
  const X = useSpring(x, { damping: 10, stiffness: 300 });
  const Y = useSpring(y, { damping: 10, stiffness: 300 });
  return (
    <StyledBackground>
      <StyledCircle style={{ left: X, top: Y }} />
    </StyledBackground>
  );
}
