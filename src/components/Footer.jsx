import React from "react";
import Styled from "styled-components";
import logo2 from "../logo2.png";

const Footer = () => {
    const address = "경기도 수원시 팔달구 중부대로223번길 20-7"
    const phonenumber = "Tel. 070-5033-9006"
    const aider = "aider"

return (
    <FooterBoxDiv>
          <FooterLogoDiv>
            <Logo2Img src={logo2} alt = "logo2" />
          </FooterLogoDiv>
          <FooterLabel>{address}</FooterLabel>
          <FooterLabel>{phonenumber}</FooterLabel>
          <FooterLabel>{aider}</FooterLabel>
        </FooterBoxDiv>


);

};
const FooterBoxDiv = Styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  flex-direction : column;
  width:100%;
  min-height: 100px;
  background-color: #3C4554;
  padding: 1%;

`
const FooterLogoDiv = Styled.div`
justify-content: center; 
  align-items: center; 
  margin : 1%;
  padding: 1%;
  width: 200px; /* 이미지의 가로 크기를 200픽셀로 지정합니다. */
  height: auto; /* 이미지의 세로 크기는 가로 크기에 맞게 자동 조정됩니다. */
  /* width: 500px;
  height: 100px; */
`
const Logo2Img = Styled.img`
  width: 100%;
  height: 100%;  
`

const FooterLabel = Styled.label`
color: white;


`
export default Footer;