import React, { useRef, useEffect } from "react";

const Whiteboard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  //if we dont specify an empty depenency array then it will consider every rerendring or its just act like a normal
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d") as CanvasRenderingContext2D;

      const startDrawing = (e: MouseEvent) => {
        context.beginPath();
        context.moveTo(
          e.clientX - canvas.offsetLeft,
          e.clientY - canvas.offsetTop
        );

        const draw = (e: MouseEvent) => {
          context.lineTo(
            e.clientX - canvas.offsetLeft,
            e.clientY - canvas.offsetTop
          );
          context.stroke();
        };

        const stopDrawing = () => {
          canvas.removeEventListener("mousemove", draw);
          canvas.removeEventListener("mouseup", stopDrawing);
        };

        canvas.addEventListener("mousemove", draw);
        canvas.addEventListener("mouseup", stopDrawing);
      };

      canvas.addEventListener("mousedown", startDrawing);
    }
  }, []);

  return (
    <div className="absolute">
      <canvas ref={canvasRef} width={1200} height={800} />
    </div>
  );
};

export default Whiteboard;
