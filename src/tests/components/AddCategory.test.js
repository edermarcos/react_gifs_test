import React from 'react';
import { shallow } from 'enzyme';

import { AddCategory } from '../../components/AddCategory';

describe('Tests for <AddCategory />', () => {
  const setCategory = () => {
    console.log('Hola');
  };
  const wrapper = shallow(<AddCategory setCategory={ setCategory }/>);

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja del texto', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Hola' } });
  })
});
