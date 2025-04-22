import { useState } from "react";
import douglas from "../assets/crew/image-douglas-hurley.webp";
import mark from "../assets/crew/image-mark-shuttleworth.webp";
import victor from "../assets/crew/image-victor-glover.webp";
import anousheh from "../assets/crew/image-anousheh-ansari.webp";

const Crew = () => {
  const tabs = [
    {
      name: "Douglas Hurley",
      title: "Commander",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: douglas,
    },
    {
      name: "Mark Shuttleworth",
      title: "Mission Specialist",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: mark,
    },
    {
      name: "Victor Glover",
      title: "Pilot",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      image: victor,
    },
    {
      name: "Anousheh Ansari",
      title: "Flight Engineer ",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: anousheh,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = tabs[currentIndex];

  //   const goToNext = () => setCurrentIndex((prev) => (prev + 1) % tabs.length);
  //   const goToPrev = () =>
  //     setCurrentIndex((prev) => (prev - 1 + tabs.length) % tabs.length);

  return (
    <div className="crew-background min-h-screen flex items-center justify-center px-4">
      <div className="mt-32 lg:mt-[14rem] mb-10 md:mb-0 lg:mb-40 max-w-6xl w-full">
        <h2 className="text-white uppercase text-3xl mb-10 font-light text-center lg:text-left">
          <span className="mr-2 text-white/40">02</span> Meet your crew
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mt-[100px]">
          {/* Left: Text & Controls */}
          <div className="text-white">
            <h3 className="uppercase text-white/50 text-2xl bellefair mb-1 text-center lg:text-left">
              {current.title}
            </h3>
            <h1 className="bellefair text-[2rem] md:text-[3rem] uppercase text-center lg:text-left mb-4">
              {current.name}
            </h1>
            <p className="text-lg text-secondary  mb-10 tracking-wider text-center lg:text-left">
              {current.description}
            </p>

            {/* Carousel dots */}
            <div className="flex gap-4 lg:mt-[20rem] justify-center lg:justify-start">
              {tabs.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "bg-white/30"
                      : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center items-center">
            <img
              src={current.image}
              alt={current.name}
              className="w-full max-w-sm md:max-w-md object-contain"
            />
          </div>
        </div>

        {/* Optional Arrows */}
        {/* <div className="flex justify-center gap-10 mt-12">
          <button
            onClick={goToPrev}
            className="text-white text-3xl px-4 py-2 bg-white/10 hover:bg-white/30 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={goToNext}
            className="text-white text-3xl px-4 py-2 bg-white/10 hover:bg-white/30 rounded-full"
          >
            ›
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Crew;
