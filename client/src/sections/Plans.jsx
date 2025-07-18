import { FaRegCircleCheck } from "react-icons/fa6";

const Plans = () => {
  const Card = ({ title, price, description, features, buttonText }) => (
    <div className="w-full max-w-[300px] flex flex-col border h-full min-h-[400px] border-midnight-200 rounded-md shadow">
      <div className="p-4 flex border-b border-midnight-200 items-start flex-col gap-2 bg-blue-50/50">
        <span className="font-poppins font-semibold">{title}</span>
        <div className="font-inter font-semibold text-xl">{price}</div>
        <span className="text-xs text-midnight-500">{description}</span>
      </div>
      <div className="p-4 flex flex-col gap-3 text-sm font-space-grotesk">
        {features.map((feature, idx) => (
          <div className="flex items-center gap-2" key={idx}>
            <FaRegCircleCheck className="text-midnight-500" />
            <p>{feature}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto p-4 border-t border-midnight-200 bg-blue-50/50">
        <button className="w-full font-inter text-xs font-medium py-2 bg-gradient-to-b from-gray-600 to-gray-900 text-white rounded-md">
          {buttonText}
        </button>
      </div>
    </div>
  );

  return (
    <section
      id="pricing"
      className="py-5 flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-4xl font-bold font-inter tracking-tighter">
        Choose Your Plan
      </h1>
      <p className="max-w-lg text-midnight-700">
        Flexible pricing for creators of all sizes
      </p>
      <div className="my-10 flex flex-col xl:flex-row items-center xl:items-start justify-center gap-6 w-full">
        <Card
          title="Free"
          price="$0"
          description="Always free"
          features={["Title Generation", "Article Generation"]}
          buttonText="Subscribe"
        />
        {/* premium */}
        <Card
          title="Premium"
          price="$9/mo"
          description="Best for professionals"
          features={[
            "Title Generation",
            "Article Generation",
            "Generate Images",
            "Remove Background",
            "Remove Object",
            "Resume Review"
          ]}
          buttonText="Subscribe"
        />
      </div>
    </section>
  );
};

export default Plans;
