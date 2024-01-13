import React, { FC } from "react";

interface CardsProps {
  imageSrc: string;
  onClick: () => void;
}

const Cards: FC<CardsProps> = ({ imageSrc, onClick }) => {
  return (
    <div className="border rounded m-1">
      <button onClick={onClick}>
        <img src={imageSrc} alt="hey" />
      </button>
    </div>
  );
};

export default Cards;
