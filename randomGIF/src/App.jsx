import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [gif, setGif] = useState("");

  const fetchData = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/random?api_key=LqS7LLd7SvHcaVJG8tCHJdN0O81znKHN";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data.images.downsized_medium.url);
    setGif(data.data.images.downsized_medium.url);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (e) => {
    fetchData();
  };

  return (
    <>
      <h1>Random GIF Generator</h1>
      <div className="card">
        <img src={gif} alt="gif" width="420px" />
        <button className="generate-btn" onClick={handleClick}>
          Generate
        </button>
      </div>
    </>
  );
}

export default App;
