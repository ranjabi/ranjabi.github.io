import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <header className="absolute w-full z-10 flex items-center bg-transparent">
      <div className="container relative flex items-center justify-between">
        <div className="px-4">
          <a
            href="#"
            className="block py-6 text-base font-semibold text-secondary"
          >
            Fikri Ranjabi
          </a>
        </div>
        <div className="flex items-center justify-between">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            className={`absolute right-4 block lg:hidden ${click ? 'hamburger-active' : ''}`}
            onClick={() => {setClick(!click)}}
          >
            <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
          </button>

          <nav
              id="nav-menu"
              className={`absolute right-4 ${click ? 'visible' : 'hidden'} top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent `}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a href="#home" className="mx-8 flex py-2 text-base text-secondary lg:text-primary group-hover:text-secondary lg:group-hover:text-primary">Home</a>
                </li>
                <li className="group">
                  <a href="#portfolio" className="mx-8 flex py-2 text-base text-secondary lg:text-primary group-hover:text-secondary  lg:group-hover:text-primary">Projects</a>
                </li>
                <li className="group">
                  <a href="#contact" className="mx-8 flex py-2 text-base text-secondary lg:text-primary group-hover:text-secondary lg:group-hover:text-primary">Contact</a>
                </li>
              </ul>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
