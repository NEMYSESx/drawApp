import React, { FC, useState } from "react";
import Card from "./ui/cards";
import circleIcon from "../assets/icons/circle.svg";
import pencilIcon from "../assets/icons/pencil.svg";
import squareIcon from "../assets/icons/square.svg";
import triangleIcon from "../assets/icons/triangle.svg";

const Bar: FC = () => {
  interface Square {
    id: number;
  }

  const [squares, setSquares] = useState<Square[]>([]);

  const creatingCircle = () => {
    console.log("sgfd");
  };

  const pencil = () => {
    console.log("retdf");
  };

  const createSquare = () => {
    const newSquare: Square = {
      id: squares.length + 1,
    };
    setSquares((prevSquares) => [...prevSquares, newSquare]);
  };

  const creatingTriangle = () => {
    console.log("xc");
  };

  return (
    <nav className="border absolute flex">
      <Card imageSrc={circleIcon} onClick={creatingCircle} />
      <Card imageSrc={pencilIcon} onClick={pencil} />
      <Card imageSrc={squareIcon} onClick={createSquare} />
      <Card imageSrc={triangleIcon} onClick={creatingTriangle} />
    </nav>
  );
};

export default Bar;
