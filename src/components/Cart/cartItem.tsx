import { TrashIcon } from '@heroicons/react/24/outline'
import BackPack from "../../assets/images/backpack.png"

const cartItem = () => {
  return (
    <div className='flex justify-between'>
       <div className=' flex '>
            <div className='bg-[#EBECF2] w-[9rem] p-3 rounded-md'>
                <img src={BackPack} alt="" className='w-7/5 object-contain'/>
            </div>

            <div>
                <p>Name Of Product</p>

                <div className=''>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </div>

       </div>
        <div className='align-right'>
            <TrashIcon className='h-5 w-5 stroke-gray-700 stroke-2 cursor-pointer'/>
            <p>$200.00</p>
        </div>

        <hr className='border-t-1 border-t-neutral-400'/>
    </div>
  )
}

export default cartItem