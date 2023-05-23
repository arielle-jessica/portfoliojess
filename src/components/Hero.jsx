import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-style: italic;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #ce6dce;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #1f1e1e;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin-left: 10px;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
  margin-left: 200px;
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section id="home">
      <Navbar />
      <Container>
        <Left>
          <Title>Arielle Jessica </Title>
          <WhatWeDo>
            <img src="" />
            <Subtitle>2nd Year Computing Systems and Engineering Technology Student at CNA</Subtitle>
          </WhatWeDo>
          <Desc>
          Passionate Computing Systems and Engineering Technology Student | Hardware, Web Development, and Cybersecurity Enthusiast | Continuous Learner

Dedicated and ambitious Computing Systems and Engineering Technology student at CNA with a strong passion for technology,hardware Additionally, I have been self-teaching myself cutting-edge web development technologies such as React.js, Vite, Tailwind.css, and Node.js as well as knowledge in numerous programming languages including :SQL ,Python , C/C++ , Java.
          </Desc>
          {/* <Button>Projects</Button> */}
        </Left>
        <Right>
        {/* <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Suspense fallback={null}>
        <Sphere args={[1, 100, 200]} scale={2.4} rotation={[0, 0.01, 0]}>
          <meshStandardMaterial color="#061227" attach="material" />
        </Sphere>
      </Suspense>
    </Canvas> */}
          <Img src="./src/public/img/jess.jpeg"/>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;