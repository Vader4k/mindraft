import { works } from "../constants";

const HowItWorks = () => {
  return (
    <section className="flex flex-col items-center gap-4 text-center w-full py-20">
      <h1 className="text-3xl lg:text-4xl font-bold font-inter tracking-tighter">
        How Mindraft Works
      </h1>
      <p className="max-w-lg text-midnight-700 px-5">
        Simple, powerful, and inituative - create amazing content in just three
        steps
      </p>
      <div className="mt-10 grid xl:grid-cols-3 gap-8 w-full max-w-[80%] mx-auto">
        {works.map((work) => (
          <div key={work.id} className="flex flex-col gap-3">
            <div className="size-[60px] text-2xl font-semibold font-inter mx-auto flex items-center justify-center rounded-full bg-gradient-to-bl from-blue-700 to-blue-400 text-white">
              {work.id}
            </div>
            <h3 className="font-semibold font-poppins">{work.title}</h3>
            <p className="text-sm font-space-grotesk text-midnight-700">
              {work.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
