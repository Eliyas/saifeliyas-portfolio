import { DataType, Post, SECTION_TYPE, User } from "@/common/models";
import _ from 'lodash';

type PostsFilter = {
  userId?: string;
  isOrgUser?: boolean;
  sectionType?: string;
  sectionTypes?: string[];
}

const usePostsByFilter = (jsonData: DataType, filter: PostsFilter) => {
  const data: Post[] = _.filter<Post>(jsonData.posts as Post[], (post: Post) => {
    if(filter.sectionType == SECTION_TYPE.ALL) {
      return true;
    } else if(filter.sectionTypes && filter.sectionTypes.length) {
      return post.sectionType != null && filter.sectionTypes.includes(post.sectionType);
    } else if(filter.userId && filter.sectionType) {
      return ((post.userId == filter.userId && post.sectionType == filter.sectionType) 
        || (post.userId == filter.userId && post.sectionType == filter.sectionType)) ;
    } else if(filter.userId) {
      return post.userId == filter.userId;
    } else if(filter.sectionType) {
      return post.sectionType == filter.sectionType;
    }
    return false;
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

export default usePostsByFilter;
