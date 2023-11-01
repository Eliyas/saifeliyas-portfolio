import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import parse from 'html-react-parser'

import Avatar from '../Avatar';

interface CommentProps {
  data: Record<string, any>;
}

const Comment: React.FC<CommentProps> = ({ data = {} }) => {
  const router = useRouter();

  const goToUser = useCallback((ev: any) => {
    ev.stopPropagation();
    router.push(`/users/${data.user.id}`)
  }, [router, data.user.id]);

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt])

  return (
    <div
      className="
        border-b-[1px] 
        border-neutral-100 
        p-[15px] absolute top-0
        cursor-pointer 
        hover:bg-neutral-100 
        transition w-[100%]
      ">
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={data.userId} />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p
              onClick={goToUser}
              className="
              text-[#0F1419] 
                font-semibold 
                cursor-pointer 
                hover:underline
            ">
              {data.user.name}
            </p>
            <span
              onClick={goToUser}
              className="
              text-[#0F1419]
                cursor-pointer
                hover:underline
                hidden
                md:block
            ">
              @{data.user.username}
            </span>
            <span className="text-neutral-500 text-sm">
              {createdAt}
            </span>
          </div>
          <div className="text-[#0F1419] mt-1">
          { parse(data.body) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment;
