import React from 'react';
import styled from 'styled-components';

const Packet = styled.p`
  font-family: inherit;
  margin: 0;
  font-size: 30px;
  color: whitesmoke;
`;
const Viewer = styled.p`
  font-family: inherit;
  margin: 0 0 0 5px;
  font-size: 20px;
  color: #e74c3c;
`;
const Version = styled.p`
  font-family: inherit;
  margin: 0;
  margin-top: -10px;
  padding: 0 0 20px 31px;
  color: whitesmoke;
`;

const HeaderCont = styled.div`
  background-color: rgba(245, 245, 245, 0.1);
  font-family: 'Roboto', sans-serif !important;
  font-size: 12px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
`;
const Container = styled.div`
  display: flex;
  align-items: baseline;
  padding: 20px 0 0 30px;
`;

function Header() {
  return (
    <HeaderCont>
      <Container>
        <Packet>Packet</Packet>
        <Viewer>Viewer</Viewer>
      </Container>
      <Version>v1.0</Version>
    </HeaderCont>
  );
}

export default Header;
