import React from 'react';
import { clsx } from 'clsx';

const Button = ({ children, disabled, onClick, wFull, type, icon: Icon,danger }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        `border-orange-400 border-[1px] rounded bg-orange-400 text-white text-xl py-1 px-2 hover:bg-orange-500 transition flex justify-center items-center`,
        wFull && 'w-full',
        disabled && 'disabled',
        danger&& 'bg-red-600 hover:bg-red-800'
      )}
    >
    {Icon&&<Icon />}
      {children}
    </button>
  );
};

export default Button;
