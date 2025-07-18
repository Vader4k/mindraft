import { Link } from "react-router-dom";
import { footerLinks } from "../constants";

const Footer = () => {

  return (
    <footer className="my-10 pt-10 w-full px-5 lg:px-0 lg:max-w-[80%] mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-start w-full justify-between pb-7 border-b border-midnight-300">
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold">
            Mind<span className="italic font-thin">raft</span>
          </h2>
          <div className="md:text-sm max-w-sm text-midnight-600">
            <p>
              Empowering creators with AI-powered tools for content creation,
              image editing, and more
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20">
          {/* links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold">Company</h3>
            <div className="flex flex-col gap-3 text-midnight-600 lg:text-xs">
              {footerLinks.map((link) => (
                <Link
                  title={`Go to ${link.name} page`}
                  key={link.name}
                  to={link.link}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          {/* newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold">Subscribe to our newsletter</h3>
            <p className="md:text-xs">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border p-3 outline-none rounded-md text-xs border-midnight-200"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <p className="text-center mt-4 text-sm text-midnight-400 font-medium">
        Copyright 2025 &copy; Mindrift. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
