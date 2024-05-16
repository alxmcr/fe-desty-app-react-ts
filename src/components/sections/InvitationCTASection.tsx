export default function InvitationCTASection() {
  return (
    <section className="bg-light-950 py-16 md:py-8">
      <div className="flex flex-col items-center gap-6 p-4 md:w-full md:gap-8 md:px-10 lg:mx-auto lg:w-[1028px] lg:gap-10 lg:px-0">
        <h2 className="w-[288px] text-center font-oleo text-[40px] text-reef-300 md:text-[48px]">
          Life is short, and the world is wide.
        </h2>
        <div className="flex w-[70%] flex-col gap-3">
          <a
            href="#explore"
            className="flex h-[48px] w-full items-center justify-center rounded-lg bg-reef-300 font-josefin text-light-950 md:w-[288px] hover:border hover:border-reef-300 hover:bg-transparent hover:text-reef-300"
          >
            Explore
          </a>
          <a
            href="#newsletter"
            className="flex h-12 w-full items-center justify-center rounded-lg border border-reef-300 font-groteskspace text-reef-300 hover:bg-reef-300 hover:text-light-950"
          >
            Newsletter
          </a>
        </div>
      </div>
    </section>
  );
}
