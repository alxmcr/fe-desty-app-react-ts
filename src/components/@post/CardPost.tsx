import { PostData } from '../../@types/serviceTypes';

type Props = {
  post: PostData;
};

export default function CardPost({ post }: Props) {
  if (post === null || post === undefined) {
    return null;
  }

  return (
    <article className="flex w-full flex-col gap-4 rounded-lg border border-reef-300 px-[12px] py-4 md:h-[416px] md:w-[288px]">
      <header className="flex gap-2">
        <img
          src={post.writer.profileImageUrl}
          alt={`${post.writer.name} profile phot`}
          className="size-[46px] rounded-full border border-reef-300 p-2"
        />
        <div>
          <h5 className="font-josefin font-bold text-reef-300">{post.writer.name}</h5>
          <p className="font-josefin text-light-50">{post.publishedAt}</p>
        </div>
      </header>
      <div className="flex flex-col gap-4">
        <img
          src={post.place.posterImageUrl}
          alt={`${post.place.posterLocation}'s picture`}
          className="md:h-[170px] md:w-[264px] rounded-lg"
        />
        <div className="flex flex-col">
          <h3 className="font-josefin text-[26px] font-bold text-reef-300">{post.place.name}</h3>
          <h4 className="font-josefin text-[20px] text-light-50">{post.place.country}</h4>
        </div>
      </div>
      <footer>
        <a
          href="#"
          className="flex h-[48px] w-full items-center justify-center rounded-lg bg-reef-300 font-josefin text-[18px] font-normal text-light-950 hover:bg-reef-100 hover:text-light-950"
        >
          Read more
        </a>
      </footer>
    </article>
  );
}
