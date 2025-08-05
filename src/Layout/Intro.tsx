import Link from 'next/link'
import React from 'react'

export default function Intro () {
  return (
    <div>
    <div className="flex justify-between font-[600] items-center py-6 px-8 text-[#090909] fixed z-10 top-0 left-0 right-0 bg-white">
      <Link  href="/" className=" text-[1.2rem] leading-[1.2]">fabrica®</Link>
      <Link href="/studio" className='hidden md:block leading-[1.2] text-[0.969rem]'>Studio</Link>
      <Link href="/projects" className=' hidden md:block relative leading-[1.2] text-[0.969rem]'>Projects<span className='text-[#969696] text-[8px] absolute pb-1.5 pl-1 '>27</span></Link>
      <Link href="/blog" className='hidden md:block leading-[1.2] text-[0.969rem]'>Blog</Link>
      <Link href="/contact" className='hidden md:block leading-[1.2] text-[0.969rem]'>Contact</Link>
      <button className=' leading-[1.2] text-[0.969rem]'>
        <div className='menu-container'>
          <div className='menu-frame'></div>
          <div className='menu-frame'></div>
        </div>
      </button>
    </div>
    </div>
  )
}


