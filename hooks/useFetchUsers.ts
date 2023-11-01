import _ from "lodash";
import { User } from '@/common/models';
import useSWR from 'swr';
import axios from "axios";

const useFetchUsers = () => {
  let {data, error, isLoading} = useSWR(`/api/data`, (url: string) => axios.get(url).then((res) => res.data));
  const users = data ? Object.values(data.userIdMap) : []; 
  return {
    data: _.sortBy(users, "sortOrder") as User[],
    isLoading
  }
};

export default useFetchUsers;
