import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StoryItem = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [storyId, setStoryId] = useState(+id);

  const backToHome = () => {
    navigate("/");
  };

  const leftClick = () => {
    setStoryId(storyId + 1);
  };

  const rightClick = () => {
    setStoryId(storyId - 1);
  };

  return (
    <div>
      <div className="flex flex-col text-center gap-4 w-[400px] h-screen px-2 rounded-md">
        <h2 className="text-2xl text-red-300">Instagram Stories</h2>
        <button
          onClick={() => backToHome()}
          className="text-blue-500 cursor-pointer"
        >
          Home
        </button>

        <div className="relative flex flex-col items-center justify-between w-full h-[500px] ">
          <img
            className="w-full rounded-md shadow-2xl"
            src={`https://picsum.photos/id/${storyId}/300/500`}
            alt=""
          />
          {/* Left clickable half */}
          <div
            className="absolute top-0 left-0 w-1/2 h-full z-10 cursor-pointer"
            onClick={() => leftClick()}
          ></div>

          {/* Right clickable half */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full z-10 cursor-pointer"
            onClick={() => rightClick()}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StoryItem;
