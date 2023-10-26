interface HamburgerProps {
  showMenu: boolean;
  toggleMenu: () => void;
}

function Hamburger({ showMenu, toggleMenu }: HamburgerProps) {
  console.log(showMenu, "hamburger");
  return (
    <button
      className={`hidden mobile:flex top-2 left-4 z-40 w-[10%] h-10 text-gray-800  mr-6 absolute justify-start items-center transfrom-transition ${
        showMenu ? "left-[30%] " : ""
      } duration-500 `}
      onClick={() => {
        toggleMenu();
      }}
    >
      <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2">
        <span
          className={`absolute h-0.5 w-6 transform transition duration-300 ease-in-out bg-gray-200 ${
            showMenu ? "bg-gray-200 rotate-45 delay-200" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          className={`abaolute h-0.5 transform transition-width duration-300 ease-in-out bg-gray-200 ${
            showMenu ? "bg-gray-200 w-0 opacity-50" : "w-7 opacity-100"
          }`}
        ></span>
        <span
          className={`absolute h-0.5 w-5 transform transition-all duration-300 ease-in-out bg-gray-200 ${
            showMenu
              ? "bg-gray-200 -rotate-45 delay-200 w-6"
              : "translate-y-1.5"
          }`}
        ></span>
      </div>
    </button>
  );
}

export default Hamburger;
