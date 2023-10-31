import Comment from './Comment';

interface CommentsProps {
  comments?: Record<string, any>[];
}

const Comments: React.FC<CommentsProps> = ({ comments = [] }) => {
  return (
    <>
      {comments.map((comment: Record<string, any>,) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </>
  );
};

export default Comments;
