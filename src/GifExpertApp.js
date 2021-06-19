import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  const handleAdd = () => {
    // setCategories(["Hunter X Hunter", ...categories]);
    setCategories((cats) => ["Hunter X Hunter", ...cats]);
  };

  return (
    <div>
      <h2>Gif-Expert-App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </div>
  );
};

export default GifExpertApp;
