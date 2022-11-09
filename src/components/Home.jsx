import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home" className=" px-5 md:px-20 bg-light pb-10 pt-10 sm:pt-24">
      <div className=" bg-light w-[100%] shadow-inset rounded-lg flex flex-col md:flex-row items-center justify-between px-10 lg:px-0 lg:justify-center gap-y-10 xl:gap-48">
        <div className=" md:w-[20rem] lg:min-w-[30rem] pt-5 md:pt-0 text-center md:text-start">
          <h1
            style={{ wordSpacing: "-3px" }}
            className="text-5xl font-HelveticaRoundedBold
            bg-gradient-to-b from-[#61D2FE] to-[#006EE5] text-transparent bg-clip-text
            tracking-tighter textShadow py-3"
          >
            Discover my Amazing Work Projects
          </h1>
          <p className="text-xs text-[#41507B] my-4 mb-8 font-HelveticaRoundedBold">
            &lt;<span className="text-sm text-[#006EE5]">code</span>&gt; WEB
            DEVELOPER &lt;/
            <span className="text-sm text-[#006EE5]">code</span>&gt;
          </p>
          <button className="text-[#41507B] font-HelveticaRoundedBold  rounded-lg px-5 py-3 shadow-neoButton hover:shadow-neohover hover:scale-105 active:shadow-neoInset hover:text-[#006EE5] transition-all duration-200 ease-out">
            <Link to="">EXPLORE NOW</Link>
          </button>
        </div>
        <div className="min-h-[22rem] w-60 relative">
          <img
            src="/img/profileHome.png"
            alt=""
            className=" absolute bottom-0 z-20"
          />
          <img
            className="opacity-60 z-10 absolute bottom-0 left-4 w-[14rem] h-[20rem]"
            src="/img/bgHomeImg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
