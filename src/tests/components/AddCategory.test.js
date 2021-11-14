import React from 'react';
import { shallow } from 'enzyme';

import { AddCategory } from '../../components/AddCategory';

describe('Tests for <AddCategory />', () => {
  const setCategory = jest.fn();
  let wrapper;

  beforeEach(() => {
    /*
     * Limpia un mock o simulacion de algun evento
     * */
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategory={ setCategory }/>);
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja del texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';

    /*
     * Simula el evento cuando se hace el onChange
     * Event es para simular el event.target.value del html
     * */
    const event = { target: { value } };
    input.simulate('change', event);
    const p = wrapper.find('p').text().trim();
    expect(p).toBe(value);
  });

  test('should not sent the form with the submit', () => {
    /*
     * Find the form an simulate the submit event
     * */
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    /*
     * Evalua que la funcion no deberia ser llamada
     * */
    expect(setCategory).not.toHaveBeenCalled();
  });

  test('Debe de llamar a setCategories y limpiar el value', () => {
    const value = 'Hola mundo';

    /*
     * 1.- Simular el input change
     * Event es para simular el event.target.value del html
     * */
    const event = { target: { value } };
    wrapper.find('input').simulate('change', event);

    /*
     * Simulacion del evento submit
     * */
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategory).toHaveBeenCalled();
    // expect(setCategory).toHaveBeenCalledTimes(1);
    expect(setCategory).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
