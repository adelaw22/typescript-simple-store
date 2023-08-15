import React from 'react'

interface IContainer{
    children?: React.ReactNode;
    containerStyle?: string;
    rest?: any;
}

const PageContainer = ({containerStyle, children, ...rest}: IContainer) => {
  return (
    <div className={`container mx-auto ${containerStyle}`} {...rest}>
        {children}
    </div>
  )
}

export default PageContainer