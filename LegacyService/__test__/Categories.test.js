import React from 'react';
import { mount } from 'enzyme';
import Categories from '../client/components/Categories/Categories.jsx';
import Category from '../client/components/Categories/category.jsx';

describe('Unit Test for Categories', () => {
  test('It should render Categories component', () => {
    const wrapper = mount(<Categories />);
    expect(wrapper.exists()).toBe(true);
  });

  test('It should render 6 category components', () => {
    const ratings = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
    };
    const wrapper = mount(<Categories ratings={ratings} />);
    const category = wrapper.find(Category);
    expect(category).toHaveLength(Object.keys(ratings).length);
  });
});
