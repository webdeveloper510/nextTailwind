import { useState } from "react";
import Image from "next/image";
import buttonIcon from "../../../public/Vector.png";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [isOpen, Isopen] = useState(false);
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  const router = useRouter();
  return (
    <>
      <section className="header-bg">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between flex-wrap header-bg py-3 md:py-4 px-8">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <Link href="/">
                <Image
                  src={logo}
                  style={{ height: 40, width: 40 }}
                  alt="Picture of the author"
                />
              </Link>
            </div>
            <div className="block lg:hidden" onClick={() => Isopen(!isOpen)}>
              <button
                className="flex items-center px-3 py-2  rounded border-teal-400 hover:text-white hover:border-white"
                onClick={() => Isopen(false)}
              >
                <Image
                  src={buttonIcon}
                  alt="Picture of the author"
                  style={{ height: 24, width: 24 }}
                />
              </button>
            </div>

            <div
              className={
                isOpen
                  ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto block"
                  : "w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden"
              }
            >
              <div className="text-sm lg:flex-grow lg:flex justify-center">
                <Link
                  href="/merchants" className={router.pathname == "/merchants" ? "active block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" : "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"}
                >
                  Merchants
                </Link>
                <Link
                  href="/partners" className={router.pathname == "/partners" ? "active block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" : "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"}
                >
                  Partners
                </Link>
                <Link
                  href="/shopper" className={router.pathname == "/shopper" ? "active block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" : "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"}
                >
                  Shoppers
                </Link>
                <button
                  id="dropdownNavbarButton"
                  onClick={toggle}
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Company{" "}
                  <svg
                    className="w-4 h-4 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                
                  id="dropdownNavbar"
                  style={{
                    display: showMe?"block":"none"}}
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownNavbarButton"
                  >
                    <li>
                      <Link
                        href="/about-us"
                        className="block px-4 py-2"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="block px-4 py-2"
                      >
                        News & Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/career"
                        className="block px-4 py-2"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Link
                  href="#"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 getintouch"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
