import usePosts from '@/hooks/usePosts';

import PostItem from './PostItem';
import { POST_TYPE, Post } from '../../common/models';
import { useEffect, useRef, useState } from 'react';
import usePostsByFilter from '@/hooks/usePostsByFilter';

interface PostFeedProps {
  data: Post[];
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId, data: posts }) => {
  const replyParentRef: any = useRef(null);
  const [childPostHeights, setChildPostHeights] = useState<number[]>([1]);

  useEffect(() => {
    if (replyParentRef && replyParentRef.current) {
      let previousElementsHeight = 0;
      let allChildElementHeight = 0;
      let childNodes: any = [];
      replyParentRef.current.childNodes.forEach((wrapperElement: HTMLElement) => {
        wrapperElement.childNodes.forEach((element: any) => {
          element.style.opacity = 0;
          childNodes.push(element);
        });
      });

      childNodes.forEach((element: HTMLElement, index: number) => {
        if (index > 0) {
          const previousElement = childNodes[index - 1];
          const boundingRect = previousElement.getBoundingClientRect();
          const elementHeight = boundingRect.height + previousElementsHeight;
          element.style.transform = `translateY(${elementHeight}px)`;
          previousElementsHeight = elementHeight;
        } else {
          element.style.transform = `translateY(${0}px)`;
        }
        allChildElementHeight = previousElementsHeight + element.getBoundingClientRect().height;
        replyParentRef.current.style.height = Math.round(allChildElementHeight + 20) + "px";
      });

      childNodes.forEach((element: any) => {
        element.style.opacity = 1;
      });
    }
  }, [childPostHeights]);

  const setChildHeight = (height: number): void => {
    setChildPostHeights([...childPostHeights, height]);
  }

  return (
    <div className={`min-h-[2000px] relative`} ref={replyParentRef}>
    {posts.map((post: Post) => (

      <div key={post.id} >
        <PostItem type={POST_TYPE.POST} data={post} isMainPost={true} isLastReply={!post.replies || !post.replies.length}
          setChildHeight={setChildHeight} />

        {
          post.replies && post.replies.length > 0 ? post.replies?.map((reply, index) => (
            <PostItem type={POST_TYPE.REPLAY} data={reply} setChildHeight={setChildHeight} key={index}
              isLastReply={post.replies?.length ? index == (post.replies?.length - 1) : false} />
          )) : ""
        }
        <div className='w-[100%] h-[0.8px] bg-[#eff3f4]'></div>
      </div>

    ))}
  </div>

  );
};

export default PostFeed;
