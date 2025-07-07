import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "About Us",
      href: "/about"
    },
    {
      title: "Our Brands",
      subMenu: [
        {
          title: "Spandek",
          desc: "Description A",
          href: "/brands/spandek"
        },
        {
          title: "Tray",
          desc: "Description B",
          href: "/brands/tray"
        },
        {
          title: "Epoxy",
          desc: "Description B",
          href: ""
        },
      ],
      gridCols: 2
    },
    // {
    //   title: "Our Products",
    //   href: "/products",
    //   subMenu: [
    //     {
    //       title: "Louver Steel Panel",
    //       desc: "Spandek",
    //       href: "/brands/a"
    //     },
    //     {
    //       title: "Zinc Steel Panel",
    //       desc: "Spandek",
    //       href: "/brands/b"
    //     },
    //     {
    //       title: "Spandek Steel Panel",
    //       desc: "Spandek",
    //       href: "/brands/b"
    //     },
    //   ],
    //   gridCols: 2
    // },
    {
      title: "News",
      href: "#"
    },
    {
      title: "Contact Us",
      href: "/contact"
    },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-x-3 z-[999]">
            <Link
              to="/"
              className="flex items-center gap-1 -ml-2"
              onClick={closeMenu}
            >
              <span className="text-5xl flex font-bold items-center bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent hover:from-blue-800 hover:to-indigo-500 transition-all duration-300">DSI</span>
              <div className="flex flex-col text-base bg-gradient-to-r from-orange-700 to-orange-600 bg-clip-text text-transparent hover:from-orange-700 hover:to-orange-500 transition-all duration-300">
                <span>Metal</span>
                <span>Technology</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-5">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative group"
                >
                  <Link
                    to={item.href}
                    className="group relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors duration-300"
                  >
                    {item.title}
                    {item.subMenu && (
                      <div className="inline-block relative group">
                        <ChevronDown className="ml-2 inline-block w-3 h-3 text-gray-500 group-hover:text-blue-900 group-hover:rotate-180 transition-transform duration-300" />

                        <div className="absolute -left-24 top-full mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-lg z-50 w-64 p-2">
                          {item.subMenu.map((subItem) => (
                            <Link
                              to={subItem.href}
                              className="flex items-start gap-x-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200"
                            >
                              <div className="bg-white/5 p-2 rounded-md group-hover:bg-white duration-300 font-black text-blue-900">
                                DSI
                              </div>
                              <div className="flex flex-col items-start">
                                <h6 className="font-semibold">{subItem.title}</h6>
                                <p className="text-sm text-gray-400">{subItem.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <span
                      className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-900 to-indigo-600 transform origin-left transition-transform duration-300 ${
                        location.pathname === item.href
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>

                  {/* Sub-menu */}
                  {/* {item.subMenu && (
                    <div
                      className="sub-menu"
                    >
                      {
                        item.subMenu.map((subItem,i) => (
                          <div key={i} className="relative cursor-pointer">
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              className="flex items-center gap-x-4 group px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              <div className='bg-white/5 p-2 rounded-md group-hover:bg-white duration-300 font-black text-blue-900'>
                                DSI
                              </div>
                              <div className="flex flex-col items-start">
                                <h6 className='font-semibold'>{subItem.title}</h6>
                                <p className='text-sm text-gray-400'>{subItem.desc}</p>
                              </div>
                            </Link>
                          </div>
                        ))
                      }
                    </div>
                  )} */}
                </div>
              ))}
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-900 to-indigo-600 text-white rounded-full font-medium text-sm hover:from-blue-800 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-800/25"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-900 hover:bg-gray-100/50 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto max-h-screen overflow-y-auto"
            : "opacity-0 pointer-events-none max-h-0 overflow-y-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className={`block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors duration-300 ${
                location.pathname === item.href
                  ? "text-blue-900 bg-blue-50"
                  : ""
              }`}
              onClick={closeMenu}
            >
              {item.title}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-900 to-indigo-600 text-white rounded-lg font-medium text-base hover:from-blue-800 hover:to-indigo-500 transition-all duration-300 text-center"
            onClick={closeMenu}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
