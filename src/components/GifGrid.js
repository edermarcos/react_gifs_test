import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category, deleteCategoryById }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <div>
      <div className="header">
        <h3>Category: { category }</h3>

        <div>
          <button onClick={ () => deleteCategoryById(category) }>Delete</button>
        </div>
      </div>

      { loading && <p>Loading...</p> }

      <div className="card-grid">
        {
          images.map(entity => (
            <GifGridItem key={ entity.id }
                         { ...entity }
            />
          ))
        }
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
  deleteCategoryById: PropTypes.func,
};
