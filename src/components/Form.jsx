import { RiMagicLine, RiSparklingFill } from "react-icons/ri";

function Form() {
  const services = [
    "Website Design",
    "Content",
    "UX Design",
    "Strategy",
    "User Research",
    "Other",
  ];

  return (
    <>
      {/* Intro */}
      <h1 className="mb-3 text-3xl font-bold">
        Got Ideas? <RiMagicLine className="inline-block" /> We've got <br /> the
        skills. Let's team up.
      </h1>
      <p className="mb-6 text-xl">
        Tell us more about yourself and what's on your mind.
      </p>

      {/* Inputs */}
      <form className="flex flex-col gap-1">
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Your name"
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@company.com"
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
        />
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Tell us a bit about your project..."
          className="h-24 border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
        />

        <p className="my-5 text-gray-800">How can we help?</p>

        <div className="mb-5 grid max-w-96 grid-cols-2">
          {services.map((service, idx) => {
            return (
              <label key={idx} className="flex cursor-pointer gap-2">
                <input type="checkbox" name="" id="" className="size-5" />{" "}
                {service}
              </label>
            );
          })}
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded bg-zinc-950 p-2 text-white"
        >
          Let's get started{" "}
          <RiSparklingFill className="text-lime-500" size={20} />{" "}
        </button>
      </form>
    </>
  );
}

export default Form;