import { SlMagicWand } from "react-icons/sl";
import { LuPenTool } from "react-icons/lu";
import { useState } from "react";

const ObjectRemoval = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    image: image,
    description: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      console.log("Uploaded image:", file.name);
    } else {
      setImage(null);
    }
  };

  return (
    <section>
      <h1 className="text-2xl font-bold mb-2 font-inter">Object Removal</h1>
      <p className="font-poppins text-sm text-midnight-600">
        Remove unwanted objects from the photos seamlessly with intelligent AI
        editing
      </p>

      {/* upload div */}
      <div className="w-full flex items-start justify-between gap-8 mt-10">
        <div className="flex-1 flex flex-col gap-2 bg-white rounded-md w-full p-6 border border-midnight-200">
          <div>
            <h2 className="text-xl font-semibold font-inter">Original Image</h2>
            <p className="mt-2 text-xs font-inter text-midnight-500">
              Upload an image
            </p>
          </div>
          <form className="flex mt-4 flex-col gap-5">
            <div className="w-full relative flex items-center border px-3 py-2 rounded-md border-midnight-200">
              <label
                aria-label="upload-button"
                htmlFor="image"
                className="cursor-pointer"
              >
                <input
                  name="image"
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="hidden"
                />
                <div className="text-midnight-600 text-sm font-medium bg-gray-100 p-1.5 font-inter rounded-full px-3">
                  {image ? (
                    image.name
                  ) : (
                    <>
                      Choose File{" "}
                      <span className="px-2 text-xs">No file chosen</span>
                    </>
                  )}
                </div>
              </label>
            </div>

            <div>
              <label htmlFor="description" className="text-sm font-medium">
                Describe object to remove
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="e.g., car in  background, tree from the image"
                type="text"
                className="w-full mt-2 rounded-md outline-none border border-midnight-200 text-sm px-3 py-2 font-space-grotesk"
                value={formData.description}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, description: e.target.value }))
                }
                required
              />
              <p className="text-xs text-midnight-500 font-medium">
                Be specific about what you want to remove
              </p>
            </div>
            <button
              type="submit"
              className="mt-4 gap-4 w-full flex items-center text-sm font-poppins justify-center p-2 bg-gradient-to-l from-blue-300 via-blue-600 to-blue-300 text-white rounded-md"
            >
              <SlMagicWand /> Remove Object
            </button>
          </form>
        </div>

        {/* Results */}
        {/* response */}
        <div className="flex-1 w-full p-6 border border-midnight-200 bg-white rounded-md">
          <h2 className="text-xl font-semibold font-inter">Processed Image</h2>
          <p className="mt-2 text-xs font-inter text-midnight-500">
            Image with background removed
          </p>

          <div className="mt-10 min-h-[300px] border-2 flex flex-col items-center justify-center rounded-md border-dashed border-midnight-200">
            <div className="flex flex-col items-center text-midnight-500">
              <LuPenTool className="text-4xl mb-6" />
              <p className="text-sm font-space-grotesk">
                Fill in the parameters to remove an image from the picture
                started
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectRemoval;
