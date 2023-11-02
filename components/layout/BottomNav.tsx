import { SECTION_TYPE } from '@/common/models';
import { MenuContext } from '@/pages/_app';
import { useRouter } from 'next/router';
import React, { useCallback, useContext } from 'react';
import { BiBriefcaseAlt } from 'react-icons/bi';
import { BsHouseFill } from 'react-icons/bs';
import { GrUserExpert } from 'react-icons/gr';
import { ImProfile } from 'react-icons/im';

const BottomNav: React.FC = () => {
  const router = useRouter();
  const { setTitle } = useContext(MenuContext);

  const handleClick = useCallback((type: string) => {
    if(type.includes(".pdf")) {
      window.open(type, "_blank");
    } else {
      setTitle(type ? type : "Home");
      router.push(`/${type}`);
    }
  }, [router]);



  return (
    <div className="flex items-center justify-around h-[60px] z-50
     w-full fixed bottom-0 bg-white border-t border-gray-100">
     <BsHouseFill  size={30} onClick={() => handleClick("")}/>
     <BiBriefcaseAlt  size={30} onClick={() => handleClick(SECTION_TYPE.WORK,)} />
     <GrUserExpert  size={30} onClick={() => handleClick(SECTION_TYPE.EXPERIENCE)} />
     <ImProfile  size={30} onClick={() => handleClick('/Mohamed_Eliyas_CV.pdf')} />
    </div>
  )
}

export default BottomNav;
