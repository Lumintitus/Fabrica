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
                    <div className=''>
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

                    </div>
                    <div className=' flex gap-[17rem] mt-[-1.375rem] w-[3.5rem] pl-6 '>
                        <img src="/plus-svgrepo-com.svg" alt="Video thumbnail" className=" " />
                        <img src="/plus-svgrepo-com.svg" alt="Video thumbnail" className=" " />
                        <img src="/plus-svgrepo-com.svg" alt="Video thumbnail" className=" " />
                        <img src="/plus-svgrepo-com.svg" alt="Video thumbnail" className=" " />
                    </div>
                    <div className='relative'>
                        <div className=" pt-[3rem] px-9 leading-[1.625rem] max-w-[38.625rem]  text-white">
                            <p className="text-white tracking-tight text-[1.375rem] font-[500]">No generic websites.No empty marketing promises.</p>
                            {/* <p className="text-white text-[1.375rem] font-[500] px-5"></p> */}
                            <p className="text-[#969696] tracking-tight text-[1.375rem] font-[500]">just tools and strategies that help your business grow and your brand shine.</p>
                        </div>
                    </div>
                    {/* <div className=' bottom-36 left-[60rem] p-1 rounded-[1rem] bg-[#FFFFFF] w-26 relative'>
                        <div className ='  rounded-[1rem] h-[7.5rem] w-full overflow-hidden  '>
                            <img src="/imgi_1_XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg" alt="" />
                        </div>
                    </div> */}
                    {/* <div className=' relative bottom-[17rem] left-[66.5rem] p-6 bg-[#FFFFFF] rounded-[1rem] w-[10rem] h-[8rem] flex flex-col '>
                        <p className='text-[0.875rem] font-[600] leading-[14px] text-[#0a0a0a] pb-0.5'>Team Lead</p>
                        <p className='text-[0.75rem] font-[600] leading-[13px] text-[#757575] pb-1' >at fabrica® </p>
                        <p className='text-[1.375rem] font-[600] leading-[25px] text-[#0a0a0a] pb-1 '>Lauren Thompson</p>
                        <button className=' text-white bg-[#0a0a0a] text-[0.75rem] leading-[12px] border-2  font-[600] pt-1 text-left rounded-[2.25rem] p-1'>Let’s Talk</button>
                    </div> */}
                    <div className='absolute bottom-0 right-0'>
                        <Videolike />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Video;

