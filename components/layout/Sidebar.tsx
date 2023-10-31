import { BiBriefcaseAlt, BiLogOut, BiSolidContact, BiUser } from 'react-icons/bi';
import { ImProfile } from 'react-icons/im';
import { GrUserExpert, GrUserWorker } from 'react-icons/gr';
import { BsHouseFill } from 'react-icons/bs';
import { FaUser, FaUserTie } from 'react-icons/fa';

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import SidebarTweetButton from './SidebarTweetButton';
import { SECTION_TYPE, SIDEBAR_TYPE } from '../../common/models';
import { useState } from 'react';

const Sidebar = () => {
  const [activeBar, setActiveBar] = useState<string>(SIDEBAR_TYPE.HOME);
  const items = [
    {
      icon: BsHouseFill,
      label: SIDEBAR_TYPE.HOME,
      href: '/',
      url: ''
    },
    {
      icon: BiBriefcaseAlt,
      label: SIDEBAR_TYPE.WORK,
      href: `/${SECTION_TYPE.WORK}`,
      auth: true,
      url: ''
    },
    {
      icon: GrUserExpert,
      label: SIDEBAR_TYPE.EXPERIENCE,
      href: `/${SECTION_TYPE.EXPERIENCE}`,
      auth: true,
      isImage: false,
      url: '/images/experience.png'
    },
    {
      icon: GrUserExpert,
      label: SIDEBAR_TYPE.SKILLS,
      href: `/${SECTION_TYPE.SKILLS}`,
      auth: true,
      isImage: true,
      url: '/images/skills2.png'
    },
    {
      icon: GrUserWorker,
      label: SIDEBAR_TYPE.NOTABLE_WORK,
      href: `/${SECTION_TYPE.NOTABLE_WORK}`,
      auth: true,
      isImage: false,
      url: '/images/experience.png'
    },
    {
      icon: BiUser,
      label: SIDEBAR_TYPE.ABOUT,
      href: `/users/3`,
      auth: true,
      isImage: false,
      url: '/images/experience.png'
    },
    {
      icon: BiSolidContact,
      label: SIDEBAR_TYPE.CONTACT,
      href: `/contact`,
      auth: true,
      isImage: false,
      url: '/images/experience.png'
    },
    {
      icon: ImProfile,
      label: SIDEBAR_TYPE.RESUME,
      href: `/Mohamed_Eliyas_CV.pdf`,
      auth: true,
      isImage: false,
      url: ''
    },
    {
      icon: FaUserTie,
      label: SIDEBAR_TYPE.HIRE_ME,
      href: `/hireme`,
      auth: true,
      isImage: false,
      url: '/images/experience.png'
    }
  ]

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
          <div className="space-y-2 lg:w-[230px]">
            <SidebarLogo />
            {items.map((item) => (
              <SidebarItem
                key={item.href}
                auth={item.auth}
                href={item.href} 
                icon={item.icon} 
                label={item.label}
                isImage={item.isImage}
                url={item.url}
                activeBar={activeBar}
                setActiveBar={setActiveBar}
              />
            ))}
            <SidebarTweetButton />
          </div>
        </div>
      </div>
  )
};

export default Sidebar;
