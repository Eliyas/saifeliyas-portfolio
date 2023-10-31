import { DataType, Post, User } from "@/common/models";
import _ from 'lodash';

const usePostsByType = (jsonData: DataType, type?: string) => {
  const data: Post[] = _.filter(jsonData.posts, (post) => post.type == type);
  _.each(data, (post) => {
    const userMap: Record<string, User> = jsonData.userIdMap as Record<string, User>;
    post.user = userMap[post.userId];
  });
  return {
    data
  }
};

export default usePostsByType;
