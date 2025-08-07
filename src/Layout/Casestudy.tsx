import React from 'react';

export default function Casestudy() {
  return (
    <div className="px-8 relative">
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
        <div className='absolute left-20 bottom-4'>
            <button className='text-white font-[600 ] text-[0.75rem] flex gap-2'>Live website <img className='w-[1.5rem] color-[#5C5C5C]' src="/diagonal-arrow-svgrepo-com.svg" alt="" /></button>
        </div>
      </div>
    </div>
  );
}
