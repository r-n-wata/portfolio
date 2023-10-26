import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";
import { ListItems } from "../../../interfaces/List";
import Hamburger from "../../atoms/Hamburger";

function Header() {
  const list = [
    { to: "home", icon: <AiFillHome /> },
    { to: "about", icon: <FaUserAlt /> },
    { to: "portfolio", icon: <MdOutlineWork /> },
    { to: "contact", icon: <RiContactsBookFill /> },
  ];

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      type Sections = {
        [key: string]: HTMLElement | null;
      };

      const sections: Sections = {
        home: document.getElementById("home"),
        about: document.getElementById("about"),
        portfolio: document.getElementById("portfolio"),
        contact: document.getElementById("contact"),
      };

      for (const section in sections) {
        if (Object.prototype.hasOwnProperty.call(sections, section)) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const { offsetTop, offsetHeight } = sections[section]!;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const icons = list.map((arr: ListItems) => (
    <li
      key={arr.to}
      className={`mb-8 hover:underline hover:duration-300 cursor-pointer group transition duration-300 hover:text-orange-600 ${
        currentSection === arr.to
          ? "text-orange-600 underline"
          : "text-gray-300" // Change color as needed
      }`}
    >
      <Link to="#" onClick={() => scrollToSection(arr.to)} className="text-2xl">
        {arr.icon}
        <span className="block mt-1 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-600"></span>
      </Link>
    </li>
  ));

  console.log(showMenu, "header");

  return (
    <header className="bg-black fixed w-[5%] flex flex-col justify-center items-center h-full mobile:bg-inherit mobile:block mobile:w-full">
      <div className="relative  w-full h-4 flex justify-start">
        {" "}
        <Hamburger showMenu={showMenu} toggleMenu={toggleMenu} />
      </div>

      <a href="#home" className="h-1/4"></a>
      <nav
        className={`h-1/2 flex justify-center items-center mobile:flex-col mobile:fixed mobile:top-0 mobile:bg-black mobile:w-[40%] mobile:h-full transition-transform duration-500 ease-in-out z-10 ${
          !showMenu ? "mobile:transform mobile:translate-x-[-14rem]" : ""
        }`}
      >
        <ul>{icons}</ul>
      </nav>
      <div
        className={`w-full h-1/4 flex justify-center self-end mobile:absolute mobile:bottom-0 mobile:w-[40%] transition-transform duration-500 ease-in-out z-50 ${
          showMenu
            ? "mobile:transform mobile:translate-x-0"
            : "mobile:transform mobile:translate-x-[-14rem]"
        }`}
      >
        <div className="w-[.1rem] h-full bg-gray-200"></div>
      </div>
    </header>
  );
}

export default Header;
