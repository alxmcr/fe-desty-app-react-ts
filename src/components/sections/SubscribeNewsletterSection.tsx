export default function SubscribeNewsletterSection() {
  return (
    <section className="bg-light-950 py-4 md:py-8">
      <div className="flex flex-col gap-[48px] p-4 md:w-full md:gap-8 md:px-10 lg:mx-auto lg:w-[1028px] lg:gap-10 lg:px-0">
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-oleo text-[30px] text-reef-300 md:text-[40px]">Subscribe</h2>
          <p className="text-center font-josefin text-[20px] text-light-50">
            If you are interested in reading the coolest and most interesting travel stories of the week.
          </p>
        </div>
        <form className="flex flex-col gap-[28px]">
          <label htmlFor="email-newsletter" className="flex flex-col gap-2">
            <span className="font-josefin text-[18px] text-light-50">Email</span>
            <input
              type="email"
              name="email-newsletter"
              id="email-newsletter"
              className="h-[48px] rounded-lg border border-reef-300 bg-transparent p-[10px]"
              placeholder="Enter your email here, please"
            />
          </label>
          <button
            type="submit"
            className="flex h-[48px] w-full items-center justify-center rounded-lg bg-reef-200 font-josefin text-light-950 md:w-[288px] md:hover:bg-reef-100"
          >
            Subscribe newsletter
          </button>
        </form>
      </div>
    </section>
  );
}
