import React from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  // const [images, setImages] = useStsate([]);
  const { data: images, loading } = useFetchGifs(category);

  // useEffect(() => {
  //   getGifs(category).then((imgs) => setImages(imgs));
  // }, [category]);

  //   getGifs();

  return (
    <div>
      <h3 card animate__animated animate__fadeIn>
        {category}
      </h3>

      {loading && (
        <p className="card animate__animated animate__flash">Loading...</p>
      )}

      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </div>
  );
};

export default GifGrid;
