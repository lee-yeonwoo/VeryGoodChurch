import styled from "styled-components";


const IntroduceBox = () => {
    const PersonDiscription = " 목사님 설명 "
    return (

        <>
        <MiniTitleBoxDiv>
            <MiniMenuListDiv>
                <MiniMenuDiv>담임 목사님 소개</MiniMenuDiv>
                <MiniMenuDiv>참조은 교회의 사명</MiniMenuDiv>
                <MiniMenuDiv>슬로건</MiniMenuDiv>
            </MiniMenuListDiv>
        </MiniTitleBoxDiv>
        
        <FullDiscriptionBox>{PersonDiscription}</FullDiscriptionBox>
        </>


    );
};


const MiniTitleBoxDiv = styled.div`
width : 100%;
  height: 50px;

`

const MiniMenuDiv = styled.div`
display: flex;
  font-size: 20px;
  padding: 10px;
  font-size: 28px;
  float: left;
  font-weight: bold;
  cursor: pointer;

`

const MiniMenuListDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px;
  margin-top: 40px;
`;
const FullDiscriptionBox = styled.div`
  width : 100%;
  height: 500px;
  background-color : #f5f5f5;


`

export default IntroduceBox;