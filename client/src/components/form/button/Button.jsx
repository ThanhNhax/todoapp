import React from 'react';
import { clsx } from 'clsx';
import Loading from '../../loading/Loading';

const Button = ({
  children,
  disabled,
  onClick,
  wFull,
  type,
  icon: Icon,
  danger,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `border-orange-400 border-[1px] rounded bg-orange-400 text-white text-xl py-1 px-2 hover:bg-orange-500 transition flex justify-center items-center`,
        disabled && 'opacity-50 cursor-not-allowed',
        wFull && 'w-full',
        danger && 'bg-red-600 hover:bg-red-800'
      )}
    >
      {Icon && <Icon />}
      {disabled &&<> <Loading/> &nbsp;</>}
      {children}
    </button>
  );
};

export default Button;
