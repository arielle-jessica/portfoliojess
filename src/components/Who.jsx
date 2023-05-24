import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere";
import { useTexture } from '@react-three/drei';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
 transform: scale(1.2);
 position: left;
 margin: 50px;
 image-resolution: 900dpi;
 margin-top: 150px;

`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
    align-content: end;
    font-style: italic;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Times New Roman', Times, serif;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #1e201f;
  font-family: Arial, Helvetica, sans-serif;
  font-style: bold;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #e686bfb6;
  color: #0b0b0b;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 60px;
  cursor: pointer;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const Description = styled.h4`
  font-size: 18px;
  line-height: 1.5;
  color: #110303;
  margin-bottom: 20px;
  font-style: italic;
`;






const Who = () => {
  return (
    <Section id="about">
      <Container>
        <Left>
        <img src ="/static/img/whob.png"/>
        </Left>
        <Right>
          <Title>Technology Enthusiast</Title>
          <WhatWeDo>
            <img src=" " />
            <Subtitle>Who am I?</Subtitle>
          </WhatWeDo>
          <Description>
          I'm a Cameroonian student currently studying in Canada. With a passion for movies , technology , and food , I enjoy immersing myself in different cinematic experiences and discussing favorite films. In my free time, I love going out and exploring the outdoors, taking advantage of the opportunities Canada has to offer. Shopping is another interest of mine, as I enjoy discovering new trends and finding unique items. Overall, I'm an enthusiastic individual with a diverse range of interests, always seeking new experiences and opportunities for growth.
          </Description>
          <a href="https://drive.google.com/file/d/1w0D3Mzu9ODoweQBMKJc71Vb1PuSeQVy-/view?usp=sharing">
            <Button>Resume</Button>
          </a>
        </Right>
      </Container>
    </Section>
  );
};

export default Who