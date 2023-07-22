import React from 'react'

interface CustomBtnProps{
    children?: React.ReactNode;
    btnStyle?: string;
    rest?: any;
}

const customBtn = ({btnStyle, children, ...rest}: CustomBtnProps) => {
  return (
    <button className={` bg-neutral-900 hover:bg-neutral-700 text-neutral-50 text-base ${btnStyle}`} {...rest}>{children}</button>
  )
}

export default customBtn