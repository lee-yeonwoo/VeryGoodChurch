import styled from "styled-components";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import TitleBox from '../components/TitleBox';
import React from "react";
import busImg from "../busImg.png";

import Kakao from "../components/Map"


const Directions = () => {
  
  return (
    <>
    <AppBar />
      <WrapBox>
      <TitleBox miniTitle = "찾아오시는 길"></TitleBox>
      <ContentBoxDiv>
      <Kakao/>
      </ContentBoxDiv>
      <ContentBoxDiv>
        <BusImg src = {busImg} alt="busInfo"/>
      </ContentBoxDiv>
      <Footer />
      </WrapBox>
    </>
  );
};

const WrapBox = styled.div`
  width: 100%;
`;
const ContentBoxDiv = styled.div`
    padding: 3%;
    display: flex;
    justify-content: space-around;
`;
const BusImg = styled.img`
  width: 100%;
`



export default Directions;