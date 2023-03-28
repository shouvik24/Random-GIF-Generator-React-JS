import axios from "axios";
import { useState, useEffect } from "react";

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  async function fetchData(tag) {
    setLoading(true);

    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    // console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }

  //   function changeHandler(event) {
  //     setTag(event.target.value);
  //   }
  useEffect(() => {
    fetchData();
  });

  return { gif, loading, fetchData };
};

export default useGif;
