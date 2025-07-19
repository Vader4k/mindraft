import { useState } from "react";
import { SlMagicWand } from "react-icons/sl";
import { LuPencilLine } from "react-icons/lu";

const initialFormData = {
  topic: "",
  style: "",
  audience: "",
};

const BlogTitle = () => {
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
      <h1 className="text-2xl font-bold mb-2 font-inter">Blog Title Creator</h1>
      <p className="font-poppins text-sm text-midnight-600">
        Generate catchy, SEO-optimized blog titles that drive clicks
      </p>

      {/* Article holders */}
      <div className="w-full mt-10 flex items-start justify-between gap-6">
        <div className="flex-1 w-full p-6 border border-midnight-200 bg-white rounded-md">
          <h2 className="text-xl font-semibold font-inter">Title parameters</h2>
          <p className="mt-2 text-xs font-inter text-midnight-500">
            Tell us about your blog post
          </p>

          <form
            className="flex flex-col gap-5 mt-10 items-start w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="topic" className="text-sm font-medium">
                Main Topic
              </label>
              <input
                id="topic"
                name="topic"
                placeholder="e.g., Digital Marketing"
                type="text"
                className="w-full rounded-md outline-none border border-midnight-200 text-sm px-3 py-2 font-space-grotesk"
                value={formData.topic}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="style" className="text-sm font-medium">
                Title Style
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
                <option value="listicle">Listicle (Top 10, 5 Ways)</option>
                <option value="how-to-guide">How-to-Guide</option>
                <option value="question-based">Question-based</option>
                <option value="ultimate guide">Ultimate Guide</option>
                <option value="secretes/tips">Secrets/Tips</option>
                <option value="comparison">Comparison</option>
              </select>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="audience" className="text-sm font-medium">
                Target Audience
              </label>
              <select
                id="audience"
                name="audience"
                className="w-full text-sm font-space-grotesk border px-3 py-1.5 outline-none rounded-md border-midnight-200"
                value={formData.audience}
                onChange={handleChange}
                required
              >
                <option disabled value="">
                  Select audience
                </option>
                <option value="beginners">Beginners</option>
                <option value="professionals">Professionals</option>
                <option value="entrepreneurs">Entrepreneurs</option>
                <option value="students">Students</option>
                <option value="general audience">General Audience</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-4 gap-4 w-full flex items-center text-sm font-poppins justify-center p-2 bg-gradient-to-l from-blue-300 via-blue-600 to-blue-300 text-white rounded-md"
            >
              <SlMagicWand /> Generate Titles
            </button>
          </form>
        </div>

        {/* response */}
        <div className="flex-1 w-full p-6 border border-midnight-200 bg-white rounded-md">
          <h2 className="text-xl font-semibold font-inter">Generated Titles</h2>
          <p className="mt-2 text-xs font-inter text-midnight-500">
            Click on any title to copy it
          </p>

          <div className="mt-10 h-[300px] border-2 flex flex-col items-center justify-center rounded-md border-dashed border-midnight-200">
            <div className="flex flex-col items-center text-midnight-500">
              <LuPencilLine className="text-4xl mb-6" />
              <p className="text-sm font-space-grotesk">
                Fill in the parameters and click "Generate Titles" to get
                started
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTitle;
