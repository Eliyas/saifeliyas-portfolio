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
import useOrgSectionPosts from "@/hooks/useOrgSectionPosts";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import { BASE_URL } from "@/utils";
import axios from "axios";


const OrganizationView = ({ data, userIdMap }: { data: DataType; userIdMap: Record<string, User> }) => {
  const router = useRouter();
  const { userId } = router.query;
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { data: fetchedUser, isLoading } = useUser(userIdMap, userId as string);
  const { data: workSectionPosts } = useOrgSectionPosts(data, fetchedUser.id, SECTION_TYPE.WORK);
  const { data: experienceSectionPosts } = useOrgSectionPosts(data, fetchedUser.id, SECTION_TYPE.EXPERIENCE);
  const { data: notableWOrkSectionPosts } = useOrgSectionPosts(data, fetchedUser.id, SECTION_TYPE.NOTABLE_WORK);
  
  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    )
  }

  const OrganizationTabs = () => (<Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Experience" id="simple-tab-1" />
        <Tab label="Work" id="simple-tab-2" />
        <Tab label="Notable Work" id="simple-tab-3" />
      </Tabs>
    </Box>
    <Box>
      {value === 0 ? <PostFeed userId={userId as string}  data={experienceSectionPosts} />
       : value === 1 ? <PostFeed userId={userId as string}  data={workSectionPosts} /> 
       : <PostFeed userId={userId as string}  data={notableWOrkSectionPosts} />}
    </Box>
  </Box>)

  return (
    <>
      <Header showBackArrow label={fetchedUser?.name}/>
      <div className="bg-neutral-200 h-44 relative">
        {fetchedUser?.coverImage && (
          <Image src={fetchedUser.coverImage} fill alt="Cover Image" style={{ objectFit: 'cover' }}/>
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar isLarge hasBorder userId={userId as string} url={fetchedUser.profileImage}/>
        </div>
      </div>
      <UserDetails userId={userId as string} userIdMap={userIdMap}/>
      <OrganizationTabs/>
    </>
  );
}

export default OrganizationView;


export const getServerSideProps = async () => {
  
  let response = await axios.get(`${BASE_URL}/api/data`);
  return {
    props: { data: response.data, userIdMap: response.data.userIdMap }
  };
};