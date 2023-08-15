import React from 'react'
import { Link } from 'react-router-dom'

interface IFooterLink{
    linkItem: string[];
    linkHeader: string;
}

const footerLink = ({linkItem, linkHeader}: IFooterLink) => {
  return (
    <div>
        <p className='text-xl font-bold mb-3'>{linkHeader}</p>
        {linkItem.map((item: string, i: any)=>(
            <Link key={i} to="#">
                <p className='text-base mb-2 hover:text-neutral-500'>{item}</p>
            </Link>
        ))
        }
        
    </div>
  )
}

export default footerLink