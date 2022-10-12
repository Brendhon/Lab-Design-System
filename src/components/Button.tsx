import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, className, asChild, ...props }: ButtonProps) {
  // Define component
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      {...props}
      className={clsx('py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-SM w-full transition-colors hover:bg-cyan-200 focus:ring-2 ring-white', className)}>
      {children}
    </Comp>
  )
}