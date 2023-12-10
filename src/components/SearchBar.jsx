import React, { useRef } from "react";

function SearchBar({ searchMovie, setSearchMovie, fetchMovieData }) {
  const ref = useRef("");

  const clearData = () => {
    setSearchMovie("");
    fetchMovieData([]);
    ref.current.focus();
  };
  return (
    <>
      <div className="main flex justify-center pt-10">
        <input
          type="text"
          ref={ref}
          placeholder="Search Movie"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          className="bg-gray-500 placeholder-gray-400 px-2 py-2 outline-none border-2 rounded-l-lg border-gray-500 text-black
          "
        />

        <button
          onClick={fetchMovieData}
          className="bg-[#0c0f2c] shadow-md  text-white px-2 py-2 rounded-r-lg border-b-2 border"
        >
          Search
        </button>
        <button
          onClick={clearData}
          className="bg-[#0c0f2c] shadow-md  text-white ml-2 px-2 py-2 rounded-r-lg rounded-l-lg border-b-2 border"
        >
          Clear
        </button>
      </div>
    </>
  );
}

export default SearchBar;
