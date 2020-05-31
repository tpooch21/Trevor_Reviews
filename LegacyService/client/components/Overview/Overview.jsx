import React from 'react';
import styled from 'styled-components';
import ReviewsSummary from './ReviewsSummary.jsx';
import SearchReview from './SearchReview.jsx';

const ReviewSection = styled.section`
  border-bottom: 1px solid rgb(235, 235, 235);
  border-radius: 1px;
  height: 100px;
  width: 650px;
  margin-bottom: 8px;
`;

const ReviewHeader = styled.div`
  font-size: 24px;
  font-weight: 800;
  line-height: 1.25em;
  color: rgb(72, 72, 72);
  padding-top: 2px;
  padding-bottom: 2px;
`;

const StatusGrid = styled.section`
  display: grid;
  grid-template-columns: auto 33.33% ;
  grid-template-rows: 44px;
`;

const Overview = (props) => {
  const {totalAverage, totalReview, searchInputHandle,
          searchPhrase, clearField, searchReview} = props;
  return (
    <ReviewSection>
      <ReviewHeader> Reviews </ReviewHeader>
      <StatusGrid>
        <ReviewsSummary
          totalAverage={totalAverage}
          totalReview={totalReview}
        />
        <SearchReview
          searchInputHandle={searchInputHandle}
          searchPhrase={searchPhrase}
          clearField={clearField}
          searchReview={searchReview}
        />
      </StatusGrid>
    </ReviewSection>
  )
};

export default Overview;
