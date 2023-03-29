import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("car");
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  async function fetchData(tag) {
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-blue-500 w-1/2 flex flex-col items-center rounded-lg border border-black gap-y-5 mt-[30px]">
      <h1 className="font-bold text-2xl underline text-center mt-[15px] uppercase">
        RANDOM {tag} GIF
      </h1>

      <img src={gif} width={450} alt="" />
      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        value={tag}
        onChange={(event) => setTag(event.target.value)}
      />
      <button
        className="bg-yellow-500 w-9/12 mb-[20px] text-lg py-2 rounded-lg"
        onClick={(ev) => fetchData(tag)}
      >
        Generate
      </button>
    </div>
  );
}
