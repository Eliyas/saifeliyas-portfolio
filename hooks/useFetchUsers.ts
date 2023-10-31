import _ from "lodash";
import { User } from '@/common/models';
import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useFetchUsers = () => {
  let {data, error, isLoading} = useSWR(`/api/data`, fetcher);
  const users = data ? Object.values(data.userIdMap) : []; 
  return {
    data: _.sortBy(users, "sortOrder") as User[],
    isLoading
  }
};

export default useFetchUsers;
