import { User } from "@/common/models";
import _ from 'lodash';

const useCurrentUser = (userIdMap: Record<string, User>) => {
  const userMap: Record<string, User> = userIdMap as Record<string, User>;
  const data: User | undefined = userMap[3];
  return { data }
};

export default useCurrentUser;
