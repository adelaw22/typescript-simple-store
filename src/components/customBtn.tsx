import React from 'react';
import { Link } from 'react-router-dom';

interface CustomBtnProps {
  children?: React.ReactNode;
  btnStyle?: string;
  to?: string;
  onClick?: () => void;
  rest?: any;
}

const CustomBtn = ({ btnStyle, children, to, onClick, ...rest }: CustomBtnProps) => {
  const baseStyle = 'bg-neutral-900 hover:bg-neutral-700 text-neutral-50 text-base';

  if (to) {
    return (
      <Link to={to}>
        <button className={`${baseStyle} ${btnStyle}`} {...rest}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button className={`${baseStyle} ${btnStyle}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default CustomBtn;
