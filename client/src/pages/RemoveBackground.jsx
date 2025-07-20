import { PiScissorsLight } from "react-icons/pi";
import ImageUploader from "../components/ImageUploader";
import { SlMagicWand } from "react-icons/sl";

const RemoveBackground = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-2 font-inter">Background Removal</h1>
      <p className="font-poppins text-sm text-midnight-600">
        Remove backgrounds from images instantly with precision AI technology
      </p>

      {/* upload div */}
      <div className="w-full flex items-start justify-between gap-8 mt-10">
        <div className="flex-1 w-full p-6 border border-midnight-200 bg-white rounded-md">
          <div>
            <h2 className="text-xl font-semibold font-inter">Original Image</h2>
            <p className="mt-2 text-xs font-inter text-midnight-500">
              Upload an image to remove its background
            </p>
          </div>
          <div className="mt-10">
            <ImageUploader />
            <button
              type="submit"
              className="mt-4 gap-4 w-full flex items-center text-sm font-poppins justify-center p-2 bg-gradient-to-l from-blue-300 via-blue-600 to-blue-300 text-white rounded-md"
            >
              <SlMagicWand /> Remove Background
            </button>
          </div>
        </div>
        {/* response */}
        <div className="flex-1 w-full p-6 border border-midnight-200 bg-white rounded-md">
          <h2 className="text-xl font-semibold font-inter">Processed Image</h2>
          <p className="mt-2 text-xs font-inter text-midnight-500">
            Image with background removed
          </p>

          <div className="mt-10 min-h-[300px] border-2 flex flex-col items-center justify-center rounded-md border-dashed border-midnight-200">
            <div className="flex flex-col items-center text-midnight-500">
              <PiScissorsLight className="text-4xl mb-6" />
              <p className="text-sm font-space-grotesk">
                Fill in the parameters and click "Remove background" to get
                started
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoveBackground;
