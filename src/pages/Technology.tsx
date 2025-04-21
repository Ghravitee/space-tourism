import { useState } from "react";
import vehicle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsule from "../assets/technology/image-space-capsule-portrait.jpg";
import spacePort from "../assets/technology/image-spaceport-portrait.jpg";

const Technology = () => {
  const tabs = [
    {
      id: "1",
      title: "Launch Vehicle",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: vehicle,
    },
    {
      id: "2",
      title: "Space capsule",
      description:
        "Space capsule A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: spaceCapsule,
    },
    {
      id: "3",
      title: "Space port",
      description:
        "Spaceport A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      image: spacePort,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = tabs[currentIndex];

  return (
    <div className="technology-background min-h-screen flex items-center justify-center px-4 pb-10">
      <div className="mt-40 max-w-6xl w-full">
        <h2 className="text-white uppercase text-3xl mb-10 font-light">
          <span className="mr-2 text-white/40">03</span> Space launch 101
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="flex items-center gap-10">
            {/* Left: Text & Controls */}
            <div className="flex flex-col gap-y-10">
              {tabs.map((_, id) => (
                <button
                  key={id}
                  onClick={() => setCurrentIndex(id)}
                  className={`h-16 w-16 rounded-full transition-all duration-300 cursor-pointer  ${
                    currentIndex === id
                      ? "bg-white text-primary"
                      : "bg-transparent border text-white border-white hover:bg-white/80 hover:text-primary"
                  }`}
                >
                  <p className="bellefair font-bold text-2xl">{id + 1}</p>
                </button>
              ))}
            </div>
            <div className="text-white">
              <h3 className="uppercase text-white/70 text-lg mb-2">
                The Terminology...
              </h3>
              <h1 className="bellefair text-[1.5rem] md:text-[3rem] uppercase">
                {current.title}
              </h1>
              <p className="text-lg text-secondary mb-10 tracking-wider">
                {current.description}
              </p>
              {/* Carousel dots */}
            </div>
            {/* Right: Image */}
          </div>
          <div className="flex justify-center items-center">
            <img
              src={current.image}
              alt={current.title}
              className="w-full max-w-sm md:max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
