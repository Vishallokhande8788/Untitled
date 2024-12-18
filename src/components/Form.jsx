import { useForm } from "react-hook-form";
import { RiSparklingFill } from "react-icons/ri";
import Intro from "@/components/Intro";
import configs from "@/utils/configs";

const services = [
  "Website Design",
  "Content",
  "UX Design",
  "Strategy",
  "User Research",
  "Other",
];

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
      services: [],
    },
  });

  const handleFormSubmit = async (data) => {
    try {
      const res = await fetch("https://vector.profanity.dev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: data.message }),
      });
      const resData = await res.json();
      if (resData.isProfanity) {
        console.log("Contains some bad words");
      } else {
        console.log("Form could be submitted");
      }
    } catch (err) {
      console.error("Error occured", err);
    }
  };

  return (
    <>
      <Intro />
      <form
        className="flex flex-col gap-1"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* Inputs */}
        <input
          type="text"
          {...register("fullname", {
            required: "Please enter your full name",
            minLength: {
              value: 4,
              message: "Must be of four or more characters",
            },
          })}
          id="fullname"
          placeholder="Your name"
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
        />
        {errors.fullname && (
          <p className="text-red-500">{errors.fullname.message}</p>
        )}

        <input
          type="email"
          {...register("email", {
            required: "Please enter your email!",
            pattern: {
              value: /[\w]*@*[a-z]*\.*[\w]{5,}(\.)*(com)*(@gmail\.com)/,
              message: "Only gmail is allowed.",
            },
          })}
          id="email"
          placeholder="you@company.com"
          className="border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="text"
          {...register("message", {
            required: "Please enter a message!",
            minLength: {
              value: 5,
              message: "Make it a bit more descriptive.",
            },
          })}
          id="message"
          placeholder="Tell us a bit about your project..."
          className="h-24 border-b border-stone-700 p-2 placeholder-gray-700 md:bg-lime-400"
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}

        <p className="my-5 text-gray-800">How can we help?</p>

        {/* Checkbox */}
        <div className="mb-10 grid max-w-96 grid-cols-2">
          {services.map((service, idx) => {
            return (
              <label key={idx} className="flex cursor-pointer gap-2">
                <input
                  type="checkbox"
                  value={service}
                  {...register("services", {
                    required: "Enter atleast one!",
                  })}
                  className="size-5"
                />
                {service}
              </label>
            );
          })}
          {errors.services && (
            <p className="text-red-500">{errors.services.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded bg-zinc-950 p-2 text-white"
        >
          Let's get started
          <RiSparklingFill className="text-lime-500" size={20} />
        </button>
      </form>
    </>
  );
}

export default Form;
