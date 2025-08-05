import { logos } from '@/Datas/Data';
import React from 'react'
import Image from 'next/image';

export default function Logo() {
  const logoSize = 'w-[180px] h-[140px]';
  const logoPadding = 'p-12';

  return (
    <div className=''>

      <div className=' relative flex gap-[10px] pt-[8rem] items-center px-12  overflow-hidden'>
        <img className=' w-[1rem]  ' src="/imgi_56_j6H7CUu4CDaOQoux5xCbVztY18.svg" alt="" />
        <p className='text-[1rem]  font-[500] leading-[14px] text-[#2C2C2C] '>Our Client</p>
         <div className='px-12 bottom-[0.1rem] left-[18rem] absolute'>
          <p className='text-[1rem] font-[500] leading-[14px] text-[#2C2C2C] '>(2016-25©)</p>
        </div>
      </div>
      
      <div className="p-8 w-full pt-[4.938rem] overflow-hidden ">
        <div className="flex flex-wrap justify-center gap-1  ">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className={`${logoSize} ${logoPadding} bg-white rounded-md flex items-center justify-center`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={120}
                className="w-[3.5rem] h-[2.5rem] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}