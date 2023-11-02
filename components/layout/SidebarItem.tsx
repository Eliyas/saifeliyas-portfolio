import React, { useCallback } from 'react';
import { IconType } from "react-icons";
import { useRouter } from 'next/router';

import useCurrentUser from '@/hooks/useCurrentUser';
import { BsDot } from 'react-icons/bs';
import Image from 'next/image';
import { SIDEBAR_TYPE } from '@/common/models';

interface SidebarItemProps {
  label: string;
  icon: IconType;
  href?: string;
  url: string;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
  isImage?: boolean;
  activeBar?: string;
  setActiveBar?: any;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ isImage, url, label, icon: Icon, href, auth,
   onClick, alert, activeBar, setActiveBar }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if (href) {
      setActiveBar(label);
      if(href.includes(".pdf")) {
        window.open(href, "_blank");
      } else {
        router.push(href);
      }
    }
  }, [router, href, onClick, label, setActiveBar]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className="
        relative
        rounded-full 
        hidden
        h-14
        w-14
        items-center
        justify-center 
        p-4
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer
        xs:hidden 
        lg:hidden
      ">
        {!isImage ? <Icon size={28} /> : <Image src={url} alt='img' width={25} height={25} />}
        {alert ? <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} /> : null}
      </div>
      <div className="
        relative 
        flex
        xs:flex
        lg:flex 
        items-row 
        gap-4 
        p-4 
        rounded-full 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer
        items-center
      ">
        {!isImage ? <Icon size={24} /> : <Image src={url} alt='img' width={25} height={25} />}
        <p className={`block xs:max-lg:hidden lg:block text-black text-xl ${activeBar == label ? 'font-bold' : ''}`}>
          {label}
        </p>
        {alert ? <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} /> : null}
      </div>
    </div>
  );
}

export default SidebarItem;