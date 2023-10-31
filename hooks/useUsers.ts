import _ from "lodash";
import { User } from '@/common/models';

const useUsers = (userIdMap: Record<string, User>) => {
  let isLoading = true;
  const userMap: Record<string, User> = userIdMap as Record<string, User>;
  const data: User[] = Object.values(userMap);
  isLoading = false;
  return {
    data: _.sortBy(data, "sortOrder"),
    isLoading
  }
};

export default useUsers;
