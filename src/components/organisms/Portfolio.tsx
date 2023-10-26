import Line from "../atoms/Line";
import { portfolioData } from "../../utils/porfolioData";

function Portfolio() {
  return (
    <div className="w-[95%] ml-24 mobile:mx-0 mobile:w-full">
      <Line />
      <section className="my-32 mobile:my-20 " id="portfolio">
        <div>
          <h2 className="text-4xl text-orange-600 font-semibold mobile:text-3xl mobile:-mb-3">
            Portfolio
          </h2>
          <Line style="justify-start flex-col" />
        </div>
        <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1 mobile:gap-0">
          {
            // eslint-disable-next-line array-callback-return
            portfolioData.map((item) => {
              return (
                <div key={item.name} className="py-10 pr-20 mobile:pr-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-32"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-[70rem] h-[26rem] mobile:h-[12rem] smallmobile:h-[8rem]"
                    />
                  </a>
                  <h3 className="text-2xl font-bold mt-10 mb-6 mobile:text-xl mobile:mt-6 mobile:mb-2">
                    {item.name}
                  </h3>
                  <p>{item.description}</p>

                  <button
                    type="button"
                    className="bg-orange-600 py-3 px-4 mt-4 rounded-md hover:bg-orange-500 mobile:py-2 mobile:px-3 mobile:text-md"
                  >
                    <a href={item.link}></a> VISIT
                  </button>
                </div>
              );
            })
          }
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
