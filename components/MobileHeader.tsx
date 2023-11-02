import { MenuContext } from "@/pages/_app";
import { useRouter } from "next/router";
import { useCallback, useContext } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
  showBackArrow?: boolean;
  label: string | string[] | undefined;
}

const MobileHeader: React.FC<HeaderProps> = ({showBackArrow, label }) => {
  const router = useRouter();
  const { isOpen, setIsOpen } = useContext(MenuContext);

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-b-[1px] border-neutral-100 p-5 fixed top-0 bg-white w-full z-50">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <BiArrowBack 
            onClick={handleBack} 
            color="black" 
            size={20} 
            className="
              cursor-pointer 
              hover:opacity-70 
              transition
          "/>
        )}
        <h1 className="text-xl font-bold" onClick={() => setIsOpen(!isOpen)}>
          {label}
        </h1>
      </div>
    </div>
  );
}

export default MobileHeader;
