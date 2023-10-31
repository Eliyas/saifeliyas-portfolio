import _ from "lodash";
import { User } from '@/common/models';
import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useUsers = (userIdMap?: Record<string, User>) => {
  let isLoading = true;
  let userMap = userIdMap;
  if(!userIdMap) {
    let response: any = useSWR(`/api/data`, fetcher);
    userMap = response.userIdMap;
  }
  const data: User[] = userMap ? Object.values(userMap) : [];
  isLoading = false;
  return {
    data: _.sortBy(data, "sortOrder"),
    isLoading
  }
};

export default useUsers;
