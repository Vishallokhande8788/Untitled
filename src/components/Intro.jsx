import { RiMagicLine } from "react-icons/ri";

function Intro() {
  return (
    <>
      <h1 className="mb-3 text-3xl font-bold">
        Got Ideas? <RiMagicLine className="inline-block" /> We've got <br /> the
        skills. Let's team up.
      </h1>
      <p className="mb-6 text-xl">
        Tell us more about yourself and what's on your mind.
      </p>
    </>
  );
}

export default Intro;