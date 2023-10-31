import { User, Comment, DataType } from "@/common/models";
import _ from 'lodash';

const useComments = (jsonData: DataType, comments: Comment[] | undefined) => {
  _.each(comments, (comment) => {
    const userMap: Record<string, User> = jsonData.userIdMap as Record<string, User>;
    comment.user = userMap[comment.userId];
  });
  return {
    data: comments
  }
};

export default useComments;
