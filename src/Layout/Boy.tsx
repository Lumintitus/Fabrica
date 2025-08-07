import Image from 'next/image'
import React from 'react'

export default function Boy() {
  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-between px-4 sm:px-6 md:px-8 lg:px-9'>
        <div className='max-w-full lg:max-w-[18rem] rounded-2xl'>
          <Image
            width={1000}
            height={1000}
            className='w-full lg:w-[59rem] h-full object-cover scale-100 rounded-2xl'
            src="/boy.jpg"
            alt="boy"
          />
        </div>
        <div className='mt-4 lg:mt-0'>
          <div className='pb-[2rem] lg:pb-[4rem] leading-[1.3rem] lg:leading-[1.625rem] text-[#686868] max-w-full lg:max-w-[37rem] text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] tracking-tighter font-[500]'><p> <span className='pl-0 lg:pl-[6rem] text-justify font-[500] text-black tracking-tighter text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem]'>No fluff, just results.</span> Thoughtful design and tools that make your work easier. We focus on smart design and useful features, project after project.</p></div>
          <div className='flex flex-col sm:flex-row gap-1'>
            <div className='bg-white w-full sm:w-[14rem] lg:w-[19rem] h-[5rem] sm:h-[6rem] lg:h-[7rem] rounded-2xl p-4 sm:p-5 lg:p-5.5 flex justify-between sm:gap-[4rem] lg:gap-[9rem] text-[2rem] sm:text-[2.3rem] lg:text-[2.813rem] tracking-tight font-[600]'><h1>50+</h1>
              <div className='text-[#686868] text-[0.625rem] font-[600]'><h1>01</h1></div>
            </div>
            <div className='bg-white w-full sm:w-[14rem] lg:w-[19rem] h-[5rem] sm:h-[6rem] lg:h-[7rem] rounded-2xl p-4 sm:p-5 lg:p-5.5 flex justify-between sm:gap-[4rem] lg:gap-[9rem] text-[2rem] sm:text-[2.3rem] lg:text-[2.813rem] tracking-tight font-[600]'><h1>95%</h1>
              <div className='text-[#686868] text-[0.625rem] font-[600]'><h1>02</h1></div>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-1 pt-1'>
            <div className='bg-white w-full sm:w-[14rem] lg:w-[19rem] h-[12rem] sm:h-[14rem] lg:h-[18rem] rounded-2xl p-4 sm:p-6 lg:p-8 text-[1rem] sm:text-[1.05rem] lg:text-[1.125rem] tracking-tight font-[500]'><h1 className='text-right'>Successful projects completed</h1>
              <div className='text-[#686868] pt-[4rem] sm:pt-[5rem] lg:pt-[7.5rem] max-w-full sm:max-w-[10rem] lg:max-w-[13.1rem] text-[0.875rem] sm:text-[0.9375rem] lg:text-[1rem] font-[500]'><h1>We've delivered 50+ projects that help companies generate real results.</h1></div>
            </div>
            <div className='bg-white w-full sm:w-[14rem] lg:w-[19rem] h-[12rem] sm:h-[14rem] lg:h-[18rem] rounded-2xl p-4 sm:p-6 lg:p-8 text-[1rem] sm:text-[1.05rem] lg:text-[1.125rem] tracking-tight font-[500]'><h1 className='max-w-full sm:max-w-[8rem] lg:max-w-[10rem] relative sm:left-[3rem] lg:left-[5rem] text-right'>Customer satisfaction rate</h1>
              <div className='flex pt-[5rem] sm:pt-[7rem] lg:pt-[10rem] gap-3 sm:gap-4 lg:gap-6 w-full'>
                <div>
                  <Image
                    src="/logo b.svg"
                    alt="Customer satisfaction"
                    width={1000}
                    height={1000}
                    className='object-cover w-[2.5rem] sm:w-[3rem] lg:w-[3.5rem]' />
                </div>
                <div>
                  <Image
                    src="/logoc.svg"
                    alt="Customer satisfaction"
                    width={1000}
                    height={1000}
                    className='object-cover w-[4rem] sm:w-[5rem] lg:w-[6rem]' />
                </div>
                <div>
                  <Image
                    src="/logon.svg"
                    alt="Customer satisfaction"
                    width={1000}
                    height={1000}
                    className='object-cover w-[3.5rem] sm:w-[4.5rem] lg:w-[5rem]' /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}