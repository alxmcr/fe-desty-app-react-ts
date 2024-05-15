import { PostData } from '../@types/serviceTypes';
import { CDMX, Guadalajara, LosAngeles, Munich, NewYork, Seattle } from './mock-data-places';
import { alejandro, mauricio } from './mock-data-writers';

export const PostNewYork: PostData = {
  id: 'desty-0001',
  writer: alejandro,
  place: NewYork,
  publishedAt: 'May 4th, 2024',
  updatedAt: '',
};

export const PostLosAngeles: PostData = {
  id: 'desty-0002',
  writer: alejandro,
  place: LosAngeles,
  publishedAt: 'May 5th, 2024',
  updatedAt: '',
};

export const PostSeattle: PostData = {
  id: 'desty-0003',
  writer: mauricio,
  place: Seattle,
  publishedAt: 'May 5th, 2024',
  updatedAt: '',
};

export const PostCDMX: PostData = {
  id: 'desty-0004',
  writer: alejandro,
  place: CDMX,
  publishedAt: 'May 6th, 2024',
  updatedAt: '',
};

export const PostGuadalajara: PostData = {
  id: 'desty-0005',
  writer: alejandro,
  place: Guadalajara,
  publishedAt: 'May 7th, 2024',
  updatedAt: '',
};

export const PostMunich: PostData = {
  id: 'desty-0006',
  writer: mauricio,
  place: Munich,
  publishedAt: 'May 7th, 2024',
  updatedAt: '',
};

export const MOCK_POSTS: PostData[] = [
  PostNewYork,
  PostLosAngeles,
  PostSeattle,
  PostCDMX,
  PostGuadalajara,
  PostMunich,
];
