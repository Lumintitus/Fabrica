import Image from 'next/image'
import React from 'react'

export default function Boy() {
  return (
    <div>
        <div className='px-9 '>
            <div className='max-w-[19rem] max-h-full overflow-hidden relative rounded-2xl '>
            <Image
            width={1000}
            height={1000}
            className='w-[59rem] h-full object-cover scale-110 rounded-2xl hover:scale-125 transition-all duration-500 ease-in-out' 
            src="/boy.jpg" 
            alt="boy" 
            />
            </div>
        </div>
    </div>
  )
}
