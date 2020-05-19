import React from 'react';
import styled from 'styled-components'

const ResultGrid = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  align-items: center;
  border-bottom: 1px solid rgb(235, 235, 235);
  padding: 10px 0 18px 0;
  font-size: 14px;
`;

const ReturnButton = styled.button`
  display: flex;
  border: none;
  outline: none;
  justify-content: flex-end;
  color: rgb(41, 132, 137);
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  font-size: 14px;
`;

const SearchResult = (props) => {

  return (
    <ResultGrid>
      {(props.totalReview === 0) ?
        <span> None of our guests have mentioned "{props.mention}"</span> :
        <span> {props.totalReview} Guests have mentioned "{props.mention}" </span>
      }
      <ReturnButton onClick={props.backToAllReviews}>Back to All Reviews</ReturnButton>
    </ResultGrid>
  )
}

export default SearchResult;
