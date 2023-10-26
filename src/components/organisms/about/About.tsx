import Line from "../../atoms/Line";

const skillIcons = [
  { src: "/images/skills/css.png", alt: "css" },
  { src: "/images/skills/html.png", alt: "html" },
  { src: "/images/skills/js.png", alt: "js" },
  { src: "/images/skills/mongodb.png", alt: "mongodb" },
  { src: "/images/skills/node.png", alt: "node" },
  { src: "/images/skills/react.png", alt: "react" },
  { src: "/images/skills/sql.png", alt: "sql" },
  { src: "/images/skills/ts.png", alt: "ts" },
  { src: "/images/skills/chrome.png", alt: "chrome" },
  { src: "/images/skills/git.png", alt: "git" },
  { src: "/images/skills/ionic.png", alt: "ionic" },
];
function About() {
  return (
    <div className=" ml-24 w-[95%] mobile:mx-0 mobile:w-full">
      <Line />
      <section className=" my-32 mb-52  mobile:my-20 " id="about">
        <div>
          <h2 className="text-4xl text-orange-600 font-semibold mobile:text-3xl mobile:-mb-3">
            About
          </h2>
          <Line style="justify-start flex-col" />
        </div>
        <div className="flex mobile:flex-col">
          <section className="border-r-4 w-1/2 mobile:border-l-4 mobile:border-r-0 mobile:pl-4 mobile:w-full ">
            <div className="w-3/4 mt-10 text-2xl mobile:w-full mobile:my-4 mobile:text-xl">
              <p className="">
                I am an English and Spanish speaking software engineer based in
                Mexico. I love music and travelling - I am passionate about
                technology, specifically its positive social impact on people's
                lives across different countries and cultures.
              </p>
              <br />
              <p>
                Having an online presence nowadays, is imperative for business
                growth. If you have an idea for a project, I can make that idea
                come to life. I am also open to new opportunities to add my
                skills and grow within a team.
              </p>
            </div>
          </section>

          <section className=" w-1/2 pl-14 mobile:w-full mobile:pl-0 mobile:mt-8">
            <h3 className="text-3xl mb-4 mobile:text-xl underline ">Skills</h3>
            <ul className="grid grid-cols-4 gap-8 mobile:grid-cols-4 mobile:gap-4">
              {skillIcons.map((icon) => (
                <li key={icon.alt}>
                  <img src={icon.src} alt={icon.alt} className="w-10 h-10" />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}

About.propTypes = {};

export default About;
