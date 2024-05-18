import React from 'react';

import { EIconName } from './Icon.enum';
import ArrowDown from "@/components/Icon/ArrowDown";

const Icon = ({ name, color, className = '', onClick }) => {
  const renderIcon = () => {
    switch (name) {
      case EIconName.ArrowDown:
        return <ArrowDown color={color} />;
      default:
        break;
    }
  };
  return (
    <span
      className={`flex justify-center items-center ${className}`}
      onClick={onClick}
    >
      {renderIcon()}
    </span>
  );
};
export default Icon;