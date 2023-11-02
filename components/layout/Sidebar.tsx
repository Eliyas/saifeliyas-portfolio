import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import SidebarTweetButton from './SidebarTweetButton';
import { SIDEBAR_TYPE, MENU_ITEMS } from '../../common/models';
import { useState } from 'react';

const Sidebar = () => {
  const [activeBar, setActiveBar] = useState<string>(SIDEBAR_TYPE.HOME);
  const items = MENU_ITEMS;

  return (
    <div className="col-span-1 pr-4 md:pr-6 h-[80vh] xs:max-2xl:h-full overflow-y-auto">
        <div className="flex flex-col xs:max-2xl:items-end">
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
