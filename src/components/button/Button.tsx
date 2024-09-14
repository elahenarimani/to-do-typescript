import React from 'react'

interface IButtonParameter {
    children: string | JSX.Element;
    onClickHandler: Function;
    className?: string;
    disabled?: boolean
  }
const Button = ({ onClickHandler, children, className ,disabled  }: IButtonParameter) => {
  return (
    <div>
      <button onClick={() => onClickHandler()} className={className} disabled={disabled}>
        {children}
      </button>
    </div>
  )
}

export default Button
