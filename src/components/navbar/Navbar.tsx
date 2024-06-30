import { useState } from "react";
import {
  Bars3Icon,
  HomeIcon,
  Bars4Icon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <h1>Renoon Same</h1>

              {/* Search */}
              <div className="flex lg:ml-10">
                <div className="w-96">
                  <div className="relative rounded-md">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="black"
                        className="h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      className="bg-white-400 placeholder block w-full rounded-full border-0 py-1.5 pl-10 text-black outline placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-4">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <HomeIcon
                      className="text-black-400 group-hover:text-black-500 h-8 w-8 flex-shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <PlusCircleIcon
                      className="text-black-400 group-hover:text-black-500 h-8 w-8 flex-shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <BellIcon
                      className="text-black-400 group-hover:text-black-500 h-8 w-8 flex-shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ChatBubbleOvalLeftEllipsisIcon
                      className="text-black-400 group-hover:text-black-500 h-8 w-8 flex-shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-800">
                    Log in
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-800">
                    Sign up
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <Bars4Icon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
       
     
    </div>
  );
}
