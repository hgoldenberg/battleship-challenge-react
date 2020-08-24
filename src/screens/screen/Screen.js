import React from 'react';
//import background from '../../assets/background.png';
import { Container, Header, Content } from './styles';

const Screen = (props) => {
  return (
    <Container>
      <Header>
        <p>
            Let´s play Battleship!!
        </p>
      </Header>
      <Content >
        {props.content}
      </Content>
    </Container>
  );
}

export default Screen; 