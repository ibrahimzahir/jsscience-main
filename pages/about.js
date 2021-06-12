import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="col-span-1 text-center text-xl font-bold m-8 p-4">
        <h1>Little bit About Us...</h1>
      </div>

      <div className="grid grid-col m-4">
        <div className="m-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="sm:flex-shrink-0 md:flex-shrink-0">
              <img
                className="max-h-52 w-full object-cover md:h-full md:w-48"
                src="/sheesh.png"
                alt="shanif"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Shanif Ahmed
              </div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">
                Software Engineering and Machine Learning
              </p>
              <p className="mt-2 text-gray-500">
                I'm interested in technology and programming. I want learn
                Computer programming and do creative things on the Artificial
                Intelligence and Data Science.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="max-h-52 w-full object-cover md:h-full md:w-48"
                src="/jeen.png"
                alt="jeen"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Jeen Mohamed
              </div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">
                Interested in Science and Medicine.
              </p>
              <p className="mt-2 text-gray-500">
                I'm interested in Science and Medicine. Science is my passion. I
                want study Medicine and expand my knowledge on Medicien and
                Technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
