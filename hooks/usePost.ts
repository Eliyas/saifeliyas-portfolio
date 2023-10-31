import { DataType, Post, User } from "@/common/models";
import _ from 'lodash';

const usePost = (jsonData: DataType, postId: string) => {
  let isLoading = true;
  const data: Post | undefined = _.find(jsonData.posts, (post) => post.id == postId);
  const userMap: Record<string, User> = jsonData.userIdMap as Record<string, User>;
  if(data) data.user = userMap[data.userId];
  _.each(data?.replies, (reply) => {
    reply.user = userMap[reply.userId];
  });
  isLoading = false;
  return {
    data,
    isLoading
  }
};

export default usePost;
