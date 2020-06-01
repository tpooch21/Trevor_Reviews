import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchReview from '../client/components/Overview/SearchReview.jsx';
import App from '../client/components/App.jsx';


describe('Unit Tests', () => {
  describe('Render Tests', () => {
    test('It should render a form', () => {
      const wrapper = shallow(
        <SearchReview
          searchInputHandle={() => {}}
          clearField={() => {}}
          searchPhrase=''
        />
      );
      expect(wrapper.find('SearchForm')).toHaveLength(1);
    });
  });

  describe('Component Interaction Tests', () => {
    test('It should invoke correct method when a change event is occurred', () => {
      const mockSearchHandle = jest.fn();
      const wrapper = shallow(
        <SearchReview
          searchInputHandle={() => {}}
          clearField={() => {}}
          searchPhrase=''
        />
      );
      wrapper.instance().searchHandle = mockSearchHandle;
      wrapper.instance().forceUpdate();
      wrapper.find('SearchInput').simulate('change', { target: { name: 'search', value: 'test' } });
      expect(mockSearchHandle).toHaveBeenCalled();
    });

    test('It should correctly update App\'s state when a change event is occured', () => {
      const AppWrapper = mount(<App />);
      const SearchWrapper = shallow(
        <SearchReview
          searchInputHandle={(phrase) => {
            AppWrapper.instance().setState({ searchPhrase: phrase });
          }}
          clearField={() => {}}
          searchPhrase=''
        />
      );
      SearchWrapper.find('SearchInput').simulate('change', { target: { name: 'search', value: 'test' } });
      expect(AppWrapper.state('searchPhrase')).toEqual('test');
    });

    test('It should clear App\'s search state when delete button is clicked', () => {
      const AppWrapper = mount(<App/>);
      AppWrapper.instance().setState({ searchPhrase: 'abc' });
      const SearchWrapper = shallow(
        <SearchReview
          searchInputHandle={() => {}}
          clearField={() => {
            AppWrapper.instance().setState({ searchPhrase: '' });
          }}
          searchPhrase='abc'
        />
      );
      SearchWrapper.find('CancelIcon').simulate('click');
      expect(AppWrapper.state('searchPhrase')).toEqual('');
    });
  });
});
