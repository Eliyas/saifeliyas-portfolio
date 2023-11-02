import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import useUser from "@/hooks/useUser";

import PostFeed from "@/components/posts/PostFeed";
import Header from "@/components/Header";
import UserDetails from "@/components/users/UserDetails";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from "react";
import { DataType, SECTION_TYPE, User } from "@/common/models";
import useSectionPosts from "@/hooks/useSectionPosts";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import data from "@/data/data";

const UserView = ({ data, userIdMap }: { data: DataType; userIdMap: Record<string, User> }) => {
  const router = useRouter();
  const { userId } = router.query;
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { data: fetchedUser, isLoading } = useUser(userIdMap, userId as string);
  const { data: workSectionPosts } = useSectionPosts(data, [SECTION_TYPE.EXPERIENCE]);
  const { data: feedBackSectionPosts } = useSectionPosts(data, [SECTION_TYPE.FEEDBACKS]);
  const { data: skillsSectionPosts } = useSectionPosts(data, [SECTION_TYPE.SKILLS]);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    )
  }
  
  const UserTabs = () => (<Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Client Feedbacks" id="simple-tab-0" />
        <Tab label="Experience" id="simple-tab-1" />
        <Tab label="Skills" id="simple-tab-2" />
      </Tabs>
    </Box>
    <Box>
      {value === 0 ? (
        <PostFeed userId={userId as string} data={feedBackSectionPosts} />
      ) : value === 1 ? <PostFeed userId={userId as string} data={workSectionPosts} /> 
      : <PostFeed userId={userId as string} data={skillsSectionPosts} />}
    </Box>
  </Box>);

    return (
    <>
      <div className="bg-neutral-200 h-44 relative">
        {fetchedUser?.coverImage && (
          <Image src={fetchedUser.coverImage} placeholder="blur" priority blurDataURL="data:image/jpeg;base64,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"
           fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Cover Image" style={{ objectFit: 'cover' }}/>
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar isLarge={true} hasBorder userId={userId as string}  url={fetchedUser.profileImage}/>
        </div>
      </div>
      <UserDetails userId={userId as string} userIdMap={userIdMap}/>
      <UserTabs />
    </>
  );
}

export default UserView;



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
  const userIdMap = data.userIdMap;
  const paths = Object.keys(userIdMap).map((userId: string) => ({
    params: { userId: userId },
  }))
 
  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export const getStaticProps = async () => {
  const staticData = data;
  return {
    props: { data: staticData, userIdMap: staticData.userIdMap }
  };
};