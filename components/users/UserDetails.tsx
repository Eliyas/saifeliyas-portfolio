import { useEffect, useMemo, useRef } from "react";
import { BiCalendar, BiLinkAlt } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { format } from "date-fns";

import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { User } from "@/common/models";

interface UserBioProps {
  userId: string;
  userIdMap: Record<string, User>;
}

const UserDetails: React.FC<UserBioProps> = ({ userId, userIdMap }) => {
  const { data: fetchedUser } = useUser(userIdMap, userId);
  const myRef: any = useRef(null);
  
  useEffect(() => {
    if(myRef && myRef.current) myRef.current.innerHTML = fetchedUser.bio;
  }, [myRef]);

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) {
      return null;
    }

    return format(new Date(fetchedUser.createdAt), 'MMMM yyyy');
  }, [fetchedUser?.createdAt])


  return ( 
    <div className="border-b-[1px] border-neutral-100 pb-4">
      <div className="mt-20 px-4">
        <div className="flex flex-col">
          <p className="text-black text-2xl font-semibold">
            {fetchedUser?.name}
          </p>
          <p className="text-md text-neutral-500">
            @{fetchedUser?.username}
          </p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-[#0F1419]">
            <span ref={myRef} />
          </p>
          <div 
            className="
              flex 
              flex-row 
              items-center 
              gap-2 
              mt-4 
              text-neutral-500
          ">
            <IoLocationOutline size={24} />
            <p> {fetchedUser.location} </p>
          </div>
          <div className="
              flex 
              flex-row 
              items-center 
              gap-2 
              mt-4 
              text-blue-500
              hover:text-blue-800
          ">
            <BiLinkAlt size={24} />
            <p><a href={fetchedUser.website} target="_blank">{fetchedUser.website}</a></p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="text-black">{fetchedUser?.followingIds?.length}</p>
            <p className="text-neutral-500">Following</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-black">{fetchedUser?.followersCount || 0}</p>
            <p className="text-neutral-500">Followers</p>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default UserDetails;