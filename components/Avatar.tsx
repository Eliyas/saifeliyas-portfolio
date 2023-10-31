import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

import useUser from "@/hooks/useUser";

interface AvatarProps {
  url?: string | undefined;
  userId?: string | undefined;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, url, isLarge, hasBorder }) => {
  const router = useRouter();


  const onClick = useCallback((event: any) => {
    event.stopPropagation();

    const url = `/users/${userId}`;

    router.push(url);
  }, [router, userId]);

  return (
    <div
      className={`
        ${hasBorder ? 'border-4 border-white' : ''}
        ${isLarge ? 'h-32' : 'h-[40px]'}
        ${isLarge ? 'w-32' : 'w-[40px]'}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
      `}
    >
      <Image
        fill
        style={{
          objectFit: 'cover',
          borderRadius: '100%'
        }}
        sizes={isLarge ? '32' : '40px'}
        alt="Avatar"
        onClick={onClick}
        src={url || '/images/profile-pic.jpg'}
      />
    </div>
  );
}

export default Avatar;