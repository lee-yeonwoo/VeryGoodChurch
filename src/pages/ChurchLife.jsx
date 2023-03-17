import styled from "styled-components";
import AppBar from "../components/AppBar";
import TitleBox from '../components/TitleBox';


const ChurchLife = () => {
    return (
      <>
      <AppBar />
      <WrapBox>
      <TitleBox />
      <ContentBoxDiv>
        <p>교회생활</p>
      </ContentBoxDiv>
        
      </WrapBox>
      </>
    );
  };
  
  const WrapBox = styled.div`
    width: 100%;
  `;
  const ContentBoxDiv = styled.div`
  margin-top: 6%;
      margin-bottom: 5%;
      padding: 3%;
      display: flex;
      /* justify-content: flex-end; */
  `;
  
  
  export default ChurchLife;