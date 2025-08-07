import React from 'react';
import { stats } from '@/Datas/Data';


export default function Fabricanumber() {
  return (
    <div>
      <div
        className="px-10 grid flex-none gap-1 pb-[7rem]"
        style={{ gridTemplateColumns: 'repeat(4, minmax(50px, 1fr))' }}
      >
        {stats.map((item, index) => (
          <div key={index}>
            <div className="text-[5.313rem] font-[600] tracking-tighter">
              <h1>{item.number}</h1>
            </div>
            <div
              className={`text-[1rem] ${item.maxWidth} text-[#686868] tracking-tighter font-[400]`}
            >
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
