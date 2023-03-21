import styled from "styled-components";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import TitleBox from '../components/TitleBox';
import React from "react";
import phone from "../phone.png";


import Kakao from "../components/Map"


const Directions = () => {
  const InfoLabel = "설명글입니다"
  
  return (
    <>
    <AppBar />
      <WrapBox>
      <TitleBox />
      <ContentBoxDiv>
      <Kakao/>
      </ContentBoxDiv>
      <div> <h1>주소와연락처</h1></div>
      <InfoBoxDiv>
       
          <InfoDiv>
            <IconDiv>
              <IconImg src = {phone} alt="phone"/>
            </IconDiv>
            <IconDiv>
            <InfoLabel>{InfoLabel}</InfoLabel>
            </IconDiv>
          </InfoDiv>
          <InfoDiv>
          <IconDiv>
              <IconImg src = {phone} alt="phone"/>
            </IconDiv>
            <IconDiv>
            <InfoLabel>{InfoLabel}</InfoLabel>
            </IconDiv>
          </InfoDiv>
      </InfoBoxDiv>
      <div> <h1>교통편</h1></div>
      <BusInfoBoxDiv>
      <InfoDiv>
          <IconDiv>
              <IconImg src = {phone} alt="phone"/>
            </IconDiv>
            <IconDiv>
            <InfoLabel>{InfoLabel}</InfoLabel>
            </IconDiv>
          </InfoDiv>


      </BusInfoBoxDiv>
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
const InfoBoxDiv = styled.div`
display: flex;
justify-content: space-around;
  width: 100%;
  height: 200px;
  padding: 2%;
  
`
const InfoDiv = styled.div`
display: flex;
justify-content: space-around;
  width: 50%;
  height: 100%;
  margin : 1%;
  
`

const IconDiv = styled.div`
  display: flex;
    width: 40%;
    height: 100%;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`
const IconImg = styled.img`
    width: 100%;
    height: 100%;
`

const BusInfoBoxDiv = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: flex-start;

`



export default Directions;