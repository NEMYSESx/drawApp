import React, { FC } from "react";
import Card from "./ui/cards";
import circleIcon from "../assets/icons/circle.svg";
import pencilIcon from "../assets/icons/pencil.svg";
import squareIcon from "../assets/icons/square.svg";
import triangleIcon from "../assets/icons/triangle.svg";

const Bar: FC = () => {
  return (
    <nav className="border absolute flex">
      <Card imageSrc={circleIcon} />
      <Card imageSrc={pencilIcon} />
      <Card imageSrc={squareIcon} />
      <Card imageSrc={triangleIcon} />
    </nav>
  );
};

export default Bar;
