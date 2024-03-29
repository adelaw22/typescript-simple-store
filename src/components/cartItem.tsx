import { TrashIcon } from '@heroicons/react/24/outline'

const cartItem = () => {
  return (
    <div>
        <div>
            <img src='' alt=""/>
        </div>

        <div>
            <p>Name Of Product</p>

            <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
        </div>

        <div>
            <TrashIcon className='h-5 w-5 stroke-gray-700 stroke-2 cursor-pointer'/>
            <p>$200.00</p>
        </div>

        <hr className='border-t-1 border-t-neutral-400'/>
    </div>
  )
}

export default cartItem