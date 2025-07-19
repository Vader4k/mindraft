import { features } from "../constants";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const Features = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <section className="min-h-screen pt-26 md:pt-0 flex flex-col text-center items-center justify-center w-full">
      <h1 className="text-3xl lg:text-4xl font-bold font-inter tracking-tighter mb-5">
        Powerful AI Tools for Every Creator
      </h1>
      <p className="max-w-xl text-midnight-700">
        From content creation to image editing, Mindraft has everything you need
        to bring your ideas to life
      </p>

      <div className="mt-10 grid lg:grid-cols-2 xl:grid-cols-3 items-start gap-6 w-full max-w-[80%] mx-auto">
        {features.map((feat) => {
          const Icons = feat.icon;
          return (
            <button
              onClick={() => user && navigate(feat.path)}
              key={feat.text}
              className="w-full max-w-[350px] shadow hover:border-blue-200 h-[200px] flex flex-col items-start gap-4 border p-5 rounded-lg border-midnight-200"
            >
              <div className="text-2xl size-[40px] rounded-md flex items-center justify-center bg-gradient-to-b from-blue-700 to-blue-400 text-white">
                <Icons />
              </div>
              <h4 className="font-medium text-lg capitalize font-poppins">
                {feat.title}
              </h4>
              <p className="text-start text-sm text-midnight-500 font-space-grotesk">
                {feat.text}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
