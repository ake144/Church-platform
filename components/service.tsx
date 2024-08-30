import LetterPullup from "./magicui/letter-pullup";
import { Separator } from "./ui/separator";
import { FcAlarmClock } from "react-icons/fc";

const ServiceTime = () => {
  return (
    <div className="flex flex-col items-center">
      <LetterPullup className="text-3xl font-bold" words={" There's a Place for You at Apostolic Church! All Are Welcome! "} delay={0.05} />;
      <Separator className="bg-red-500 mt-8  w-1/2 items-center flex justify-center " />
      
      <h2 className="text-4xl font-bold my-9 text-center">
        Apostolic Church Service Times
      </h2>
      <p className="text-lg text-center">
        Join us every Sunday and Wednesday for our weekly services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-9">
        <div className="flex flex-col items-center text-center">
          <FcAlarmClock className="text-5xl" />
          <h3 className="text-2xl font-bold mt-4">Sunday Service</h3>
          <p className="text-lg">9:00 AM - 12:00 PM</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FcAlarmClock className="text-5xl" />
          <h3 className="text-2xl font-bold mt-4">Wednesday Service</h3>
          <p className="text-lg">6:00 PM - 8:00 PM</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FcAlarmClock className="text-5xl" />
          <h3 className="text-2xl font-bold mt-4">In-Person Bible Study & Prayer</h3>
          <p className="text-lg">9:00 PM - 3:00 AM</p>
        </div>
      </div>

      <h2 className="mt-12 text-4xl font-bold text-center">
        Our Doors Are Open Every Day, Waiting for You
      </h2>
      <p className="text-lg text-center font-bold my-8">
        Come home and connect with our community and leaders.
      </p>
    </div>
  );
};

export default ServiceTime;
