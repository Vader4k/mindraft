import { SlMagicWand } from "react-icons/sl";
import { PiCertificateLight } from "react-icons/pi";
import { useState } from "react";

const ResumeReviewer = () => {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setImage(file);
      console.log("Uploaded pdf:", file.name);
    } else {
      setImage(null);
      return
    }
  };

  return (
    <section>
      <h1 className="text-2xl font-bold mb-2 font-inter">Resume Reviewer</h1>
      <p className="font-poppins text-sm text-midnight-600">
        Get AI-powered feedback and suggestions to improve your resume
      </p>

      {/* upload div */}
      <div className="w-full flex items-start justify-between gap-8 mt-10">
        <div className="flex-1 flex flex-col gap-2 bg-white rounded-md w-full p-6 border border-midnight-200">
          <div>
            <h2 className="text-xl font-semibold font-inter">Upload Resume</h2>
            <p className="mt-2 text-xs font-inter text-midnight-500">
              Upload your resume for AI analysis
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
                  accept="application/pdf"
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
                <p className="mt-2 text-xs text-midnight-500 px-2 font-inter"> Supports PDF files only</p>
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 gap-4 w-full flex items-center text-sm font-poppins justify-center p-2 bg-gradient-to-l from-blue-300 via-blue-600 to-blue-300 text-white rounded-md"
            >
              <SlMagicWand /> Review Resume
            </button>
          </form>
        </div>

        {/* Results */}
        <div className="flex-1 w-full p-6 border border-midnight-200 bg-white rounded-md">
          <div className="mt-10 min-h-[300px] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center text-midnight-500">
              <PiCertificateLight className="text-4xl mb-6" />
              <p className="text-sm font-space-grotesk">
                upload your resume to get  detailed AI analysis and feedback
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeReviewer;
