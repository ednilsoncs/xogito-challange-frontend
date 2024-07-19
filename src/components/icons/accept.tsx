import React from "react";
interface IconPros { className: string }
const AcceptIcon: React.FC<IconPros> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M.256 8.606a1.063 1.063 0 011.813-.75l14.119 14.119L30.101 8.063c.413-.412 1.087-.412 1.5 0s.413 1.088 0 1.5L16.938 24.232a1.063 1.063 0 01-1.5 0L.569 9.363a1.053 1.053 0 01-.313-.756z"></path>
    </svg>
  );
}

export default AcceptIcon;