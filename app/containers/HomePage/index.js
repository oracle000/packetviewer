import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import styled from 'styled-components';
import Header from 'components/Header';
import FrontPage from 'components/FrontPage';
import { makeSelectUsername } from 'containers/App/selectors';
import saga from './saga';
// import reducer from './reducers';

import { loadGames } from '../App/actions';

const Body = styled.div`
  position: absolute;
  top: 100px;
  left: 0px;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BodyImage = styled.div`
  background-image: url(https://i.imgur.com/oQt7hlx.jpeg);
  background-size: cover;
  height: 100vh;
`;

const PositionCont = styled.div`
  position: relative;
`;

const key = 'home';

export function HomePage() {
  // useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    getListofGames();
  }, []);

  return (
    <div>
      <PositionCont>
        <BodyImage />
        <Header />
        <Body>
          <FrontPage />
        </Body>
      </PositionCont>
    </div>
  );
}

function getListofGames() {}

const mapStateToProps = createStructuredSelector({
  gamesList: makeSelectUsername(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getListofGames: dispatch(loadGames()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
