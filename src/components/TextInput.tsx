import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

// Interfaces
export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }
export interface TextInputRootProps { children: ReactNode; }
export interface TextInputIconProps { children: ReactNode; }

/**
 * Root component
 * @param {TextInputRootProps} props Component props
 * @returns React component
 */
function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className={clsx(
      'flex',
      'items-center',
      'gap-3',
      'py-4',
      'px-3',
      'rounded',
      'w-full',
      'bg-gray-800',
      'focus-within:ring-2',
      'ring-cyan-200'
    )}>
      {children}
    </div>
  )
}

/**
 * Icon component
 * @param {TextInputIconProps} props Component props
 * @returns React component
 */
function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}

/**
 * Input component
 * @param {TextInputInputProps} props Component props
 * @returns React component
 */
function TextInputInput(props: TextInputInputProps) {
  return (
    <input className='bg-transparent flex-1 outline-none text-gray-100 text-XS placeholder:text-gray-400'
      {...props}
    />
  )
}

// Change display name
TextInputIcon.displayName = "TextInput.Icon";
TextInputRoot.displayName = "TextInput.Root";
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}