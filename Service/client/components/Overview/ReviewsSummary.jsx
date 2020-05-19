import React from 'react';
import styled from 'styled-components';

const TotalScores = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 26px;
  width: 55px;
`;

const Total = styled.div`
  font-size: 18px;
  font-weight: 800px;
  line-height: 1.44em;
`;

const StarImg = styled.div`
  display: block;
  will-change: tranform;
  height: 12px;
  width: 15px;
  background-size: 14px 12px;
  background-image: url('star.png');
  background-repeat: space no-repeat;
`;

const Separator = styled.span`
  height: 12px;
  border-right: 1px solid rgb(235, 235, 235);
`;

const ReviewBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 0 14px;
`;

const ReviewTotal = styled(Total)`
  width: 36px;
`;

const ReviewsSummary = (props) => (
  <TotalScores>

    <StarBox>
      <StarImg />
      <Total> {props.totalAverage} </Total>
    </StarBox>

    <Separator />

    <ReviewBox>
      <ReviewTotal> {props.totalReview}</ReviewTotal>
      <Total> reviews</Total>
    </ReviewBox>

  </TotalScores>
);


export default ReviewsSummary;
