import { Fragment } from "react";
import { sliderData } from "../constants";

const Slider = () => {
  return (
    <section className="py-8 overflow-x-clip w-full max-w-6xl mx-auto">
      <div className="w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max mx-auto animate-slider gap-36 pl-36 ![animation-duration:20s]">
          {[
            ...new Array(2).fill(0).map((_, indx) => (
              <Fragment key={indx}>
                {sliderData.map((data) => (
                  <div
                    key={data.big + indx}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <h3 className="text-3xl font-semibold font-inter text-blue-400 tracking-tight">
                      {data.big}
                    </h3>
                    <p className="text-sm text-midnight font-space-grotesk">
                      {data.small}
                    </p>
                  </div>
                ))}
              </Fragment>
            )),
          ]}
        </div>
      </div>
    </section>
  );
};

export default Slider;
