import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineStar } from 'react-icons/ai';
import { formatDistanceToNowStrict } from 'date-fns';
import parse from 'html-react-parser'
import Avatar from '../Avatar';
import { POST_TYPE, Post, USER_TYPE } from '../../common/models';
import Image from 'next/image';
import { ComponentFromJSXBuilder } from '@/libs/JSXBuilder';
interface PostItemProps {
  data: Post;
  type: string;
  userId?: string;
  isMainPost?: boolean;
  isLastReply?: boolean;
  setChildHeight: any;
}

const options = {
  htmlparser2: {
    lowerCaseTags: false
  },
};

const PostItem: React.FC<PostItemProps> = ({ data = {} as Post, isMainPost, isLastReply, type, setChildHeight }) => {
  const router = useRouter();
  const postRef: any = useRef(null);
  const [isLiked, setIsLiked] = useState(false);
  const setChildElemtHeigh = () => {
    if (postRef && postRef.current) setChildHeight(postRef.current.getBoundingClientRect().height);
  }

  useEffect(() => {
    setChildElemtHeigh();
  },[postRef])

  const goToUser = useCallback((ev: any) => {
    ev.stopPropagation();
    if(data.user?.userType == USER_TYPE.INDIVIDUAL) {
      router.push(`/users/${data.user?.id}`)
    } else {
      router.push(`/organization/${data.user?.id}`)
    }
  }, [router, data.user?.id, data.user?.userType]);

  const useGoToPost = (type: String) => useCallback(() => {
    if (type == POST_TYPE.POST) router.push(`/posts/${data.id}`);
  }, [router, data.id, type, POST_TYPE.POST]);

  const LikeIcon = isLiked ? AiFillHeart : AiOutlineHeart;

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt])

  const componentFromJSXBuilder: ComponentFromJSXBuilder = new ComponentFromJSXBuilder();

  return (
    <div
      ref={postRef}
      key={isMainPost ? 0 : data.id}
      onClick={useGoToPost(type)}
      className={`p-[15px] py-0 cursor-pointer hover:bg-neutral-100 
      transition-opacity absolute w-[100%] ${isMainPost ? ' pt-[15px]' : ''}`}>
      <div className="flex flex-col items-stretch">

        {!isMainPost && <div className='flex flex-row items-stretch mb-[4px]'>
          <div className='flex-grow-0 basis-[40px]'>
            <div className='w-[2px] bg-slate-400 m-auto h-[100%]'></div>
          </div>
          <div className='flex-grow basis-0 pt-[12px]'></div>
        </div>}

        <div className="flex flex-row items-stretch">
          <div className="flex flex-col mr-3">
            <Avatar userId={data.user?.id} url={data.user?.profileImage} />
            {!isLastReply && <div className='flex-grow w-[2px] bg-slate-400 m-auto  mt-[4px]'></div>}
          </div>

          <div className='pb-[15px]'>
            <div className="flex flex-row items-center gap-2">
              <p
                onClick={goToUser}
                className="
            font-semibold 
            cursor-pointer 
            hover:underline
        ">
                {data.user?.name}
              </p>
              <span
                onClick={goToUser}
                className="
            text-neutral-500
            cursor-pointer
            hover:underline
            hidden
            md:block
        ">
                @{data.user?.username}
              </span>
              <span className="text-neutral-500 text-sm">
                {createdAt}
              </span>
            </div>
            <div className="text-[#0F1419] mt-1">
              {data.jsxBody ? componentFromJSXBuilder.build(data.jsxBody) : data.body ? parse(data.body) : ""}
              {data?.images && data.images.map((image, index: number) => (
                <div className='mt-4' key={index}>
                  <Image onLoad={setChildElemtHeigh} src={image.url} alt={image.alt} 
                  width={Number(image.width)} height={Number(image.height)}/>
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center mt-3 gap-10">
              <div
                className={`
            flex flex-row 
            items-center 
            text-neutral-500 
            gap-2 
            cursor-pointer 
            transition 
            hover:text-[#1635e0]
            ${data.comments?.length ? ' animate-commentsHeighlight' : '' }
        ` }>
                <AiOutlineMessage size={20} />
                <p>
                  {data.comments?.length || 0}
                </p>
              </div>
              <div
                onClick={() => setIsLiked(!isLiked)}
                className="
            flex 
            flex-row 
            items-center 
            text-neutral-500 
            gap-2 
            cursor-pointer 
            transition 
            hover:text-red-500
        ">
                <LikeIcon color={isLiked ? 'red' : ''} size={20} />
                <p>
                  {data.likedIds?.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem;
