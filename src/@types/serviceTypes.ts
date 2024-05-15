export type PlaceData = {
  id: string;
  name: string;
  country: string;
  posterLocation: string;
  posterImageNameFile: string;
  posterImageUrl: string;
  posterAttributionAuthor: string;
  posterAttributionUrl: string;
};

export type WriterData = {
  id: string;
  name: string;
  profileImageUrl: string;
};

export type PostData = {
  id: string;
  place: PlaceData;
  writer: WriterData;
  publishedAt: string;
  updatedAt: string;
};
