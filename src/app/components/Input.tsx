import React, { FC } from "react"

interface InputProps {
  value: string
  placeholder?: string
  className?: string
  onChange: (value: string) => void
}

const Input: FC<InputProps> = ({
  value,
  placeholder,
  className,
  onChange,
  ...props
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  )
}

export default Input
