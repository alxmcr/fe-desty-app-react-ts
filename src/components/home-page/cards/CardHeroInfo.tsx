export default function CardHeroInfo() {
  return (
    <article className="flex flex-col gap-16">
      <div className="flex w-[70%] flex-col gap-[22px] md:w-[476px] md:gap-8">
        <h1 className="font-oleo text-reef-200 text-[40px] md:text-[48px]">Desty</h1>
        <p className="font-josefin text-[24px] text-white md:text-[28px]">
          Explore the most fascinating places around the world where all of us live.
        </p>
      </div>
      <a
        href="#explore"
        className="bg-reef-200 font-josefin md:hover:bg-reef-100 flex h-[48px] w-full items-center justify-center rounded-lg text-light-950 md:w-[288px]"
      >
        Explore
      </a>
    </article>
  );
}
