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
import { BASE_URL } from "@/utils";
import axios from "axios";

const UserView = ({ data, userIdMap }: { data: DataType; userIdMap: Record<string, User> }) => {
  const router = useRouter();
  const { userId } = router.query;
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { data: fetchedUser, isLoading } = useUser(userIdMap, userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    )
  }
  const { data: workSectionPosts } = useSectionPosts(data, [SECTION_TYPE.EXPERIENCE]);
  const { data: feedBackSectionPosts } = useSectionPosts(data, [SECTION_TYPE.FEEDBACKS]);
  const { data: skillsSectionPosts } = useSectionPosts(data, [SECTION_TYPE.SKILLS]);

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
      <Header showBackArrow label={fetchedUser?.name}/>
      <div className="bg-neutral-200 h-44 relative">
        {fetchedUser?.coverImage && (
          <Image src={fetchedUser.coverImage} fill alt="Cover Image" style={{ objectFit: 'cover' }}/>
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar isLarge={true} hasBorder userId={userId as string} />
        </div>
      </div>
      <UserDetails userId={userId as string} userIdMap={userIdMap}/>
      <UserTabs />
    </>
  );
}

export default UserView;


export const getServerSideProps = async () => {
  
  let response = await axios.get(`${BASE_URL}/api/data`);
  return {
    props: { data: response.data, userIdMap: response.data.userIdMap }
  };
};