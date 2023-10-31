import { DataType, Post, SECTION_TYPE, User } from "@/common/models";
import _ from 'lodash';


const useSectionPosts = (jsonData: DataType, sectionTypes: string[]) => {
  const data: Post[] = _.filter<Post>(jsonData.posts as Post[], (post: Post) => {
    return post.sectionType != null && sectionTypes.includes(post.sectionType);
  });
  _.each(data, (post) => {
    const userMap: Record<string, User> = jsonData.userIdMap as Record<string, User>;
    post.user = userMap[post.userId];

    _.each(post.replies, (reply) => {
      reply.user = userMap[reply.userId];
    });
  });
  return {
    data: _.sortBy(data, "sortOrder")
  }
};

export default useSectionPosts;
