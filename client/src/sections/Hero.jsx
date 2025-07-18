import { SlMagicWand } from "react-icons/sl";
import { GiMagickTrick } from "react-icons/gi";
import { IoPlayOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center w-full relative">
      <div className="absolute w-full h-[110vh] inset-0 -top-20 opacity-15 bg-[radial-gradient(circle_at_50%_50%,_#B3E5FC,_#81D4FA,_#ADD8E6,_#FFFFFF,_#FFFFFF)]" />
      <div className="relative z-10 text-center px-8 md:px-0">
        <div className="text-xs text-blue-800 px-4 py-1 border border-blue-300 w-fit mx-auto rounded-full mb-4 bg-blue-100 font-semibold font-space-grotesk flex items-center justify-center gap-2">
          <SlMagicWand className="text-red-400" />
          AI-Powered Creative Suite
        </div>
        <h1 className="text-3xl md:text-6xl font-bold pb-7 tracking-tighter">
          Create Content with{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-200 bg-clip-text text-transparent">
            AI Magic
          </span>
        </h1>
        <p className="max-w-2xl mx-auto font-space-grotesk mb-5">
          From articles and blog titles to AI images and photo editing -
          Mindraft is your all-in-one AI creative assistant. Generate, edit, and
          perfect your content in seconds.
        </p>
        <div className="w-full text-xs md:text-base justify-center flex items-start gap-5">
          <button className="flex items-center gap-3 font-semibold py-3 px-6 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-300 rounded-md text-white">
            Start Creating Now
            <GiMagickTrick />
          </button>
          <button className="flex items-center bg-white text-midnight-600 gap-3 font-semibold py-3 px-6 border border-gray-300 rounded-lg">
            <IoPlayOutline />
            Watch Demo
          </button>
        </div>
        <div className="flex items-center justify-center mt-8 gap-4">
          <img src="/users.png" alt="users" className="w-[100px]" />
          <p className="text-sm font-poppins text-midnight-600">
            Trusted by 10k+ people
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
