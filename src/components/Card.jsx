import styled from "styled-components";
import sampleImg from "../sampleImg.png";

const Card = (props) => {
const url = "https://blog.naver.com/goodchurch9006"
    return(
        <CardDiv onClick={()=>{window.open(url)}}>
          <TitleImg src={sampleImg} alt = "sampleImg"/>
          <Title>{props.title}</Title>
          <Line></Line>
        </CardDiv>
     );
};
const CardDiv = styled.div`
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

export default Card;