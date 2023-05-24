import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding: 10px;
  }
  
  
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-decoration: none;
  color: black;
`;

const Logo = styled.img`
  height: 50px;
  transform: scale(3);
  margin-top: 10px;
  margin-left: 35px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-decoration: none;
`;

const Icon = styled.img`
  width: 50px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: none;
  border-radius: 15px;
  cursor: pointer;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-image: url("/static/img/bgr.jpg");
  &:hover,
  &:focus {
    text-decoration: none;
  }

`;



const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  transform: scale(1.5);
  margin-top: 10px;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="/static/img/bgg.png" />
          <List>
            <ListItem>
              <Button><a href="#home">Home</a></Button>
            </ListItem>
            <ListItem>
              <Button><a href="#about">About</a></Button>
            </ListItem>
            <ListItem>
            <Button><a href="#projects">Projects</a></Button>
            </ListItem>
            <ListItem>
            <Button><a href="#contact">Contact</a></Button>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <a href="https://www.linkedin.com/in/jessica-iba-39b237227/" className="icon-button">
            <Icon src="/static/img/LiN.png" alt="LinkedIn Icon" />
          </a>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
