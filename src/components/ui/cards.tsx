import React, { FC } from "react";

interface CardsProps {
  imageSrc: string;
}

const Cards: FC<CardsProps> = ({ imageSrc }) => {
  return (
    <div className="border rounded m-1">
      <img src={imageSrc} alt="hey" />
    </div>
  );
};

export default Cards;
