import { testimonies } from "../constants";
import { IoMdStar } from "react-icons/io";

const Testimonies = () => {
  return (
    <section className="py-20 flex flex-col gap-3 items-center text-center justify-center">
      <h1 className="text-3xl xl:text-4xl font-bold font-inter tracking-tighter">
        What Our Users Say
      </h1>
      <p className="max-w-lg text-midnight-700">
        Join thousands of creators who trust Mindraft
      </p>
      <div className="mt-12 w-full max-w-[80%] mx-auto grid xl:grid-cols-3 gap-8">
        {testimonies.map((data) => (
          <div
            key={data.name}
            className="p-4 rounded-md border border-midnight-200 h-[210px]"
          >
            <div className="flex text-amber-300 text-lg">
              {[
                ...new Array(5).fill(0).map((_, indx) => (
                  <div key={indx}>
                    <IoMdStar />
                  </div>
                )),
              ]}
            </div>
            <p className="text-start my-4 text-midnight-600 font-space-grotesk text-sm">
              "{data.test}"
            </p>
            <div className="flex flex-col gap-0 items-start">
              <p className="font-semibold text-midnight-600 font-poppins">{data.name}</p>
              <p className="text-xs text-midnight-500 font-inter font-medium">{data.job}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonies;
