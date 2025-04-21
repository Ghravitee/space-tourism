import mars from "../assets/destination/image-mars.webp";
import { useState } from "react";

const Destination = () => {
  const [activeTab, setActiveTab] = useState("Mars");

  type Current = {
    name: string;
    title: string;
    description: string;
    distance: string;
    time: string;
  };

  const tabs = [
    {
      name: "Moon",
      title: "MOON",
      description:
        " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      time: "3 days",
    },
    {
      name: "Mars",
      title: "MARS",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 ml. km",
      time: "9 months",
    },
    {
      name: "Europa",
      title: "EUROPA",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 ml. km",
      time: "3 years",
    },
    {
      name: "Titan",
      title: "TITAN",
      description:
        "Titan The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      time: "7 years",
    },
  ];

  const current: Current = tabs.find((tab) => tab.name === activeTab)!;

  return (
    <div className="destination-background min-h-screen flex items-center justify-center">
      <div className="mt-40">
        <h2 className="text-white uppercase text-3xl mb-10 font-light">
          <span className="mr-2 text-white/40">01</span> Pick your destination
        </h2>
        <div className="grid grid-cols-2 max-w-[1200px] mx-auto gap-x-20 gap-y-10 ">
          <div className="flex items-center justify-end">
            <img src={mars} alt="" />
          </div>

          <div className="text-white">
            {/* Tabs */}
            <div className="flex gap-6 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`text-lg tracking-widest uppercase pb-2 cursor-pointer ${
                    activeTab === tab.name
                      ? "border-b-2 border-white text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Content */}
            <h1 className="bellefair text-[5rem]">{current.title}</h1>
            <p className="text-[20px] text-white/50 max-w-[32rem] mb-14">
              {current.description}
            </p>
            <div className="h-[1px] bg-white/50 w-full mb-6" />
            <div className="flex gap-x-10 items-center">
              <div>
                <p className="text-white/70 uppercase tracking-widest mb-2">
                  Avg. Distance
                </p>
                <p className="text-white text-3xl font-light bellefair uppercase">
                  {current.distance}
                </p>
              </div>
              <div>
                <p className="text-white/70 uppercase tracking-widest mb-2">
                  Est. Travel Time
                </p>
                <p className="text-white text-3xl font-light bellefair uppercase">
                  {current.time}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
