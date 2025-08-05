import React from 'react'

export default function Projects() {
    const num = "(27)"
  return (
    <div className='py-20 px-12'>
        <div className='flex relative gap-20 p-0'>
            <span className='w-[20%] text-[#6C6C6C]'>{num}</span>
            <div className='w-[50%]'><h2 className='text-[9rem] leading-[8.25rem] font-[600] pb-2'>Projects.</h2> <span className='font-[600] text-[2.25rem] leading-[2.25rem]'>©2025</span> </div>
            <span className='w-[30%] font-[700] justify-center max-w-[280px] text-[0.8rem] mt-[4rem] text-[#686868]'>We’ve helped businesses across industries achieve their goals. Here are some of our recent projects.</span>
        </div>
    </div>
  )
}
