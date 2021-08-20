import React from 'react';
import styled from 'styled-components';

import P from 'components/Paragraph';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const styles = {
  buttonStyle: {
    marginLeft: '30px',
  },
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 700px;
  border-radius: 10px;
  background-color: rgba(245, 245, 245, 0.8);
  flex-direction: column;
`;
const MessageCont = styled.div`
  display: flex;
  align-items: center;
`;

const Paragraph = styled(P)`
  margin-right: 15px;
  color: #333;
`;
const BodyCont = styled(MessageCont)`
  margin-top: 20px;
`;

function FrontPage() {
  const [age, setAge] = React.useState('0');
  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <MessageCont>
        <Paragraph>Select from existing game:</Paragraph>

        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={0}>None</MenuItem>
          <MenuItem value={10}>Alice Cooper tome of madness</MenuItem>
          <MenuItem value={20}>Odin and the whatsoever</MenuItem>
          <MenuItem value={30}>The I dont know the Title Game</MenuItem>
        </Select>
        <Button
          variant="contained"
          color="primary"
          style={styles.buttonStyle}
          disabled
        >
          Start
        </Button>
      </MessageCont>
      <BodyCont>
        <Paragraph>Add new Game:</Paragraph>
        <Button variant="contained" color="primary">
          Start
        </Button>
      </BodyCont>
    </Container>
  );
}

export default FrontPage;
