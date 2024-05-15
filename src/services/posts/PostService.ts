import { PostData } from '../../@types/serviceTypes';
import { MOCK_POSTS } from '../../mocks/mock-data-posts';
import { IPostService } from './IPostService';

export class PostService implements IPostService {
  findAllPosts(): Promise<PostData[]> {
    return new Promise((resolve, reject) => {
      try {
        resolve(MOCK_POSTS);
      } catch (error) {
        reject(error);
      }
    });
  }
}
