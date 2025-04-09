import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';

interface ButtonProps {
  subLabel?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  shadow?: 'blue' | 'red';
  className?: string;
}

const buttonVariants = cva(
  'relative inline-flex gap-2 justify-center items-center py-2 px-4 rounded-[10px]',
  {
    variants: {
      variant: {
        primary: 'bg-brand-red text-white',
        secondary: 'bg-brand-blue text-white',
      },
      size: {
        sm: 'min-w-32 w-full md:w-auto',
        md: 'min-w-52 w-full md:w-auto',
        lg: 'min-w-80 w-full md:w-auto',
      },
      shadow: {
        blue: 'shadow-blue',
        red: 'shadow-red',
      },
    },
  }
);
const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  className,
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  shadow = null,
  subLabel,
  ...props
}) => {
  return (
    <button
      className={cn(className, buttonVariants({ variant, size, shadow }))}
      onClick={onClick}
      {...props}
    >
      {children}
      {subLabel && (
        <span className='absolute -bottom-6 font-figtree text-[12px] text-white'>
          {subLabel}
        </span>
      )}
    </button>
  );
};

export default Button;
