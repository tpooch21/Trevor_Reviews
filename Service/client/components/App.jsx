import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Overview from './Overview/Overview.jsx';
import Categories from './Categories/Categories.jsx';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import SearchResult from './Overview/SearchResult.jsx';

const StyledDiv = styled.div`
  width: 650px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchPhrase: '',
      reviewList: [],
      ratings: [],
      totalAverage: '',
      totalReview: '',
      pageSelected: 1,
      currentPage: '',
      pageCount: 1,
      displaySearchResult: false,
      noResult: false,
      mention:'',
      originalList: [],
    };

    this.searchInputHandle = this.searchInputHandle.bind(this);
    this.clearField = this.clearField.bind(this);
    this.getAllReviews = this.getAllReviews.bind(this);
    this.pageHandle = this.pageHandle.bind(this);
    this.searchReview = this.searchReview.bind(this);
    this.backToAllReviews = this.backToAllReviews.bind(this);
  }

  searchInputHandle(phrase) {
    this.setState({ searchPhrase: phrase });
  }

  clearField() {
    this.setState({ searchPhrase: '' });
  }

  getAllReviews() {
    axios.get('/rooms/2/reviews')
      .then(({ data }) => {
        console.log(data);
        const {pageCount, ratings, totalAverage, reviewsCount, pages} = data;
        this.setState({
          originalList: data,
          reviewList: data,
          ratings,
          totalAverage,
          totalReview: reviewsCount,
          currentPage: pages[0].reviews,
          pageCount,
        });
      })
      .catch((error) => console.log(error));
  }

  searchReview(event) {
    event.preventDefault();
    const phrase = this.state.searchPhrase;
    axios.get(`/rooms/2/reviews/${phrase}`)
      .then(({data}) => {
        console.log(data)
        const {pageCount, pages, reviewsCount} = data;
        if (data.reviewsCount === 0) {
          this.setState({
            noResult: true,
            displaySearchResult: true,
            mention: phrase,
            totalReview: 0,
          })
        } else {
          this.setState({
            reviewList: data,
            totalReview: reviewsCount,
            currentPage: pages[0].reviews,
            pageCount,
            pageSelected: 1,
            displaySearchResult: true,
            mention: phrase,
            noResult: false,
          })
        }
        this.clearField()
      })
      .catch((error) => console.log(error))
  }

  backToAllReviews() {
    const {pageCount, ratings, totalAverage, reviewsCount, pages} = this.state.originalList;
    const originalList = this.state.originalList;
    this.setState({
      displaySearchResult: false,
      reviewList: originalList,
      ratings,
      totalAverage,
      totalReview: reviewsCount,
      currentPage: pages[0].reviews,
      pageSelected: 1,
      pageCount,
      noResult: false,
    })
  }

  pageHandle(num) {
    const page = this.state.reviewList.pages[num-1].reviews
    console.log(num);
    this.setState({
      currentPage: page,
      pageSelected: num,
    })
  }

  componentDidMount() {
    this.getAllReviews();
  }

  render() {
    const {totalAverage, totalReview, pageSelected, searchPhrase, ratings, noResult,
       reviewList, currentPage, pageCount, displaySearchResult, mention} = this.state;
    const originalCount = this.state.originalList.reviewsCount;
    const originalAverage = this.state.originalList.totalAverage;
    return (
      <StyledDiv>
        <Overview
          totalAverage={originalAverage}
          totalReview={originalCount}
          searchInputHandle={this.searchInputHandle}
          searchPhrase={searchPhrase}
          clearField={this.clearField}
          searchReview={this.searchReview}
          pageSelected={pageSelected}
        />

        {(displaySearchResult === false) &&
          <Categories ratings={ratings} />
        }

        {(displaySearchResult === true) &&
          <SearchResult
            backToAllReviews={this.backToAllReviews}
            mention={mention}
            totalReview={totalReview}
          />
        }

        {(!noResult) &&
          <ReviewsList
            pageSelected={pageSelected}
            pageHandle={this.pageHandle}
            pageCount={pageCount}
            reviewList={currentPage}
          />
        }
      </StyledDiv>
    );
  }
}
export default App;
