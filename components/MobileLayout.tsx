import React from 'react';
import BottomNav from './layout/BottomNav';

const MobileLayout: React.FC<{ children: React.ReactNode;}> = (props) => {
  return (
    <div className="min-h-screen h-[100%] bg-[#FFFFFF]">
      <div className="container h-full mx-auto xl:px-30 max-w-8xl">
        <div className="h-full">
          <div 
            className="w-full
              border-x-[1px] 
              border-neutral-100
          ">
            {props.children}
          </div>
          <BottomNav/>
        </div>
     </div>
    </div>
  )
}

export default MobileLayout;
