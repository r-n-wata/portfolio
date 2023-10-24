import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';
import { RiContactsBookFill } from 'react-icons/ri';
import { ListItems } from '../../interfaces/List';

function Header() {
  const list = [
    { to: 'home', icon: <AiFillHome /> },
    { to: 'about', icon: <FaUserAlt /> },
    { to: 'portfolio', icon: <MdOutlineWork /> },
    { to: 'contact', icon: <RiContactsBookFill /> },
  ];
  const icons = list.map((arr: ListItems) => (
    <li className="mb-8 hover:underline hover:duration-300 cursor-pointer group  transition duration-300 hover:text-orange-600">
      <Link to={arr.to} className="text-xl ">
        {arr.icon}
        <span className="block mt-1 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-600"></span>
      </Link>
    </li>
  ));

  return (
    <header className=" bg-black fixed w-20 flex flex-col justify-center  items-center h-full">
      <Link to="home" className="h-1/4"></Link>

      <nav className="h-1/2 flex justify-center items-center">
        <ul>{icons}</ul>
      </nav>
      <div className="w-full h-1/4 flex justify-center self-end">
        <div className="w-1 h-full bg-gray-200"></div>
      </div>
    </header>
  );
}

export default Header;
