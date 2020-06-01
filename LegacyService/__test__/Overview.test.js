import React from 'react';
import Overview from '../client/components/Overview/Overview.jsx';
import SearchReview from '../client/components/Overview/SearchReview.jsx';
import { shallow, mount } from 'enzyme';

test('It should render Overview component', () => {
  const wrapper = shallow(
    <Overview
      searchInputHandle={() => {}}
      clearField={() => {}}
      searchPhrase=''
    />
  );
  expect(wrapper.exists()).toEqual(true);
});
