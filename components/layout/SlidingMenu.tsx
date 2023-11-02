import React from "react";
import Avatar from "../Avatar";
import { GrFormClose } from "react-icons/gr";

type Props = {
  isOpen: boolean,
  children: React.ReactNode,
  setIsOpen: (isOpen: boolean) => void
};

const SlidingMenu = (props: Props) => {
  const { isOpen, children, setIsOpen } = props;

  return (<div className={`menu ${isOpen ? 'visible active' : 'invisible'}`}>
    <div className={`menu-wrapper bg-white ${isOpen ? 'active' : ''}`}>
      <div className="flex justify-between p-4 pb-2 items-center">
        <Avatar />
        <GrFormClose size={30} onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className="flex flex-col px-4">
        <p className="text-black text-[20px] font-bold">
          Mohamed Eliyas
        </p>
        <p className="text-md text-neutral-500">
          @saifeliyas
        </p>
        <div className="flex flex-row items-center mt-3 gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="text-black font-bold">10</p>
            <p className="text-neutral-500">Following</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-black font-bold">2B</p>
            <p className="text-neutral-500">Followers</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  </div>
  );
};


export default SlidingMenu;