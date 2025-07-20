import React, { useRef, useState } from "react";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const inputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      console.log("Uploaded image:", file.name);
    } else {
      setImage(null);
      setPreview(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      console.log("Uploaded image:", file.name);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <form className="w-full h-full flex flex-col items-center justify-center">
      <div
        className="relative w-full h-full min-h-[300px] flex flex-col items-center justify-center border-2 border-dashed border-midnight-200 rounded-2xl bg-white/60 backdrop-blur-md transition-all cursor-pointer group"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover rounded-2xl animate-fade-in"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-midnight-500">
            <svg
              className="w-10 h-10 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16.5 12.5L12 17m0 0l-4.5-4.5M12 17V4"
              />
            </svg>
            <p className="font-semibold">
              Click to upload an image
            </p>
            <p className="text-sm font-thin text-midnight-400 mt-1">
              PNG, JPG, JPEG up to 10MB
            </p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          className="hidden"
          onChange={handleFileChange}
          required
        />
        {image && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/80 px-3 py-1 rounded-full text-xs text-blue-700 shadow-md animate-fade-in">
            {image.name}
          </div>
        )}
      </div>
    </form>
  );
};

export default ImageUploader;

