import { PostData } from '../../@types/serviceTypes';

export interface IPostService {
  findAllPosts(): Promise<PostData[]>;
}
