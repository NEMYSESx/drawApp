import React, { useRef, useEffect } from "react";
import Card from "./ui/cards";
import circleIcon from "../assets/icons/circle.svg";
import pencilIcon from "../assets/icons/pencil.svg";
import squareIcon from "../assets/icons/square.svg";
import triangleIcon from "../assets/icons/triangle.svg";

const Bar: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawShape =
    (drawFunction: (e: MouseEvent) => void) => (e: MouseEvent) => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");

      if (canvas && context) {
        drawFunction(e);

        const draw = (e: MouseEvent) => {
          drawFunction(e);
        };

        const stopDrawing = () => {
          canvas.removeEventListener("mousemove", draw);
          canvas.removeEventListener("mouseup", stopDrawing);
        };

        canvas.addEventListener("mousemove", draw);
        canvas.addEventListener("mouseup", stopDrawing);
      }
    };

  const pencil = drawShape((e: MouseEvent) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      context.beginPath();
      context.moveTo(
        e.clientX - canvas.offsetLeft,
        e.clientY - canvas.offsetTop
      );
    }
  });

  const createCircle = drawShape((e: MouseEvent) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      const x = e.clientX - canvas.offsetLeft;
      const y = e.clientY - canvas.offsetTop;

      context.beginPath();
      context.arc(x, y, 30, 0, 2 * Math.PI);
      context.stroke();
    }
  });

  const createSquare = drawShape((e: MouseEvent) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      const x = e.clientX - canvas.offsetLeft;
      const y = e.clientY - canvas.offsetTop;

      context.beginPath();
      context.rect(x - 30, y - 30, 60, 60);
      context.stroke();
    }
  });

  const createTriangle = drawShape((e: MouseEvent) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      const x = e.clientX - canvas.offsetLeft;
      const y = e.clientY - canvas.offsetTop;

      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x + 60, y);
      context.lineTo(x + 30, y - 60);
      context.closePath();
      context.stroke();
    }
  });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext("2d");

      canvas.addEventListener("mousedown", pencil);
      // You can add more event listeners if needed
    }
  }, []);

  return (
    <div>
      <nav className="border absolute flex">
        <Card imageSrc={circleIcon} onClick={createCircle} />
        <Card imageSrc={pencilIcon} onClick={pencil} />
        <Card imageSrc={squareIcon} onClick={createSquare} />
        <Card imageSrc={triangleIcon} onClick={createTriangle} />
      </nav>
      <canvas ref={canvasRef} width={1200} height={800} />
    </div>
  );
};

export default Bar;
