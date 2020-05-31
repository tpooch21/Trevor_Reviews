import React from 'react';
import styled from 'styled-components';
import _ from 'underscore';
import Category from './Category.jsx';

const ScoreGrid = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 650px;
  height: 90px;
  margin-bottom: 8px;
`;

ScoreGrid.displayName = 'ScoreGrid';

const Categories = (props) => (
  <ScoreGrid>
    { _.map(props.ratings, (rating, name) => <Category key={Math.random() * 9999} name={name} rating={rating} />)}
  </ScoreGrid>
)

export default Categories;
