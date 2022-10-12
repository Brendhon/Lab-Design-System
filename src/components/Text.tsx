import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({ size = 'lg', children, asChild, className }: TextProps) {
  // Define class attrs
  const TextClass = clsx('text-gray-100 font-sans', {
    'text-XS': size === 'sm',
    'text-SM': size === 'md',
    'text-MD': size === 'lg',
  }, className)

  // Define component
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp className={TextClass}>
      {children}
    </Comp>
  )
}