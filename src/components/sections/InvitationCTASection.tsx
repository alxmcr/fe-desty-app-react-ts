export default function InvitationCTASection() {
  return (
    <section className="bg-light-950 py-16 md:py-8">
      <div className="flex h-screen flex-col items-center justify-center bg-[url('/assets/images/bg-hero-04.png')] bg-center bg-no-repeat md:h-[550px]">
        <div className="flex flex-col items-center justify-center gap-12">
          <h2 className="w-[288px] text-center font-oleo text-[40px] text-reef-300 md:w-[320px] md:text-[48px]">
            Life is short, and the world is wide.
          </h2>
          <div className="w-full flex flex-col gap-3 md:flex-row">
            <a
              href="#explore"
              className="flex h-[48px] w-full items-center justify-center rounded-lg bg-reef-300 font-josefin text-light-950 hover:border hover:border-reef-300 hover:bg-transparent hover:text-reef-300 md:w-[288px]"
            >
              Explore
            </a>
            <a
              href="#newsletter"
              className="flex h-12 w-full items-center justify-center rounded-lg border border-reef-300 font-josefin text-reef-300 hover:bg-reef-300 hover:text-light-950 md:w-[288px]"
            >
              Newsletter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
