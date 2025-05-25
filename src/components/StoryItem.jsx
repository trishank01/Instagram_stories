import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

const StoryItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [timer, setTimer] = useState(0);
  const [storyId, setStoryId] = useState(+id);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null); 

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setStoryId((prev) => prev + 1);
    }, 5000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetInterval = () => {
    stopInterval();

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(() => {
      startInterval();
    }, 5000); 
  };

  useEffect(() => {
    startInterval();

    return () => {
      stopInterval();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const backToHome = () => {
    navigate("/");
  };

  const leftClick = () => {
    setStoryId((prev) => prev + 1);
    resetInterval();
  };

  const rightClick = () => {
    setStoryId((prev) => Math.max(1, prev - 1)); 
    resetInterval();
  };

  // Timer for loader
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimer(1);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div className="flex flex-col text-center gap-4 w-[400px] h-screen px-2 rounded-md">
        <h2 className="text-2xl text-red-300">Instagram Stories</h2>
        <button
          onClick={backToHome}
          className="text-blue-500 cursor-pointer"
        >
          Home
        </button>

        <div className="relative flex flex-col items-center justify-between w-full h-[500px]">
          {timer === 0 ? (
            <Loader />
          ) : (
            <img
              className="w-full rounded-md shadow-2xl transition-all duration-500"
              src={`https://picsum.photos/id/${storyId}/300/500`}
              alt=""
            />
          )}

          {/* Left Clickable Half */}
          <div
            className="absolute top-0 left-0 w-1/2 h-full z-10 cursor-pointer"
            onClick={leftClick}
          ></div>

          {/* Right Clickable Half */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full z-10 cursor-pointer"
            onClick={rightClick}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StoryItem;
