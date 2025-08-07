import React from 'react'

function Faces() {
    return (
        <div className='relative pl-8'>
            <div className='bg-white w-[75rem] rounded-2xl h-[30rem]'>
                <div className='absolute left-24 font-[600] top-14 text-[1.25rem]'><h2>fabrica® </h2>
                    <p className='text-[3.35rem] tracking-tighter font-[600]'>The faces</p><span className='text-[3.35rem] tracking-tighter leading-8 font-[600] text-[#4D4D4D]'>behind the projects.</span> 
                <div className='flex gap-[26rem]'>
                    <img src="/plus-svgrepo-com.svg" alt="" />
                    <img src="/plus-svgrepo-com.svg" alt="" />
                </div>
                </div>
                {/* <div><h1>Be part of our mission</h1></div>
                <div><p>If you’re ready to create and collaborate, we’d love to hear from you.</p></div>
                <div>
                    <button className='bg-black text-white px-1.5 py-1 rounded-2xl flex items-center justify-center gap-3'>
                        <span className='text-[0.6rem] leading-0'>Apply now</span>
                        <span className='bg-white text-white rounded-full w-2.5 h-2.5'></span>
                    </button>
                </div>
                <div><p>We believe great work comes from collaboration. That’s why we work closely with each other to ensure every project meets your goals and exceeds expectations.</p></div> */}
            </div>
        </div>
    )
}

export default Faces;