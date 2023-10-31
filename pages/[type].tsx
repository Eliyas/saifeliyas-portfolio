import PostFeed from "@/components/posts/PostFeed"
import Header from "@/components/Header"
import { useRouter } from "next/router";
import useSectionPosts from "@/hooks/useSectionPosts";
import axios from "axios";
import { BASE_URL } from "@/utils";
import { DataType } from "@/common/models";

export default function Posts({ data }: { data: DataType }) {
  const router = useRouter();
  const { type } = router.query;
  const { data: posts } = useSectionPosts(data, [type as string]);
  return (
    <>
      <Header label={type} />
      <PostFeed data={posts} />
    </>
  )
}



export const getServerSideProps = async () => {
  let response = await axios.get(`${BASE_URL}/api/data`);
  return {
    props: { data: response.data }
  };
};