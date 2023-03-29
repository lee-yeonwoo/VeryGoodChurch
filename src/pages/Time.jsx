import styled from "styled-components";
import AppBar from '../components/AppBar.jsx';
import Footer from "../components/Footer.jsx";
import React from "react";
import TitleBox from '../components/TitleBox';
import TimeTable from "../components/TimeTable";





const Time = () => {
  
    return (
        <>
        <AppBar />
        <WrapBox>
        <TitleBox miniTitle = "예배 시간"></TitleBox>
        <ContentBoxDiv>
        <TimeTable />
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
  display:flex;
  justify-content: space-around;
  margin-bottom: 20%;
 
`;
  export default Time;