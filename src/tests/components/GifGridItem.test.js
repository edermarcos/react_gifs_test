import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Tests for <GifGridItem />', () => {
  const title = 'This a title';
  const url = 'https://images.pexels.com/photos/9824398/pexels-photo-9824398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);

  test('Should display the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should show a paragraph with the value of the title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('Should display the image correctly', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  // Should have the class from animate.css library
  test('Should have the class from animate.css library', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true);
  });
});
