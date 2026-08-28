import React from 'react';
import logoImg from '../assets/logo.png';

interface InstituteLogoProps {
  className?: string;
  size?: number | string;
  variant?: 'full' | 'badge' | 'icon';
}

export const InstituteLogo: React.FC<InstituteLogoProps> = ({
  className = 'w-12 h-12',
  size,
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <img
      src={logoImg}
      alt="Abhinav Technical Institute Logo"
      className={`${className} shrink-0 object-contain drop-shadow-xs`}
      style={style}
    />
  );
};

export default InstituteLogo;
