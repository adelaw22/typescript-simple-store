import React from 'react'
import ReactPortal from '../ReactPortal'
// import { ComponentProps } from '../../types/global'

interface ModalProps{
  title?: string;
  isOpen: boolean;
  onClose: ()=> void;
  children: React.ReactNode;

}

const CustomModal=({title, isOpen, children}:ModalProps)=> {
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div  className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white border rounded shadow-lg p-4">
         <h3>{title}</h3>
         {children}
        </div>
      </div>
    </ReactPortal>
  )
}

export default CustomModal