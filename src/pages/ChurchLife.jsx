import styled from "styled-components";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import TitleBox from '../components/TitleBox';

import sampleImg from "../sampleImg.png";


const ChurchLife = () => {
  const title = "은혜로운 예배 시간"
    return (
      <>
      <AppBar />
      <WrapBox>
      <TitleBox />
      <CardListBoxDiv>
        <Card>
          <TitleImg src={sampleImg} alt = "sampleImg"/>
          <Title>{title}</Title>
          <Line></Line>
        </Card>
        <Card>
          <TitleImg src={sampleImg} alt = "sampleImg"/>
          <Title>{title}</Title>
          <Line></Line>
        </Card>
        <Card>
          <TitleImg src={sampleImg} alt = "sampleImg"/>
          <Title>{title}</Title>
          <Line></Line>
        </Card>
        <Card>
          <TitleImg src={sampleImg} alt = "sampleImg"/>
          <Title>{title}</Title>
          <Line></Line>
        </Card>
        <Card>
          <TitleImg src={sampleImg} alt = "sampleImg"/>
          <Title>{title}</Title>
          <Line></Line>
        </Card>
        <Card>
          <TitleImg src={sampleImg} alt = "sampleImg"/>
          <Title>{title}</Title>
          <Line></Line>
        </Card>
        
      </CardListBoxDiv>
      <Footer />
      </WrapBox>
      </>
    );
  };
  
  const WrapBox = styled.div`
    width: 100%;
  `;
  const CardListBoxDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  align-content: space-between;
  margin-top: 6%;
  margin-bottom: 5%;
  padding : 3%
  `

  const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30%;
  height: 30%;
  margin-bottom: 20px;
  background-color: #dddddd;
  cursor: pointer;

`

const TitleImg = styled.img`
position: absolute;
  width: 100%;
  height: 100%;
  filter : brightness(70%); /* brightness: 이미지 살짝 어둡게 */
`

const Title = styled.label`
position: absolute;
color: white;
z-index: 1000;
font-weight: bold;
font-size: 100%;

`
const Line = styled.div `
width: 80%;
height: 80%;
position: absolute;
  border: 3px solid white;

`

  export default ChurchLife;