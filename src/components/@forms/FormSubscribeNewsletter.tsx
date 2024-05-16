export default function FormSubscribeNewsletter() {
  return (
    <form className="flex flex-col gap-[28px]">
      <label htmlFor="email-newsletter" className="flex flex-col gap-[16px]">
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
        className="flex h-[48px] w-full items-center justify-center rounded-lg bg-reef-200 font-josefin text-light-950 md:hover:bg-reef-100"
      >
        Subscribe newsletter
      </button>
    </form>
  );
}
