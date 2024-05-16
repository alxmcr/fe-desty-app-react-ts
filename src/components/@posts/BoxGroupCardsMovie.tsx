import { PostData } from '../../@types/serviceTypes';
import GroupCardsPost from './GroupCardsPost';

type Props = {
  posts: PostData[];
};

export default function BoxGroupCardsMovie({ posts = [] }: Props) {
  if (posts.length === 0) {
    return (
      <div className="bg-light-950">
        <h3>No posts</h3>
      </div>
    );
  }

  return (
    <div>
      <GroupCardsPost posts={posts} />
    </div>
  );
}
