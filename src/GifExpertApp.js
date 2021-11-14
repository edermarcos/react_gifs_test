import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategory] = useState(['xmen']);

  const deleteCategoryById = (category) => {
    setCategory([...categories.filter((cat) => cat !== category)]);
  };

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategory={ setCategory }/>
      <hr/>

      {
        categories.map((category) => (
          <GifGrid key={ category }
                   category={ category }
                   deleteCategoryById={ deleteCategoryById }
          />
        ))
      }
    </>
  );
};
