import React from "react";
const Strategy = [
  {
    title: "Research & Insights",
  },
  {
    title: "Visual & verbal Identity",
  },
  {
    title: "Brand architecture",
  },
  {
    title: "Messaging Platform",
  },
  {
    title: "Brand Positioning",
  },
  {
    title: "Names & taglines",
  },
  {
    title: "Purpose,vision & values",
  },
  {
    title: "Brand guidlines",
  },
];
const Card = () => {
  return (
    
      <div className="xl:w-1/4 md:w-1/2 w-full relative group cursor-pointer ">
        {/* Black color div */}
        <div className="xl:h-[62vh] lg:h-[55vh] h-[70vh] bg-[#28282B]  rounded-xl flex flex-col group-hover:opacity-0 transition-all duration-300  text-white px-8 py-8">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h1>STRATEGY</h1>
              <p className="text-xs">001</p>
            </div>
            <div className="py-4">
              <div className="relative">
                <div className=" h-10 w-10 rounded-full border-white border-2"></div>
                <div className=" h-10 absolute left-6  top-0 w-10 rounded-full border-white border-2 border-dotted"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-lg">Brand Strategy</h1>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 25 25"
                >
                  <path
                    fill="white"
                    d="M17.5 5.999l-0.707 0.707 5.293 5.293H1v1h21.086l-5.294 5.295 0.707 0.707L24 12.499l-6.5-6.5z"
                    data-name="Right"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-4">
              <p className=" font-light text-[0.8rem] lg:text-lg xl:text-sm" >
                Research & Insights,Brand Architecture,and more ...
              </p>
            </div>
          </div>
        </div>
        {/* -----White div */}
        <div className="absolute top-0  bg-white opacity-0 group-hover:opacity-100 xl:h-[62vh] lg:h-[55vh] h-[70vh] transition-all duration-300  text-black p-8 w-full rounded-xl">
          <div>
            <div>
              <h1 className="text-xl font-medium">Brand Strategy & Identity</h1>
            </div>
            <div className="mt-16 ">
              {Strategy.map((item, index) => (
                <p className="odd:border-t  even:border-t border-slate-300 last:border-b py-2 text-sm">
                  {item.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Card;
