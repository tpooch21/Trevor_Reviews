import React from 'react';
import { mount } from 'enzyme';
import App from '../client/components/App.jsx';

describe('Render Test', () => {
  test('It should render App', () => {
    const wrapper = mount(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  test('It should invoke getAllReview when componentDidMount', () => {
    const wrapper = mount(<App />);
    const mock = jest.fn();
    wrapper.instance().getAllReviews = mock;
    wrapper.instance().forceUpdate();
    wrapper.instance().componentDidMount();
    expect(mock).toHaveBeenCalled();
  });
});
