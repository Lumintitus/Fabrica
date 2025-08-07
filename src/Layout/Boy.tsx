import Image from 'next/image'
import React from 'react'

export default function Boy() {
  return (
    <div>
      <div className='flex justify-between px-9 '>
        <div className='max-w-[18rem]  rounded-2xl '>
          <Image
            width={1000}
            height={1000}
            className='w-[59rem] h-full object-cover scale-100 rounded-2xl '
            src="/boy.jpg"
            alt="boy"
          />
        </div>
        <div className=''>
          <div className=' pb-[4rem] leading-[1.625rem] text-[#686868] max-w-[37rem] text-[1.375rem] tracking-tighter font-[500]'><p> <span className='pl-[6rem] text-justify font-[500] text-black tracking-tighter text-[1.375rem]'>No fluff, just results.</span> Thoughtful design and tools that make your work easier. We focus on smart design and useful features, project after project.</p></div>
          <div className='flex gap-1'>
            <div className=' bg-white w-[19rem] h-[7rem] rounded-2xl p-5.5 flex gap-[9rem] text-[2.813rem] tracking-tight font-[600]'><h1>50+</h1>
              <div className='text-[#686868] text-[0.625rem] font-[600] '><h1>01</h1></div>
            </div>
            <div className=' bg-white w-[19rem] h-[7rem] rounded-2xl p-5.5 flex gap-[9rem] text-[2.813rem] tracking-tight font-[600]'><h1>95%</h1>
              <div className='text-[#686868] text-[0.625rem] font-[600] '><h1>02</h1></div>
            </div>
          </div>
          <div className='flex gap-1 pt-1'>
            <div className=' bg-white w-[19rem] h-[18rem]  rounded-2xl p-8 text-[1.125rem] tracking-tight font-[500]'><h1 className='text-right'>Successful projects completed</h1>
              <div className='text-[#686868] pt-[7.5rem] max-w-[13.1rem] text-[1rem] font-[500] '><h1>We’ve delivered 50+ projects that help companies generate real results.</h1></div>
            </div>
            <div className=' bg-white w-[19rem] h-[18rem]  rounded-2xl p-8  text-[1.125rem] tracking-tight font-[500]'><h1 className='max-w-[10rem] relative left-[5rem] text-right '>Customer satisfaction rate</h1>
              <div className='flex pt-[10rem] gap-6 w-[full]'>
                <div>
                  <Image
                    src="/logo b.svg"
                    alt="Customer satisfaction"
                    width={1000}
                    height={1000}
                    className='object-cover w-[3.5rem]' />
                </div>
                <div>
                  <Image
                    src="/logoc.svg"
                    alt="Customer satisfaction"
                    width={1000}
                    height={1000}
                    className='object-cover w-[6rem]' />
                </div>
                <div>
                  <Image
                    src="/logon.svg"
                    alt="Customer satisfaction"
                    width={1000}
                    height={1000}
                    className='object-cover w-[5rem]' /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}