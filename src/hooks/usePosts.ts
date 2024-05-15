import React from 'react';
import { LoadingStates } from '../@types/serviceEnums';
import { PostData } from '../@types/serviceTypes';
import { PostService } from '../services/posts/PostService';

export default function usePosts() {
  const [posts, setPosts] = React.useState<PostData[]>([]);
  const [errorPosts, setErrorPosts] = React.useState<Error | null>(null);
  const [statusLoadingPosts, setStatusLoadingPosts] = React.useState(LoadingStates.IDLE);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const service = new PostService();

      try {
        setStatusLoadingPosts(LoadingStates.PENDING);
        const postsData = await service.findAllPosts();
        setPosts(postsData);
        setStatusLoadingPosts(LoadingStates.SUCCESS);
      } catch (error) {
        setStatusLoadingPosts(LoadingStates.ERROR);
        if (error instanceof Error) {
          setErrorPosts(error);
        }
      }
    };

    fetchPosts();
  }, []);

  return { posts, errorPosts, statusLoadingPosts };
}
