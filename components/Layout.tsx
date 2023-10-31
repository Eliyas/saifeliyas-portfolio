import React from 'react';

import FollowBar from "@/components/layout/FollowBar"
import Sidebar from "@/components/layout/Sidebar"
import { User } from '@/common/models';

const Layout: React.FC<{ children: React.ReactNode; userIdMap: Record<string, User> }> = (props) => {
  return (
    <div className="min-h-screen h-[100%] bg-[#FFFFFF]">
      <div className="container h-full mx-auto xl:px-30 max-w-8xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div 
            className="
              col-span-3 
              lg:col-span-2 
              border-x-[1px] 
              border-neutral-100
          ">
            {props.children}
          </div>
          <FollowBar userIdMap={props.userIdMap}/>
        </div>
     </div>
    </div>
  )
}

export default Layout;
