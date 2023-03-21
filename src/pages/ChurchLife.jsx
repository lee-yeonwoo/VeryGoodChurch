import React from "react";
import styled from "styled-components";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import TitleBox from '../components/TitleBox';
import Card from "../components/Card";


const ChurchLife = () => {
  
  const titles = ["title1","title2","title3","title4","title5","title6","title7","title8"]
    const titleList = titles.map((title)=>(<Card title={title}/>))
    return (
      <>
      <AppBar />
      <WrapBox>
      <TitleBox />
      <CardListBoxDiv>

      {
            titleList.map((a, i) => {
              return <Card title={a} num={i} key={i}/>
              // return <Card products={products[i]} num={i} key={i}/>
            })
          }
        
        
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



  export default ChurchLife;