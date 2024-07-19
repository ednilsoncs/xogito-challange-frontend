import React from "react";
interface IconPros { className: string }
const DiamondIcon: React.FC<IconPros> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path d="M62 32L32 62 2.001 32l30-30z"></path>
    </svg>
  );
}

export default DiamondIcon;