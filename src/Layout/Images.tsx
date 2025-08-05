// import React from 'react'


// export default function Images() {
//     return (
//         <div className='absolute px-12'>
//             <div className=' bg-white w-[100%] text-[1.125rem] font-[600] items-center py-4 gap-4 px-4 flex rounded-md '>Boltshift.
//                 <div className='text-[#686868] text-[0.75rem] font-[600] '>/2025</div>
//                 <div className='bg-[#e7e7e7] flex gap-2 left-[33rem] rounded-full opacity-100 will-change-auto flex-none h-2 w-2 relative'>
//                     <div className='bg-[#e7e7e7] rounded-full opacity-100 will-change-auto flex-none h-2 w-2 relative'></div>
//                     <div className='bg-[#e7e7e7] rounded-full opacity-100 will-change-auto flex-none h-2 w-2 relative'></div>
//                     <div className='bg-[#e7e7e7] rounded-full opacity-100 will-change-auto flex-none h-2 w-2 relative'></div>
//                 </div>
//             </div>
//             <div className=''>
//                 <img className='object-cover w-full rounded-xl pt-1.5 h-full' src="/imgi_9_TQUaM9GTresksymLH16ncQaPo.jpg" alt="" />
//                 <img className='object-cover absolute top-80 right-95' src="/uesNBJIRG5fZ2tDJzkhxXbuauQw (1).svg" alt="" />
//             </div>
            
//         </div>

//     )
// }

import React from 'react';
import { imageData } from '@/Datas/Data';

interface ImageItem {
  title: string;
  year: string;
  mainImg: string;
  overlayImg: string;
}

export default function Images() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-6">
      {imageData.map((item:ImageItem, index) => (
        <div key={index} className="space-y-2">
          {/* Info Block */}
          <div className="bg-white tracking-tight w-full text-[1.125rem] font-semibold flex items-center py-3 px-4 rounded-md">
            {item.title}
            <div className="text-[#686868] text-sm font-semibold ml-2">
              {item.year}
            </div>
            {/* <div className="flex gap-1 ml-auto">
              {[...Array(3)].map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className="bg-[#e7e7e7] rounded-full h-2 w-2"
                ></div>
              ))}
            </div> */}
          </div>

          {/* Image Block */}
          <div className="relative w-full h-[26.5rem]">
            <img
              className="object-cover w-full h-full rounded-xl"
              src={item.mainImg}
              alt={item.title}
            />
            <img
              className="object-contain absolute top-50 right-65 w-30 h-10"
              src={item.overlayImg}
              alt="Overlay"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
