import React, { useRef, useEffect } from "react";

const Whiteboard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d") as CanvasRenderingContext2D;

      // Drawing functions
      const handleMouseDown = (e: MouseEvent) => {
        context.beginPath();
        context.moveTo(
          e.clientX - canvas.offsetLeft,
          e.clientY - canvas.offsetTop
        );
      };

      const handleMouseMove = (e: MouseEvent) => {
        context.lineTo(
          e.clientX - canvas.offsetLeft,
          e.clientY - canvas.offsetTop
        );
        context.stroke();
      };

      // Attach event listeners
      canvas.addEventListener("mousedown", handleMouseDown);
      canvas.addEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return <canvas ref={canvasRef} width={1200} height={800} />;
};

export default Whiteboard;
