import React, { ButtonHTMLAttributes, FC, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  className,
  ...props
}) => {
  const baseClasses = "rounded-lg px-4 py-2"
  const enabledClasses = "bg-blue-500 text-white"
  const disabledClasses = "bg-gray-400 text-white cursor-not-allowed"

  const computedClasses = `${baseClasses} ${disabled ? disabledClasses : enabledClasses} ${className || ""}`

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={computedClasses}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
