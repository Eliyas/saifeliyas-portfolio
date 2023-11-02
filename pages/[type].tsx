import PostFeed from "@/components/posts/PostFeed"
import Header from "@/components/Header"
import { useRouter } from "next/router";
import useSectionPosts from "@/hooks/useSectionPosts";
import { DataType, Post } from "@/common/models";
import data from "@/data/data";

export default function Posts({ data }: { data: DataType }) {
  const router = useRouter();
  const { type } = router.query;
  const { data: posts } = useSectionPosts(data, [type as string]);
  return (<PostFeed data={posts} />)
}


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
    params: { type: post.sectionType },
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