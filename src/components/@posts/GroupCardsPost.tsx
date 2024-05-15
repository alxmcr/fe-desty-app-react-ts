import { PostData } from '../../@types/serviceTypes';
import CardPost from '../@post/CardPost';

type Props = {
  posts: PostData[];
};

export default function GroupCardsPost({ posts = [] }: Props) {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </div>
  );
}
