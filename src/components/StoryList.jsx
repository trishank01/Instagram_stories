import React from "react";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { APIPATH} from "../utils/apiPath";

const StoryList = () => {
  const { data, error, loading } = useFetch(APIPATH.LIST);

  const navigate =  useNavigate()

  const handleClick = (id) => {
    navigate(APIPATH.GET_SINGLE_ITEM(id))
  }

  return (
    <div>
      <div className="flex flex-col text-center gap-4 w-[400px] h-screen border-2 border-black px-2 rounded-md object-cover">
        <h2 className="text-2xl text-red-300">Instagram Stories</h2>
        {error && <div className="text-red-700">Failed to call Api</div>}

        {loading ? (
          <Loader />
        ) : (
          <div className="flex overflow-x-hidden gap-5 mt-3">
            {data?.map((item) => (
              <div className="" key={item.id}>
                <img
                  className="container rounded-full border-6 border-red-300 "
                  src={item?.download_url}
                  alt=""
                  onClick={() => handleClick(item.id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryList;
