import React from 'react'

type ButtonSize = 'lg' | 'sm'

interface BaseButtonProps {
  className?: string;
  size?: ButtonSize;
  disabled?: boolean;
  children?: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>


const Button: React.FC<ButtonProps> = (props) => {

  return (
    <button>button</button>
  )
}

export default Button