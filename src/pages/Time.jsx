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
        <ContentBoxDiv>
        <TitleBox miniTitle = "예배 시간"></TitleBox>
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
margin-top: 6%;
  margin-bottom: 5%;
  padding : 3%
`;
  export default Time;