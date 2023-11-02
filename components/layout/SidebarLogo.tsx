import Image from "next/image";
import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    <div 
      onClick={() => router.push('/')}
      className="
        hidden
        xs:max-2xl:flex
        rounded-full 
        h-14
        w-14
        p-4 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
    ">
      <Image src={'/images/x-logo.svg'} alt='LOGO' width={28} height={28} />
    </div>
  );
};

export default SidebarLogo;
