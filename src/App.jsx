
import React from 'react';
import styled from 'styled-components';
import Contact from './components/Contact';
import Who from './components/Who';
import Hero from './components/Hero';
import Works from './components/Works';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';




const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;



const Container = styled.div`
margin: 0;
padding: 0;
height: 100vh;
box-sizing: border-box;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: black;
width: 100%;
min-height: 100vh;
background-image: url("./src/assets/bgr.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: contain;
 
        -webkit-animation: slidein 100s;
        animation: slidein 100s;

        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;

        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;

        -webkit-animation-direction: alternate;
        animation-direction: alternate;              

@-webkit-keyframes slidein {
from {background-position: top; background-size:3000px; }
to {background-position: -100px 0px;background-size:2750px;}
}

@keyframes slidein {
from {background-position: top;background-size:3000px; }
to {background-position: -100px 0px;background-size:2750px;}

}

 
  &::-webkit-scrollbar{
    display:none ;
   }

`;
const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <div>
     
      <> 
<GlobalStyle/>

    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
    </>
    </div>
  );
};


export default App;