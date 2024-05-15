import { PostData } from '../@types/serviceTypes';
import { NewYork } from './mock-data-places';
import { alejandro } from './mock-data-writers';

export const PostNewYork: PostData = {
  id: 'desty-0001',
  writer: alejandro,
  place: NewYork,
  publishedAt: 'May 14th, 2024',
  updatedAt: '',
};
