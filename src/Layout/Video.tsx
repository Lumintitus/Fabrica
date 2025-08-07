import Videolike from '@/Components/Videolike';
import React from 'react';

const Video: React.FC = () => {
    return (
        <div>
            <div className="px-2 relative top-[4.875rem]">
                <video
                    className="play-icon rounded-[1.6rem] w-full h-[85vh]  object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                    tabIndex={-1}
                >
                    <source src="/fQM1RaSPcHPbMZR0PCsoGur0U.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='absolute inset-0 '>

                    <div className='relative'>
                        <div className='relative'>
                            <p className='  tracking-tighter font-[600] absolute text-white  top-[9rem] left-[59rem] text-[1.125rem] leading-[1.375rem] '>Branding and Identity</p>
                            <p className=' tracking-tighter font-[600] absolute text-white  top-[11rem] left-[59rem] text-[1.125rem] leading-[1.375rem]'>Social Media Marketing</p>
                            <p className=' tracking-tighter font-[600] absolute text-white  top-[13rem] left-[59rem] text-[1.125rem] leading-[1.375rem]'>Web Design and Development</p>
                            <p className=' tracking-tighter font-[600] absolute text-white  top-[15rem] left-[59rem] text-[1.125rem] leading-[1.375rem]'>SEO Optimization</p>
                        </div>
                        <h1 className='text-white text-[12.569rem] font-bold px-12'>fabrica® </h1>
                        <div className='absolute top-[14rem] left-[36.5rem] tracking-tighter'>
                            <span className='text-white text-[3rem] font-bold '>Studio</span>
                        </div>
                        <div className='absolute top-[25rem] left-[46rem] tracking-tighter'>
                            <span className='text-[#A2A2A2] font-[500] text-[0.875rem] '>© 2025 fabrica® Studio</span>
                        </div>
                    </div>
                    <div className='px-6'>
                        <div className='flex gap-[15.8rem] mt-[-1.5rem] w-[3rem]'>
                            <img src="/plus-svgrepo-com.svg" alt="Video thumbnail" className=" " />
                            <img src="/plus-svgrepo-com.svg" alt="Video thumbnail" className=" " />
                            <img src="/plus-svgrepo-com.svg" alt="Video thumbnail" className=" " />
                            <img src="/plus-svgrepo-com.svg" alt="Video thumbnail" className=" " />
                        </div>
                    </div>
                    <div className='relative'>
                        <div className=" pt-[3rem] px-9 leading-[1.625rem] max-w-[38.625rem]  text-white">
                            <p className="text-white tracking-tight text-[1.375rem] font-[500]">No generic websites.No empty marketing promises.</p>
                            <p className="text-[#969696] tracking-tight text-[1.375rem] font-[500]">just tools and strategies that help your business grow and your brand shine.</p>
                        </div>
                    </div>
                    <div className='absolute bottom-0 right-5'>
                        <Videolike />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Video;

