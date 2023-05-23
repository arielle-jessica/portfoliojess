import React, { useState } from 'react';
import styled from "styled-components";
import Frontend from "./Frontend";
import ProductDesign from "./ProductDesign";
// import Languages from './Languages';

const data = [
  "Frontend",
  "ProductDesign",
  // "Languages",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;



const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  font-size: large;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  word-spacing: 5%;
  line-height: 1.5;
  margin-top: 150px;
  
`;

const Left = styled.div`
  flex: 1;
 transform: scale(1);
 position: left;
 margin: 50px;
 image-resolution: 900dpi;

`;
const h1= styled.div`
  
`

const Works = () => {
  const [work, setWork] = useState("Frontend");
  return (
    <Section id ="projects">
      <Container>
        <Left>
        <img src ="./src/assets/restauu.png"/>
       <h1> African Restaurant Website ( Template )</h1>
        </Left>
        <Right>
        I am currently undertaking a project to develop a comprehensive and functional website for an African restaurant, employing technologies 
          <li>Front-end Development : React.js and Vite</li> 
          <li>Styling : Tailwind CSS</li>  
          <li>Back-end Development : Node.js</li>  
          <li>Database Integration : MySql / Oracle db</li> 
           
        </Right>
      </Container>
    </Section>
  );
};

export default Works;