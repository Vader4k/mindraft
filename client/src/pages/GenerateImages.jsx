import { useState } from "react";
import { SlMagicWand } from "react-icons/sl";
import { BsCardImage } from "react-icons/bs";

const initialFormData = {
  description: "",
  style: "",
  size: "",
};

const GenerateImages = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };

  return (
    <section>
      <h1 className="text-2xl font-bold mb-2 font-inter">
        AI Image Generation
      </h1>
      <p className="font-poppins text-sm text-midnight-600">
        Create stunning, unique images from text description
      </p>

      {/* Image holders */}
      <div className="w-full mt-10 flex items-start justify-between gap-6">
        <div className="flex-1 w-full p-6 border border-midnight-200 bg-white rounded-md">
          <h2 className="text-xl font-semibold font-inter">Image parameters</h2>
          <p className="mt-2 text-xs font-inter text-midnight-500">
            Describe the image you want to create
          </p>

          <form
            className="flex flex-col gap-5 mt-10 items-start w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="description" className="text-sm font-medium">
                Image Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="A futuristic cityscape at sunset with flying cars and neon lights..."
                type="text"
                className="w-full rounded-md outline-none border border-midnight-200 text-sm px-3 py-2 font-space-grotesk"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="style" className="text-sm font-medium">
                Art Style
              </label>
              <select
                id="style"
                name="style"
                className="w-full text-sm font-space-grotesk border px-3 py-1.5 outline-none rounded-md border-midnight-200"
                value={formData.style}
                onChange={handleChange}
                required
              >
                <option disabled value="">
                  Select style
                </option>
                <option value="realistic">Realistic</option>
                <option value="artistic">Artistic</option>
                <option value="cartoon">Cartoon</option>
                <option value="ghibli style">Ghibli</option>
                <option value="anime style">Anime art</option>
                <option value="oil painting">Oil painting</option>
                <option value="fantasy style">Fantasy style</option>
              </select>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="size" className="text-sm font-medium">
                Image Size
              </label>
              <select
                id="size"
                name="size"
                className="w-full text-sm font-space-grotesk border px-3 py-1.5 outline-none rounded-md border-midnight-200"
                value={formData.size}
                onChange={handleChange}
                required
              >
                <option disabled value="">
                  {" "}
                  Select size
                </option>
                <option value="square">Square (1024x1024)</option>
                <option value="portrait">Portrait (1024x1792)</option>
                <option value="landscape">Landscape (1792x1024)</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-4 gap-4 w-full flex items-center text-sm font-poppins justify-center p-2 bg-gradient-to-l from-blue-300 via-blue-600 to-blue-300 text-white rounded-md"
            >
              <SlMagicWand /> Generate Image
            </button>
          </form>
        </div>

        {/* response */}
        <div className="flex-1 w-full p-6 border border-midnight-200 bg-white rounded-md">
          <h2 className="text-xl font-semibold font-inter">Generated Image</h2>
          <p className="mt-2 text-xs font-inter text-midnight-500">
            Your Ai-generated image will appear here
          </p>

          <div className="mt-10 h-[320px] border-2 flex flex-col items-center justify-center rounded-md border-dashed border-midnight-200">
            <div className="flex flex-col items-center text-midnight-500">
              <BsCardImage className="text-4xl mb-6" />
              <p className="text-sm font-space-grotesk">
                Describe your image and click "Generate image" to get started
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerateImages;
