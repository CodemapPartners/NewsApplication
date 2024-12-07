import React, { useState } from "react";

export default function NavBar({ setCategory, setSearchQuery }) {
  const [searchQuery, setSearchQueryLocal] = useState("");

  function updateCategory(e) {
    setCategory(e.target.textContent.toLowerCase());
  }

  // Handle search input change
  function handleSearchChange(e) {
    setSearchQueryLocal(e.target.value);
    setSearchQuery(e.target.value); // Pass the search query to the parent component
  }

  // Handle form submit
  function handleSearchSubmit(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      // You can implement search functionality here if needed
    }
  }

  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-0">
        <div className="container mx-auto flex flex-wrap p-5 gap-x-4 gap-y-6 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl cursor-pointer">NEWSFORYOU</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center gap-y-4">
            <a
              className="mr-5 hover:text-white cursor-pointer"
              onClick={updateCategory}
            >
              Politics
            </a>
            <a
              className="mr-5 hover:text-white cursor-pointer"
              onClick={updateCategory}
            >
              Entertainment
            </a>
            <a
              className="mr-5 hover:text-white cursor-pointer"
              onClick={updateCategory}
            >
              Health
            </a>
            <a
              className="mr-5 hover:text-white cursor-pointer"
              onClick={updateCategory}
            >
              Science
            </a>
            <a
              className="mr-5 hover:text-white cursor-pointer"
              onClick={updateCategory}
            >
              Sports
            </a>
            <a
              className="mr-5 hover:text-white cursor-pointer"
              onClick={updateCategory}
            >
              Technology
            </a>
          </nav>

          {/* Search Box */}
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search news..."
              className="px-4 py-2 text-gray-800 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md"
            >
              Search
            </button>
          </form>
        </div>
      </header>
    </>
  );
}
