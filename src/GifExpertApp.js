import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategory] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  // const handleAdd = () => {
  //   setCategory(['HunterXHunter', ...categories]);
  // };

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategory={ setCategory }/>
      <hr/>

      <ul>
        {
          categories.map((category) => {
            return <li key={ category }>{ category }</li>;
          })
        }
      </ul>
    </>
  );
};
