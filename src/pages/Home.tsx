const Home = () => {
  return (
    <div className="home-background lg:h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 px-20 xl:pl-0 max-w-[1200px] mx-auto gap-x-20 gap-y-10 mt-40 mb-20 lg:mb-4">
        <div className="text-white flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <p className="uppercase text-xl lg:text-3xl tracking-widest">
            So, you want to travel to
          </p>
          <h1 className="bellefair text-[6.5rem] md:text-[7.5rem] lg:text-[9rem]">
            SPACE
          </h1>
          <p className="text-[16px] sm:text-[18px] sm:max-w-[30rem] md:text-[20px] max-w-[22rem] text-center lg:text-left mx-auto lg:text-[20px] text-white/50 lg:max-w-[32rem]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex items-center lg:justify-end justify-center relative ">
          <div className=" w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] rounded-full bg-tertiary flex items-center justify-center group cursor-pointer">
            <div className="w-[24rem] h-[24rem] bg-white/10 group-hover:absolute z-10 rounded-full hidden group-hover:block group-hover:transition-all group-hover:duration-500 group-hover:delay-1000"></div>
            <p className="text-primary bellefair text-2xl uppercase">Explore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
