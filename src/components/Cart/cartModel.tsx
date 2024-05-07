import React from 'react'
import ReactPortal from '../ReactPortal'

interface CartModalProps{
  title?: string;
  isOpen: boolean;
  onClose: ()=> void;

}


const CartModal=({isOpen}:CartModalProps)=> {
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div  className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white border rounded shadow-lg p-4">
         <h3>Shopping cart</h3>
        </div>
      </div>
    </ReactPortal>
  )
}

export default CartModal