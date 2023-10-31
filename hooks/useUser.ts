import { User } from "@/common/models";
import jsonData from "../data/data";
import _ from 'lodash';

const useUser = (userIdMap: Record<string, User>, userId: string) => {
  let isLoading = true;
  const userMap: Record<string, User> = userIdMap as Record<string, User>;
  const data: User = userMap[userId];
  isLoading = false;
  return {
    data,
    isLoading
  }
};

export default useUser;
