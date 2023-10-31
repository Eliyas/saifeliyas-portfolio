import useUsers from '@/hooks/useUsers';

import Avatar from '../Avatar';
import { BsLinkedin } from 'react-icons/bs';
import { BiLinkAlt } from 'react-icons/bi';
import Link from 'next/link';
import { User } from '../../common/models';
import useFetchUsers from '@/hooks/useFetchUsers';

const FollowBar = () => {
  const { data: users }: { data: User[] } = useFetchUsers();

  if (users.length == 0) {
    return null;
  }
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-neutral-100 rounded-xl p-4">
        <h2 className="text-black text-xl font-bold">You might like</h2>
        <div className="flex flex-col gap-6 mt-4">
          {users.map((user: User) => (
            <div key={user.id} className="flex flex-row">
              <div className="flex flex-row gap-4 w-[100%]">
                <Avatar userId={user.id} url={user.profileImage} />

                <div className='flex justify-between flex-grow flex-col xl:flex-row'>
                  <div className="flex flex-col">
                    <p className="text-black font-semibold text-sm">{user.name}</p>
                    <p className="text-neutral-400 text-sm">@{user.username}</p>
                  </div>
                  <div className="flex flex-row mt-2">
                    {user.linkedIn && <div className="gap-2 text-[#0a66c2] hover:text-[#34587d]">
                      <Link href={user.linkedIn} target="_blank" rel="noopener noreferrer" ><BsLinkedin size={20} /></Link>
                    </div>}

                    {user.website && <div className="gap-2 text-blue-500 hover:text-blue-800 ml-2">
                      <Link href={user.website} target="_blank" rel="noopener noreferrer" ><BiLinkAlt size={20} /></Link>
                    </div>}
                  </div>
                </div>

              </div>


            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
