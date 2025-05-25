import React, { useRef } from "react";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { APIPATH } from "../utils/apiPath";

const StoryList = () => {
  const { data, error, loading } = useFetch(APIPATH.LIST);
  const scrollRef = useRef();

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(APIPATH.GET_SINGLE_ITEM(id));
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 200;
    } else {
      scrollRef.current.scrollLeft += 200;
    }
  };

  return (
   <div className="w-full h-screen flex items-center justify-center bg-white">
  <div className="flex flex-col items-center text-center gap-4  w-[400px] h-full px-3 pt-4 relative">
    <h2 className="text-xl font-semibold text-red-400">Instagram Stories</h2>

    {error && <div className="text-red-700">Failed to call API</div>}

    {loading ? (
      <Loader />
    ) : (
      <div className="relative w-full">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1 rounded-full shadow"
        >
          ⬅️
        </button>

       
        <div
          className="flex overflow-x-hidden whitespace-nowrap gap-4 py-2 px-1 scroll-smooth "
          ref={scrollRef}
        >
          {data?.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-20 h-20 rounded-full border-4 border-red-400 hover:scale-105 transition-transform duration-300 ease-in-out"
              onClick={() => handleClick(item.id)}
            >
              <img
                className="w-full h-full object-cover rounded-full"
                src={item?.download_url}
                alt={`Story ${item.id}`}
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1 rounded-full shadow"
        >
          ➡️
        </button>
      </div>
    )}
  </div>
</div>

  );
};

export default StoryList;
