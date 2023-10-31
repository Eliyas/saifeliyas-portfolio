import { DataType, Post, User } from "@/common/models";
import _ from 'lodash';

const usePosts = (jsonData: DataType, userId?: string) => {
  const data: Post[] = userId ? _.filter(jsonData.posts, (post) => post.userId == userId) : jsonData.posts;
  _.each(data, (post) => {
    const userMap: Record<string, User> = jsonData.userIdMap as Record<string, User>;
    post.user = userMap[post.userId];

    _.each(post.replies, (reply) => {
      reply.user = userMap[reply.userId];
    });
  });
  return {
    data
  }
};

export default usePosts;
