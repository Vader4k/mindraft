import { BsFileEarmarkRichtext } from "react-icons/bs";
import { LuPencilLine, LuPenTool } from "react-icons/lu";
import { BsCardImage } from "react-icons/bs";
import { PiScissorsLight, PiCertificateLight } from "react-icons/pi";

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
    </section>
  );
};

export default Overview;
