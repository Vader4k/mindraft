import { useState } from "react";
import { SlMagicWand } from "react-icons/sl";
import { BsFileEarmarkRichtext } from "react-icons/bs";

const initialFormData = {
  topic: "",
  keywords: "",
  tone: "professional",
  length: "300-500",
};

const Article = () => {
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
      <h1 className="text-2xl font-bold mb-2 font-inter">Article Generation</h1>
      <p className="font-poppins text-sm text-midnight-600">
        Generate high-quality articles with AI assistance
      </p>

      {/* Article holders */}
      <div className="w-full mt-10 flex items-start justify-between gap-6">
        <div className="flex-1 w-full p-6 border border-midnight-200 bg-white rounded-md">
          <h2 className="text-xl font-semibold font-inter">
            Article parameters
          </h2>
          <p className="mt-2 text-xs font-inter text-midnight-500">
            Provide details about the article you want to generate
          </p>

          <form className="flex flex-col gap-5 mt-10 items-start w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="topic" className="text-sm font-medium">
                Topic
              </label>
              <input
                id="topic"
                name="topic"
                placeholder="Enter the main topic of your article"
                type="text"
                className="w-full rounded-md outline-none border border-midnight-200 text-sm px-3 py-2 font-space-grotesk"
                value={formData.topic}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="keywords" className="text-sm font-medium">
                Keywords (comma-separated)
              </label>
              <input
                id="keywords"
                name="keywords"
                placeholder="SEO, content marketing, digital startegy"
                type="text"
                className="w-full rounded-md outline-none border border-midnight-200 text-sm px-3 py-2 font-space-grotesk"
                value={formData.keywords}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="tone" className="text-sm font-medium">
                Tone
              </label>
              <select
                id="tone"
                name="tone"
                className="w-full text-sm font-space-grotesk border px-3 py-1.5 outline-none rounded-md border-midnight-200"
                value={formData.tone}
                onChange={handleChange}
                required
              >
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
                <option value="friendly">Friendly</option>
                <option value="authoritative">Authoritative</option>
                <option value="conversational">Conversational</option>
              </select>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="length" className="text-sm font-medium">
                Article length
              </label>
              <select
                id="length"
                name="length"
                className="w-full text-sm font-space-grotesk border px-3 py-1.5 outline-none rounded-md border-midnight-200"
                value={formData.length}
                onChange={handleChange}
                required
              >
                <option value="300-500">Short (300-500 words)</option>
                <option value="500-1000">Medium (500-1000 words)</option>
                <option value="1000-2000">Long (1000-2000 words)</option>
                <option value="2000+">Very Long (2000+ words)</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-4 gap-4 w-full flex items-center text-sm font-poppins justify-center p-2 bg-gradient-to-l from-blue-300 via-blue-600 to-blue-300 text-white rounded-md"
            >
              <SlMagicWand /> Generate Article
            </button>
          </form>
        </div>

        {/* response */}
        <div className="flex-1 w-full p-6 border border-midnight-200 bg-white rounded-md">
          <h2 className="text-xl font-semibold font-inter">
            Generated Article
          </h2>
          <p className="mt-2 text-xs font-inter text-midnight-500">
            Your AI-generated article will appear here
          </p>

          <div className="mt-10 h-[385px] border-2 flex flex-col items-center justify-center rounded-md border-dashed border-midnight-200">
            <div className="flex flex-col items-center text-midnight-500">
              <BsFileEarmarkRichtext className="text-4xl mb-6" />
              <p className="text-sm font-space-grotesk">
                Fill in the parameters and click "Generate Article" to get
                started
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
