import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import usePost from "@/hooks/usePost";

import Header from "@/components/Header";
import Form from "@/components/NewTweet";
import PostItem from "@/components/posts/PostItem";
import { useEffect, useRef, useState } from "react";
import { DataType, POST_TYPE, Post } from "@/common/models";
import useComments from "@/hooks/useComments";
import Comment from "@/components/comments/Comment";
import _ from "lodash";
import data from "@/data/data";


const PostView = ({ data }: { data: DataType }) => {
  const router = useRouter();
  const { postId } = router.query;

  const { data: fetchedPost, isLoading } = usePost(data, postId as string);
  const { data: comments } = useComments(data, fetchedPost?.comments);
  const [childPostHeights, setChildPostHeights] = useState<number[]>([1]);

  const replyParentRef: any = useRef(null);

  useEffect(() => {
    if (replyParentRef && replyParentRef.current) {

      let previousElementsHeight = 0;
      let allChildElementHeight = 0;
      replyParentRef.current.childNodes.forEach((element: HTMLElement, index: number) => {
        if (index > 0) {
          const previousElement = replyParentRef.current.childNodes[index - 1];
          const boundingRect = previousElement.getBoundingClientRect();
          const elementHeight = boundingRect.height + previousElementsHeight;
          element.style.transform = `translateY(${elementHeight}px)`;
          previousElementsHeight = elementHeight;
        } else {
          element.style.transform = `translateY(${0}px)`;
        }
        allChildElementHeight = previousElementsHeight + element.getBoundingClientRect().height;
      });
      replyParentRef.current.style.height = Math.round(allChildElementHeight + 20) + "px";
    }
  }, [childPostHeights]);

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    )
  }

  const setChildHeight = (height: number): void => {
    setChildPostHeights([...childPostHeights, height]);
  }

  return (
    <>
      <div className="relative" ref={replyParentRef}>
        <PostItem type={POST_TYPE.POST} data={fetchedPost} isMainPost={true} isLastReply={!fetchedPost.replies}
          setChildHeight={setChildHeight} />
        {
          fetchedPost.replies?.map((reply, index) => {
            const isLastReply = fetchedPost.replies?.length ? index == (fetchedPost.replies?.length - 1) : false;
            return <PostItem type={POST_TYPE.REPLAY} key={reply.id} data={reply} isLastReply={isLastReply} setChildHeight={setChildHeight} />
          })
        } 
        <Form postId={postId as string} isComment placeholder="Tweet your reply" />
        {comments?.map((comment: Record<string, any>,) => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </>
  );
}

export default PostView;


export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
 
  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const posts = data.posts;
  const paths = posts.map((post: Post) => ({
    params: { postId: post.id },
  }))
 
  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export const getStaticProps = async () => {
  const staticData = data;
  return {
    props: { data: staticData }
  };
};