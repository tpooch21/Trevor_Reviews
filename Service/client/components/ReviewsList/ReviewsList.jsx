import React from 'react';
import styled from 'styled-components';
import _ from 'underscore';
import Review from './Review.jsx';
import PageSelector from './PageSelector.jsx';

const ListContainer = styled.section`
  width: 650px;
`;

const ReviewsContainer = styled.section`
  display: flex;
  flex-flow: column;
  width: 650px;
`;

const ReviewsList = ({pageSelected, reviewList, pageCount, pageHandle}) => {
  return (
      <ListContainer id="ReviewList">
        <ReviewsContainer>
          {_.map(reviewList, (review) => <Review key={review.id} review={review} />)}
        </ReviewsContainer>

        <PageSelector
          pageHandle={pageHandle}
          pageCount={pageCount}
          pageSelected={pageSelected}
        />

      </ListContainer>
  )
};

export default ReviewsList;
