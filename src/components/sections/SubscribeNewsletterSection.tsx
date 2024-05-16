import FormSubscribeNewsletter from '../@forms/FormSubscribeNewsletter';

export default function SubscribeNewsletterSection() {
  return (
    <section id="newsletter"  className="bg-light-950 py-4 md:py-8">
      <div className="flex flex-col items-center gap-[48px] p-4 md:w-full md:gap-8 md:px-10 lg:mx-auto lg:w-[1028px] lg:gap-10 lg:px-0">
        <div className="md:flex md:w-[500px]">
          <div className="flex flex-col gap-[46px]">
            <div className="flex flex-col gap-[16px]">
              <h2 className="font-oleo text-[30px] text-reef-300 md:text-[40px]">Subscribe</h2>
              <p className="text-center font-josefin text-[20px] text-light-50">
                If you are interested in reading the coolest and most interesting travel stories of the week.
              </p>
            </div>
            <FormSubscribeNewsletter />
          </div>
        </div>
      </div>
    </section>
  );
}
