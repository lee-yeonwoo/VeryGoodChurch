import Styled from "styled-components";
import AppBar from '../components/AppBar';
import TitleBox from '../components/TitleBox';
import IntroduceTitle from "../components/IntroduceTitle";
import churchImg from "../sample.png";
import Profile from "../profile.png";

const Welcome = () => {
  const ChurchMainDiscription = "참조은 교회는 웃음지음을 목적하는 선교적교회입니다"
  const BibleDiscription = "하나님 보시기에 참좋은 교회가 되자!(창세기 1:31)"
  const SubDisctiption = "참조은교회는 ,수원제일교회나 창훈대교회와 같은 대한예수교장로회(합동) 소속이며 수원노회에 가입되어 있습니다"
  const PersonDiscription = "총신대학교신학대학원(목회연구)과 백석대학교 상담대학원(가정사역 가족상담학)을 마치고 "
  const MissionDiscription = "사명 소개글"
  const SloganTitle = "S.M.I.L.E"
    return (
        <>
        <AppBar />
        <WrapBox>
     <TitleBox />


     {/* 교회설명 */}
     <ChurchContentBoxDiv>
     <ImageBox>
     <ChurchImg src = {churchImg} alt="church"/>
     </ImageBox>
      <DiscriptionBox>
<h1>{ChurchMainDiscription}</h1>
<h2>{BibleDiscription}</h2>
<p>{SubDisctiption}</p>
      </DiscriptionBox>

     </ChurchContentBoxDiv>




{/* 담임 목사님 소개 */}
<ContentBoxDiv>
  <IntroduceTitle />
  <FullDiscriptionBox>
    <DiscriptionBox>{PersonDiscription}</DiscriptionBox>
    <ProfileBox>
    <ProfileImg src = {Profile} alt="church"/>
    <p>담임목사 임철민</p>
    </ProfileBox>
  
  </FullDiscriptionBox>

</ContentBoxDiv>


{/* 참조은 교회의 사명 */}
<ContentBoxDiv>
  <IntroduceTitle />
  <FullDiscriptionBox>
    <DiscriptionBox>{MissionDiscription}</DiscriptionBox>
    </FullDiscriptionBox>
</ContentBoxDiv>

{/* 슬로건 */}
<ContentBoxDiv>
  <IntroduceTitle />
  <FullDiscriptionBox>
    <h1>"{SloganTitle}"</h1>
    </FullDiscriptionBox>
    <SubSlogan>웃음이 있는 교회</SubSlogan>
    <SubSlogan>웃음이 넘치는 사역</SubSlogan>
  <CardBoxList>
  <CardBox>
    <Card>S</Card>
    </CardBox>
    <CardBox>
    <Card>M</Card>
    </CardBox>
    <CardBox>
    <Card>I</Card>
    </CardBox>
    <CardBox>
    <Card>L</Card>
    </CardBox>
    <CardBox>
    <Card>E</Card>
    </CardBox>
    
  

  </CardBoxList>
  
</ContentBoxDiv>
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
    height: 300px;
    display: flex;
    justify-content: space-between;
    
`;

const ContentBoxDiv = Styled.div`
    margin-top: 6%;
    margin-bottom: 5%;
    
`;
  
const DiscriptionBox = Styled.div`
  width : 50%;
  height: 100%;
  background-color : #b3ffcc;
  margin: 4%;

`


const ImageBox = Styled.div`
    width:243px;
    height: 305px;
    margin: 10px;
    padding: 10px;

`;

const FullDiscriptionBox = Styled.div`
  display : flex;
  justify-content: space-around;
  width : 100%;
  background-color : #f5f5f5;
`
const SubSlogan = Styled.div`
  display : flex;
  justify-content: space-around;
  width : 100%;
  background-color : #f5f5f5;
`
const ProfileBox = Styled.div`
    width: 20%;
    height: 50%;
    padding: 4%;
    margin: 3%;

`
const ChurchImg = Styled.img`
  width:100%;
  height:100%;
  
`;

const ProfileImg = Styled.img`
  width:100%;
  height:100%;
  
`;

const CardBox = Styled.div`
  width:243px;
  height:177px;
  background: #ffffff;
  margin:8px;
  padding: 10px;

`

const Card = Styled.div`
  width:100%;
  height:100%;
  background:#bef950
  
`;

const CardBoxList = Styled.div`
display: flex;
  flex-direction: row;
  justify-content: center; /* 아이템을 수평 중앙으로 정렬 */
  align-items: center; /* 아이템을 수직 중앙으로 정렬 */
  background-color: #f5f5f5

`

  export default Welcome;