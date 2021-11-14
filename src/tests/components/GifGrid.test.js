import { shallow } from 'enzyme';
import React from 'react';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Tests for the component <GifGrid />', () => {
  const category = 'One Punch';

  test('should render correctly', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={ category }/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
    const gifs = [
      {
        title: 'Item 1',
        url: 'https://localhost:8080.com',
        id: '1'
      }, {
        title: 'Item 2',
        url: 'https://localhost:8080.com',
        id: '2'
      }, {
        title: 'Item 3',
        url: 'https://localhost:8080.com',
        id: '3'
      }
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={ category } />)
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
