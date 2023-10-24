import { TypeAnimation } from 'react-type-animation';
import RandomPoint from '../randomPoints/RandomPoints';

function Home() {
  return (
    <section className="w-10/12 ml-32 h-screen flex flex-col justify-center  text-2xl ">
      <div className="">
        <p className="mb-4">
          Hi, I'm <span className="font-subTitle">Ruth Wata</span>
        </p>
        <p className="mb-4">
          a
          <span className="text-orange-600 ml-4 text-4xl">
            <TypeAnimation
              sequence={['Web Developer', 1000, 'Software engineer']}
              repeat={Infinity}
            />
          </span>
        </p>
        <p className="w-1/2 ">
          with a passion for creating successful front and back end web
          applications
        </p>
      </div>

      <RandomPoint />
    </section>
  );
}

export default Home;
