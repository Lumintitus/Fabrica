import React from 'react';

export default function Casestudy() {
  return (
    <div className='flex gap-2'>
      <div className="pl-8 relative">
        <div className=" w-[38rem] h-[33.5rem] rounded-2xl bg-[#121212] overflow-hidden">
          {/* Floating Image */}
          <img
            src="/casestudy.png"
            alt="Case Study"
            className="absolute h-[34rem] left-[16rem] bottom-3"
          />

          {/* Text Overlay */}
          <div className="absolute left-20 top-12">
            <h1 className="text-white text-[1rem] tracking-tighter">Case study</h1>
            <p className="text-[#888888] text-[0.75rem] tracking-tighter font-[600]">
              UX/UI Redesign, Frontend Optimization.
            </p>
          </div>
          <div className=' absolute w-[3rem] top-9 left-[34rem]'>
            <img src="/plus-svgrepowomen.svg" alt="" />
          </div>
          <div className='absolute top-1/3 text-[4rem] left-20 font-[600] text-[white]'>fabrica®</div>
          <div className='absolute left-20 bottom-7'>
            <button className='text-white font-[600 ] text-[0.75rem] flex gap-2'>Live website <img className='w-[1rem] color-[#5C5C5C]' src="/arrow-up-solid-svgrepo-com.svg" alt="" /></button>
          </div>
          <div className='absolute bottom-8 left-[16rem]'>
            <div className='text-white font-[600] text-right max-w-[20rem] text-[1.375rem] pb-2'><p>From branding to web development and marketing</p></div>
            <div className='text-[#A1A1A1] font-[600] text-[0.875rem] text-right'><h1>We do it all.</h1></div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='bg-white tracking-tighter p-[2rem] w-[18.5rem] h-[33.5rem] rounded-2xl'>
          <h1 className='text-[0.875rem] font-[450] text-[#888888]'>Performance Boost:</h1>
          <h1 className=' font-[700] text-[1.875rem] tracking-tighter'>Page speed</h1>
          <h1 className='font-[700] text-[1.875rem] tracking-tighter'>+48%,</h1>
          <h1 className='font-[700] text-[1.875rem] tracking-tighter'>Bounce rate</h1>
          <h1 className='font-[700] text-[1.875rem] tracking-tighter'>-23%</h1>
          <p className=' pt-[2rem] text-[0.875rem] tracking-tighter font[450] text-[#888888]'>Conversion Rate Improvement:</p>
          <h1 className=' pb-[4rem]  font-[700] tracking-tighter text-[1.855rem]'>4.2% → 5.9%</h1>
          <img className='w-[5rem] tracking-tighter pb-1' src="/5 starts.jpg" alt="" />
          <p className='text-[#777777] tracking-tighter pb-3 font-[450] max-w-[28rem] text[0.875rem] leading-5'>“Thanks to the redesign, we've seen a steady 60% increase in leads.”</p>
          <div className='flex gap-4 items-center'>
            <div className='overflow-hidden w-[1.8rem] rounded-[2rem]'><img src="/case study-g.jpg" alt="" /></div>
            <div className='text-[0.75rem] text-[black] font-[500]'><h1>Angela Smith</h1></div>
          </div>
        </div>
      </div>
      <div className='flex-1/2'>
        <div className='bg-white tracking-tighter p-[2rem] w-[18.5rem] h-[16.75rem] rounded-2xl'>
        </div>
        <div className='bg-white tracking-tighter p-[2rem] w-[18.5rem] h-[16.75rem] rounded-2xl'>
      </div>
      </div>

    </div>
  );
}
