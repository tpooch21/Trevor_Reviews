import React from 'react';
import styled from 'styled-components';
import Page from './Page.jsx';

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const PageBreak = styled.span`
  display: flex;
  width: 32px;
  height: 32px;
  color: rgb(41, 132, 137);
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;

const SelectButton = styled.div`
  display: flex;
  border: 1px solid rgb(41, 132, 137);
  border-radius: 50%;
  margin: 0px 5px;
  color: rgb(41, 132, 137);
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  &: hover {
    cursor: pointer;
  }
`;

class PageSelector extends React.Component {
  constructor(props){
    super(props)

    this.nextPageClickHandle = this.nextPageClickHandle.bind(this);
    this.previousPageClickHandle = this.previousPageClickHandle.bind(this);
  }

  nextPageClickHandle() {
    const page = this.props.pageSelected + 1;
    this.props.pageHandle(page)
  }

  previousPageClickHandle() {
    const page = this.props.pageSelected - 1;
    this.props.pageHandle(page)
  }

  render() {
    const {pageCount, pageSelected} = this.props;
    return (
      <Pagination>

        {(pageSelected !== 1) &&
          <SelectButton onClick={this.previousPageClickHandle}>&lsaquo;</SelectButton>}

        <Page pageHandle={this.props.pageHandle} pageSelected={pageSelected} value={1} />

        {(pageSelected >= 5) && <PageBreak>...</PageBreak>}

        {(pageCount>2) &&
          ((pageSelected === pageCount && pageCount !== 3) ?
            <Page pageHandle={this.props.pageHandle} pageSelected={pageSelected} value={pageCount-2} />  :
              (pageSelected >= 5) ?
                <Page pageHandle={this.props.pageHandle} pageSelected={pageSelected} value={pageSelected-1}/> :
                  <Page pageHandle={this.props.pageHandle} pageSelected={pageSelected} value={2} />)}

        {(pageCount>3) &&
          ((pageSelected === pageCount) ?
            <Page pageHandle={this.props.pageHandle} pageSelected={pageSelected} value={pageCount-1} /> :
              (pageSelected >= 5) ?
                <Page pageHandle={this.props.pageHandle} pageSelected={pageSelected} value={pageSelected} /> :
                  <Page pageHandle={this.props.pageHandle} pageSelected={pageSelected} value={3} /> )}

        {(pageCount>4) &&
          ((pageSelected >= pageCount - 1) ?
            null : (pageSelected >= 5) ?
              <Page pageHandle={this.props.pageHandle} pageSelected={pageSelected} value={pageSelected+1} /> :
                (pageSelected >= 3) ?
                  <Page pageHandle={this.props.pageHandle} pageSelected={pageSelected} value={4} /> : null )}

        {(pageCount>5) &&
          ((pageCount > 4 && pageSelected === 4) &&
            <Page pageHandle={this.props.pageHandle} pageSelected={pageSelected} value={5} /> )}

        {(pageSelected <= pageCount - 4) && <PageBreak>...</PageBreak>}

        {(pageSelected === pageCount - 3 && pageCount > 4) ?
          <Page pageHandle={this.props.pageHandle} pageSelected={pageSelected} value={pageCount-1} /> :
            (pageSelected === 4 && pageCount === 5) && <Page pageHandle={this.props.pageHandle} pageSelected={pageSelected} value={4} /> }

        {(pageCount!==1) && <Page pageHandle={this.props.pageHandle} pageSelected={pageSelected} value={pageCount} />}

        {(pageSelected < pageCount) &&
          <SelectButton onClick={this.nextPageClickHandle}>&rsaquo;</SelectButton>}

      </Pagination>
    )
  }
};

export default PageSelector;
