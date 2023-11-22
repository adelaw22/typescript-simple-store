import React from 'react'
import { ComponentProps } from '../../types/global'

const componentStyles ={
  hrStyle: "border-t-1 border-t-neutral-400",
}

const CustomModal=({title, children}:ComponentProps)=> {
  return (
    <div  className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white border rounded shadow-lg p-4">
         <h3>{title}</h3>
         <hr className={componentStyles.hrStyle}/>
         {children}
        </div>
    </div>
  )
}

export default CustomModal