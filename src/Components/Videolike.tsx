import Image from 'next/image'
import React from 'react'

export default function Videolike() {
  return (
    <div className='flex flex-row items-center p-5'>
        <div className='bg-white p-2 rounded-[1rem]'>
            <Image
            src={'/imgi_1_XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg'} 
            alt='Video thumbnail'
            width={1000}
            height={1000}
            className='rounded-[1rem] h-[7.5rem] w-full object-cover'
            />
        </div>
        <div>
            <div className='bg-white py-5 pl-6 pr-10 rounded-[1rem] flex flex-col items-start justify-center gap-3  '>
                <div>
                <h2 className='text-[0.8rem] font-[700]'>Team Lead</h2>
                <p className='text-[0.6rem] font-[600]'>at fabrica®</p>
                <p className='text-[1.1rem]'>Lauren Thompson</p>
                </div>
                
                <button className='bg-black text-white px-1.5 py-1 rounded-2xl flex items-center justify-center gap-3'>
                    <span className='text-[0.6rem] leading-0'>Let’s Talk</span>
                    <span className='bg-white text-white rounded-full w-2.5 h-2.5'></span>
                </button>
            </div>
        </div>
    </div>
  ) 
}
