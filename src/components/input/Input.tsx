import React from 'react'
interface IInputParameter {
    valueState: string | number ;
    inputHandler: Function;
    className: string;
    placeholder: string;
    type: string;
  }
const Input = ({
    valueState,
    inputHandler,
    className,
    placeholder,
    type,
  }: IInputParameter) => {
  return (
    <div>
      <input
        value={valueState}
        onChange={(e: any) => inputHandler(e)}
        className={className}
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}

export default Input
