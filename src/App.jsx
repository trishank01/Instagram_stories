import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  
  const {data} = useFetch("https://picsum.photos/v2/list")


  return (
    <>
      <h2 className="text-blue">hello</h2>
      {data?.map((item) => (
        <div key={item.id}>
          <img className="container" src={item?.download_url} alt="" />
        </div>
      ))}
    </>
  );
}

export default App;
