import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import FrontPage from 'components/FrontPage';

// const Main = styled.div`
//   text-align: center;
// `;

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

export default function HomePage() {
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
