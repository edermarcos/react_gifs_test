import React from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      return;
    }

    /*
     * Se recibe como parametro el setter desde el padre
     * Por default, entites es el parametro que retorna y se crea un nuevo arreglo
     * */
    setCategory(entities => [inputValue, ...entities]);
    setInputValue('');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <p>{ inputValue }</p>
      <input type="text"
             value={ inputValue }
             onChange={ (event) => setInputValue(event.target.value) }/>
    </form>
  );
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
};
