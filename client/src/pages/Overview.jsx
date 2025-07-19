import { BsFileEarmarkRichtext } from "react-icons/bs";
import { LuPencilLine, LuPenTool } from "react-icons/lu";
import { BsLightningCharge } from "react-icons/bs";
import { BsCardImage } from "react-icons/bs";
import { PiScissorsLight, PiCertificateLight } from "react-icons/pi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = [
  {
    type: "article",
    action: "Generated article",
    name: "10 Tips for Better Productivity",
    time: "2 hours ago",
  },
  {
    type: "image",
    action: "Generated image",
    name: "Abstract landscape design",
    time: "4 hours ago",
  },
  {
    type: "background",
    action: "Removed background",
    name: "Product photo editing",
    time: "6 hours ago",
  },
  {
    type: "resume",
    action: "Reviewed resume",
    name: "Software Engineer Resume",
    time: "1 day ago",
  },
];

const getIcon = (type) => {
  switch (type) {
    case "article":
      return <BsFileEarmarkRichtext />;
    case "image":
      return <BsCardImage />;
    case "background":
      return <PiScissorsLight />;
    case "resume":
      return <PiCertificateLight />;
    case "object":
      return <LuPenTool />;
    case "blog":
      return <LuPencilLine />;
    default:
      break;
  }
};

const Card = ({ count, title, icon }) => {
  return (
    <div className="w-full py-6 px-4 border border-midnight-200 bg-white rounded-lg">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium mb-2 font-inter text-midnight-700">
          {title}
        </span>
        <span className="text-blue-600">{icon}</span>
      </div>
      <p className="text-2xl font-bold font-space-grotesk">{count}</p>
      <p className="mt-2 text-xs text-midnight-500 font-poppins">This month</p>
    </div>
  );
};

const Overview = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-2 font-inter">Dashboard Overview</h1>
      <p className="font-poppins text-sm text-midnight-600">
        Welcome back! Here's what's happening with your AI tools.
      </p>
      {/* Statistics */}
      <div className="my-5 grid gap-4 grid-cols-4">
        <Card
          title="Articles generated"
          count={24}
          icon={<BsFileEarmarkRichtext />}
        />
        <Card title="Images Generated" icon={<BsCardImage />} count={156} />
        <Card title="Images Edited" icon={<PiScissorsLight />} count={89} />
        <Card title="Resume Reviewd" icon={<PiCertificateLight />} count={12} />
      </div>

      {/* Actions and activities */}
      <div className="w-full flex my-10 items-start gap-6">
        <div className="flex-1 w-full p-6 border border-midnight-200 rounded-md bg-white">
          <div>
            <h1 className="text-xl font-semibold font-inter flex gap-1 items-center">
              <BsLightningCharge className="text-blue-600 text-base" /> Quick
              Actions
            </h1>
            <p className="text-xs mt-2 text-midnight-500 font-inter">
              Jump into your most used AI tools
            </p>
          </div>
          {/* buttons */}
          <div className="mt-5">
            <Link
              to={"/dashboard/article"}
              className="p-3 hover:bg-blue-50/50 transition-all w-full flex items-center gap-5 border border-midnight-200 rounded-lg"
            >
              <div className="size-[40px] text-lg flex items-center justify-center bg-gradient-to-b from-blue-600 to-blue-400 text-white rounded-lg">
                <BsFileEarmarkRichtext />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-medium font-space-grotesk">
                  Generate Article
                </p>
                <span className="text-xs font-inter">
                  Create high-quality articles with AI
                </span>
              </div>
            </Link>
            <Link
              to={"/dashboard/blog"}
              className="p-3 hover:bg-blue-50/50 transition-all w-full flex items-center gap-5 border border-midnight-200 rounded-lg"
            >
              <div className="size-[40px] text-lg flex items-center justify-center bg-gradient-to-b from-blue-600 to-blue-400 text-white rounded-lg">
                <LuPencilLine />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-medium font-space-grotesk">
                  Generate Blog title
                </p>
                <span className="text-xs font-inter">
                  Create catchy blog titles
                </span>
              </div>
            </Link>
            <Link
              to={"/dashboard/generate-images"}
              className="p-3 hover:bg-blue-50/50 transition-all w-full flex items-center gap-5 border border-midnight-200 rounded-lg"
            >
              <div className="size-[40px] text-lg flex items-center justify-center bg-gradient-to-b from-blue-600 to-blue-400 text-white rounded-lg">
                <BsCardImage />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-medium font-space-grotesk">
                  Generate Images
                </p>
                <span className="text-xs font-inter">
                  Create stunning AI images
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full p-6 border border-midnight-200 rounded-md bg-white">
          <div>
            <h1 className="text-xl font-semibold font-inter flex gap-1 items-center">
              <FaRegClock className="text-blue-600 text-base" /> Recent Activity
            </h1>
            <p className="text-xs mt-2 text-midnight-500 font-inter">
              Your latest AI-powered creations
            </p>
            {/*top 4 recent activities */}
            <div className="mt-5 flex flex-col gap-3">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="w-full flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-[30px] flex items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      {getIcon(item.type)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-space-grotesk font-medium text-midnight-700">
                        {item.action}
                      </span>
                      <span className="text-xs font-inter text-midnight-500">
                        {item.name}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-poppins text-midnight-500">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*Usage Analytics*/}
      <div className="w-full relative p-6 border border-midnight-200 rounded-md bg-white min-h-[200px]">
        <div>
          <h1 className="text-xl font-semibold font-inter flex gap-1 items-center">
            <IoAnalyticsOutline className="text-blue-500 text-base" /> Usage
            Analytics
          </h1>
          <p className="text-xs mt-2 text-midnight-500 font-inter">
            Your AI tool usage over the past 30 days
          </p>
        </div>
        <div className="absolute inset-0 top-1/3 flex flex-col items-center justify-center bg-white/10 backdrop-blur-[2px]">
          <p className="relative capitalize text-midnight-600 text-sm font-inter">coming soon!</p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
