import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StoryList from "./components/StoryList";
import StoryItem from "./components/StoryItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full flex justify-center">
           <Routes>

            <Route path="/" element={ <StoryList />}/>
            <Route path="/id/:id/300/500" element={   <StoryItem/>}/>

           </Routes>
        
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
