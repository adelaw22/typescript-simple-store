import React from 'react'

const customBtn = ({children}: react) => {
  return (
    <button className='px-16 py-3 bg-neutral-900 hover:bg-neutral-700 text-neutral-50 text-base'>{children}</button>
  )
}

export default customBtn