import { ServiceExpert } from "../constants";
import { Box, redbox } from "../assets";
const ServiceExpertise = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="md:w-1/2 xs:w-full flex flex-col px-5">
        <hr className="h-1 bg-black" />
        <h1 className="flex justify-center font-serif font-semibold underline threexl:text-7xl lg:text-5xl xs:text-3xl pb-5">
          Our Expertise
        </h1>
        {ServiceExpert.map((item) => (
          <div key={item.id} className="flex flex-col font-serif py-4">
            <h1 className="threexl:text-5xl xs:text-2xl lg:text-3xl font-semibold">
              {item.header}
            </h1>
            <p className="threexl:text-2xl lg:text-lg">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="xs:w-full md:w-1/2 bg-DarkBlue flex flex-col items-center justify-center overflow-hidden">
        <img
          src={redbox}
          className="w-[95%] xs:h-72 md:h-52 lg:h-72 threexl:h-[400px] m-6 rounded-xl object-cover"
        />

        <img
          src={Box}
          className="w-[95%] xs:h-72 md:h-52 lg:h-72 threexl:h-[400px] object-cover m-6 rounded-xl"
        />
      </div>
    </div>
  );
};

export default ServiceExpertise;
