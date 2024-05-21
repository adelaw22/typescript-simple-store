import { TrashIcon } from '@heroicons/react/24/outline'
import BackPack from "../../assets/images/backpack.png"
import { componentStyles } from './cartModel'

const cartItem = () => {
  return (
    <>
        <div className='flex'>
       <div className=' flex '>
            <div className='bg-[#EBECF2] w-[6rem] p-3 rounded-md'>
                <img src={BackPack} alt="" className='w-full object-contain'/>
            </div>

            <div className="ml-4 flex flex-col pt-2">
                <p className='font-semibold text-[18px]'>Name Of Product</p>

                <div className='mt-2'>
                    <button>-</button>
                    <span className='mx-2'>1</span>
                    <button>+</button>
                </div>
                
               
            </div>

       </div>
        <div className='pt-2 ml-auto flex flex-col'>
            <p>$200.00</p> 
            <div className='mt-auto ml-auto'>
                    <TrashIcon className='h-4 w-4 stroke-gray-700 stroke-2 cursor-pointer'/>
                </div>
        </div>
        </div>
        <hr className={componentStyles.hrStyle}/>
    </>
  )
}

export default cartItem