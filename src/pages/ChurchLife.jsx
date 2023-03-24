import React from "react";
import { useState,useEffect } from "react";
import styled from "styled-components";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import TitleBox from '../components/TitleBox';

import Pagination from "../components/pagination";
// import sampleImg from "../sampleImg.png";


const ChurchLife = () => {
  //useState()를 먼저 선언해줍니다
  const [photos,setPosts] = useState([]); //초기값은 빈배열로..왜인지는 ...뭔가 빈 것 부터 시작해도되니까여
  const limit = 12;
  const [page,setPage] = useState(1);
  const offset = (page - 1) * limit;

  //useEffect()로 api를 불러오는 거 !! 비동기로 처리하는데 사용되는 기능이랄까요
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
    return (
      <>
      <AppBar />
      <WrapBox>
      <TitleBox miniTitle = "교회생활"></TitleBox>

      <label>
        페이지 당 표시할 게시물 수:&nbsp;
     
      </label>
      <CardListBoxDiv>
        {
        photos.slice(offset,offset+limit).map(({ id,title,body}) => (
            <CardDiv key = {id}>
          <TitleImg>{body}</TitleImg>
          <Title>{id}. {title}</Title>
          <Line></Line>
        </CardDiv>
          ))}
      </CardListBoxDiv>
      <number>
        <Pagination
        total={photos.length}
        length={limit}
        page={page}
        setPage={setPage}
        />
      </number>
      <Footer />
      </WrapBox>
      </>
    );
  };
  
  const WrapBox = styled.div`
    width: 100%;
  `;

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

const TitleImg = styled.div`
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