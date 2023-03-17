import styled from "styled-components";
import AppBar from '../components/AppBar';
import TitleBox from '../components/TitleBox';
import IntroduceBox from "../components/IntroduceBox";

const Welcome = () => {
  const ChurchDiscription = "참조은 교회는 웃음지음을 목적하는 선교적교회입니다 하나님 보시기에 참좋은 교회가 되자!(창세기 1:31) 참조은교회는 ,수원제일교회나 창훈대교회와 같은 대한예수교장로회(합동) 소속이며 수원노회에 가입되어 있습니다"
  // const MissionDiscription = " 사명 설명 "
  // const SloganDiscription = "슬로건이미지"
    return (
        <>
        <AppBar />
        <WrapBox>
     <TitleBox />
     <ContentBoxDiv>
      <DiscriptionBox>
<p>{ChurchDiscription}</p>
      </DiscriptionBox>
{/* <ImageBox></ImageBox> */}
     </ContentBoxDiv>
<ContentBoxDiv>
  <IntroduceBox />
</ContentBoxDiv>
<ContentBoxDiv>
  <IntroduceBox />
</ContentBoxDiv>
<ContentBoxDiv>
  <IntroduceBox />
</ContentBoxDiv>


        </WrapBox>
      </>
    );
  };

  const WrapBox = styled.div`
  width: 100%;
  padding-top: 100px;
  overflow-x: hidden;
`;


const ContentBoxDiv = styled.div`
margin-top: 6%;
    margin-bottom: 5%;
    padding: 3%;
    display: flex;
    /* justify-content: flex-end; */
`;
  
const DiscriptionBox = styled.div`
  width : 50%;
  height: 500px;
  background-color : #f5f5f5;
`

  export default Welcome;