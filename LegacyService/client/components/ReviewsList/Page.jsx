import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-scroll'

const Pg = styled.div`
  border: 1px solid ${(props) => (props.pageSelected === props.Value) ? 'rgb(41, 132, 137)'  : 'white' };
  display: flex;
  width: 32px;
  height: 32px;
  color: ${(props) => (props.pageSelected === props.Value) ? 'white' : 'rgb(41, 132, 137)'};
  background-color: ${(props) => (props.pageSelected === props.Value) ? 'rgb(41, 132, 137)' : 'none'};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin: 0px 7px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Page = ({pageHandle, pageSelected, value}) => {

  return (
    <Link to='ReviewList' smooth={true}>
      <Pg onClick={ () => pageHandle(value)} pageSelected={pageSelected} Value={value}>
        {value}
      </Pg>
    </Link>
  )
}

export default Page;
