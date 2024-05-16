import React from 'react';

export default function FormSubscribeNewsletter() {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setEmail('')
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[28px]">
      <label htmlFor="email-newsletter" className="flex flex-col gap-[16px]">
        <span className="font-josefin text-[18px] text-light-50">Email</span>
        <input
          type="email"
          name="email-newsletter"
          id="email-newsletter"
          className="h-[48px] rounded-lg border border-reef-300 bg-transparent p-[10px] text-light-50"
          placeholder="Enter your email here, please"
          autoComplete="off"
          required
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
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
