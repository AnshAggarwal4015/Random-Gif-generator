import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {
  const [gif, setGif] = useState("");
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  async function fetchData() {
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-green-500 w-1/2 flex flex-col items-center rounded-lg border border-black gap-y-5 mt-[30px]">
      <h1 className="font-bold text-2xl underline text-center mt-[15px]">
        A RANDOM GIF
      </h1>

      <img src={gif} width={450} alt="" />

      <button
        className="bg-yellow-500 w-9/12 mb-[20px] text-lg py-2 rounded-lg"
        onClick={() => fetchData()}
      >
        Generate
      </button>
    </div>
  );
}
