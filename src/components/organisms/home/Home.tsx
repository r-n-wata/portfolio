import { TypeAnimation } from "react-type-animation";
import RandomPoint from "../../atoms/randomPoints/RandomPoints";

function Home() {
  return (
    <section
      className="w-[95%] ml-24  l-[5%] h-screen flex  justify-around items-center text-3xl mobile:flex-col-reverse mobile:justify-center mobile:mx-0 mobile:w-full"
      id="home"
    >
      <div className="mobile:text-center mobile:flex mobile:flex-col mobile:items-center">
        <p className="mb-4 text-3xl mobile:text-2xl">
          Hi, I'm <span className="font-subTitle">Ruth Wata</span>
        </p>
        <p className="mb-4 ">
          a
          <span className="text-orange-600 ml-4 text-5xl mobile:text-3xl">
            <TypeAnimation
              sequence={["Web Developer", 1000, "Software engineer"]}
              repeat={Infinity}
            />
          </span>
        </p>
        <p className="w-1/2 text-3xl mobile:text-xl mobile:w-3/4">
          with a passion for creating successful front and back end web
          applications
        </p>
      </div>

      <div className=" w-1/2 mobile:w-3/4 mb-8">
        <div className="w-3/4 mobile:w-full">
          <img src="/images/01.jpeg" alt="" className="rounded-full" />
        </div>
      </div>

      <RandomPoint />
    </section>
  );
}

export default Home;
