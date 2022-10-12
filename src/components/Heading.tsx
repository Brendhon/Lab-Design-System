import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({ size = 'lg', children, asChild, className }: HeadingProps) {
  // Define class attrs
  const HeadingClass = clsx('text-gray-100 font-bold font-sans', {
    'text-LG': size === 'sm',
    'text-XL': size === 'md',
    'text-2XL': size === 'lg'
  }, className)

  // Define component
  const Comp = asChild ? Slot : 'h2';
  
  return (
    <Comp className={HeadingClass}>
      {children}
    </Comp>
  )
}