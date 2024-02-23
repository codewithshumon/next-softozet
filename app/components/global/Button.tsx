import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ title, className, ...props }) => {
  return (
    <button className={className} {...props}>
      {title}
    </button>
  );
};

export default Button;
