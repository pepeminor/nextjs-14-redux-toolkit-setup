import React from 'react';

interface IButtonProps {
  children: string;
  onClick?: any;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
}

const Button = (props: IButtonProps) => {
  const { children, onClick, variant = 'primary', style, className, disabled } = props;

  if (variant === 'ghost') {
    return (
      <button
        disabled={disabled}
        className={`text-white w-full rounded-[20px] border-[1px] border-solid border-gray px-4 py-2 font-bold transition-all ${className}`}
        onClick={onClick}
        style={{ ...style }}
      >
        {children}
      </button>
    );
  }
  if (variant === 'secondary') {
    return (
      <button
        disabled={disabled}
        className={`bg-orange hover:bg-orange-700 text-white w-full rounded-[20px] px-4 py-2 font-bold transition-all ${className}`}
        onClick={onClick}
        style={{ ...style }}
      >
        {children}
      </button>
    );
  }
  if (variant === 'tertiary') {
    return (
      <button
        disabled={disabled}
        className={`bg-blue hover:bg-blue-700 text-white w-full rounded-[20px] px-4 py-2 font-bold transition-all ${className}`}
        onClick={onClick}
        style={{ ...style }}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      disabled={disabled}
      className={`bg-blue hover:bg-blue-700 text-white w-full rounded-[20px] px-4 py-2 font-bold transition-all ${className}`}
      onClick={onClick}
      style={{ ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
