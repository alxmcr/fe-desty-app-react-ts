import { LoadingStates } from '../../@types/serviceEnums';
import usePosts from '../../hooks/usePosts';
import GroupCardsPost from '../@posts/GroupCardsPost';

export default function ExplorePostsSection() {
  const { posts, statusLoadingPosts, errorPosts } = usePosts();

  if (LoadingStates.PENDING === statusLoadingPosts) {
    return (
      <section id="explore" className="bg-light-950">
        <div className="flex flex-col gap-4 p-4 md:h-[500px] md:w-full md:px-10 lg:mx-auto lg:w-[1028px] lg:px-0">
          <h2 className="font-oleo text-[30px] text-reef-300 underline underline-offset-1">Explore</h2>
          <h3 className="font-josefin text-[24px] text-light-50">Loading posts...</h3>
        </div>
      </section>
    );
  }

  if (LoadingStates.ERROR === statusLoadingPosts && errorPosts) {
    return (
      <section className="bg-light-950">
        <div className="flex flex-col gap-4 p-4 md:h-[500px] md:w-full md:px-10 lg:mx-auto lg:w-[1028px] lg:px-0">
          <h2 className="font-oleo text-[30px] text-reef-300 underline underline-offset-1">Explore</h2>
          <h3 className="font-josefin text-[24px] text-light-50">{errorPosts.message}</h3>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-light-950 py-4 md:py-8">
      <div className="flex flex-col gap-6 p-4 md:w-full md:gap-8 md:px-10 lg:mx-auto lg:w-[1028px] lg:gap-10 lg:px-0">
        <h2 className="font-oleo text-[30px] text-reef-300 underline underline-offset-auto md:text-[40px]">
          Explore
        </h2>
        <GroupCardsPost posts={posts} />
      </div>
    </section>
  );
}
