import { PostData } from '../../@types/serviceTypes';

type Props = {
  post: PostData;
};

export default function CardPost({ post }: Props) {
  if (post === null || post === undefined) {
    return null;
  }

  return (
    <article>
      <header>
        <img src={post.writer.profileImageUrl} alt={`${post.writer.name} profile phot`} />
        <div>
          <h5 className="font-bold text-reef-300">{post.writer.name}</h5>
          <p className="text-light-50">{post.publishedAt}</p>
        </div>
      </header>
      <div className="flex flex-col">
        <h3 className="text-[24px] font-bold text-reef-300">{post.place.name}</h3>
        <h4 className="text-[20px] text-light-50">{post.place.country}</h4>
      </div>
      <footer>
        <a
          href="#"
          className="flex h-[48px] w-full items-center justify-center rounded-lg bg-reef-300 text-[16px] text-light-950 hover:bg-light-950 hover:text-reef-300 md:w-[152px]"
        >
          Read more
        </a>
      </footer>
    </article>
  );
}
