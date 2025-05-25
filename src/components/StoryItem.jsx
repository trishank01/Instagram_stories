
import { useParams } from "react-router-dom";


const StoryItem = () => {
  const { id } = useParams();


  return (
    <div>
      <div className="flex flex-col text-center gap-4 w-[400px] h-screen border-2 border-black px-2 rounded-md">
        <h2 className="text-2xl text-red-300">Instagram Stories</h2>
   
          <div className="flex flex-col items-center justify-between ">
            <img className="w-fit rounded-md shadow-2xl" src={`https://picsum.photos/id/${id}/300/500`} alt="" />
          </div>
   
      </div>
    </div>
  );
};

export default StoryItem;
