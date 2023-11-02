import PostFeed from "@/components/posts/PostFeed"
import Header from "@/components/Header"
import Form from "@/components/NewTweet"
import { DataType, SECTION_TYPE, SIDEBAR_TYPE } from "@/common/models"
import useHomePosts from "@/hooks/useSectionPosts";
import { BASE_URL } from "@/utils";
import axios from "axios";
import data from "@/data/data";
import { MenuContext } from "./_app";
import { useContext, useEffect } from "react";

export default function Home({ data }: { data: DataType }) {
  const { data: posts } = useHomePosts(data, [SECTION_TYPE.EXPERIENCE]);
  const { setTitle, setShowBackArrow } = useContext(MenuContext);

  
  useEffect(() => {
    setTitle(SIDEBAR_TYPE.HOME);
    setShowBackArrow(false);
  }, [setTitle, setShowBackArrow]);

  return (
    <>
      <Form placeholder="Welcome!" />
      <PostFeed data={posts} />
    </>
  )
}

export const getStaticProps = async () => {
  const staticData = data;
  return {
    props: { data: staticData, userIdMap: staticData.userIdMap }
  };
};