import React from "react";

const Home = () => {
  return (
    <div className="home-background h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 max-w-[1200px] mx-auto gap-x-20 gap-y-10 mt-40">
        <div className="text-white">
          <p className="uppercase text-3xl tracking-widest">
            So, you want to travel to
          </p>
          <h1 className="bellefair text-[9rem]">SPACE</h1>
          <p className="text-[20px] text-white/50 max-w-[32rem]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex items-center justify-end">
          <div className="w-[15rem] h-[15rem] rounded-full bg-tertiary flex items-center justify-center">
            <p className="text-primary bellefair text-2xl uppercase">Explore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
