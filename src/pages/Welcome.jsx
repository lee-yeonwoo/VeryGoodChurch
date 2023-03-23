import Styled from "styled-components";
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import TitleBox from '../components/TitleBox';
import IntroduceTitle from "../components/IntroduceTitle";
import Introduce1 from "../Introduce1.png";
import Introduce2 from "../Introduce2.png";
import Introduce3 from "../Introduce3.png";
import Introduce4 from "../Introduce4.png";


const Welcome = () => {
    return (
        <>
        <AppBar />
        <WrapBox>
        <TitleBox miniTitle = "환영합니다"></TitleBox>


     {/* 교회설명 */}
     <ChurchContentBoxDiv>
     <Introduceimg src = {Introduce1} alt="intro1"/>
     </ChurchContentBoxDiv>

{/* 담임 목사님 소개 */}

  <IntroduceTitle miniMenu = "담임 목사님 소개"></IntroduceTitle>
  <ChurchContentBoxDiv>
     <Introduceimg src = {Introduce2} alt="intro2"/>
     </ChurchContentBoxDiv>


{/* 참조은 교회의 사명 */}
<IntroduceTitle miniMenu = "참조은 교회의 사명"></IntroduceTitle>
  <ChurchContentBoxDiv>
     <Introduceimg src = {Introduce3} alt="iintro3"/>
     </ChurchContentBoxDiv>

{/* 슬로건 */}
<IntroduceTitle miniMenu = "슬로건"></IntroduceTitle>
  <ChurchContentBoxDiv>
     <Introduceimg src = {Introduce4} alt="intro4"/>
     </ChurchContentBoxDiv>
<Footer />
        </WrapBox>
      </>
    );
  };

  const WrapBox = Styled.div`
  width: 100%;
  padding-top: 100px;
  overflow-x: hidden;
`;
const ChurchContentBoxDiv = Styled.div`
    margin-top: 6%;
    margin-bottom: 5%;
    /* height: 300px; */
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const Introduceimg = Styled.img`
  width:100%;
  height:100%;
  
`;


  export default Welcome;