import React from "react";
import Styled from "styled-components";
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import banner1 from "../banner.png";
import banner2 from "../banner2.png";
import sampleImg from "../sampleImg.png";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





function Home() {

const tableInfo = [
  {
    name: "주일예배",
    time: "오전9시",
    location: "본당",
    user: "ㅇㅇㅇ목사님",
  },
  {
    name: "수요예배",
    time: "오전9시",
    location: "본당",
    user: "ㅇㅇㅇ목사님",
  },
  {
    name: "금요철야",
    time: "오전9시",
    location: "본당",
    user: "ㅇㅇㅇ목사님",
  },
  {
    name: "어린이예배",
    time: "오전9시",
    location: "본당",
    user: "ㅇㅇㅇ목사님",
  },
  {
    name: "새벽예배",
    time: "오전9시",
    location: "본당",
    user: "ㅇㅇㅇ목사님",
  },
];
const Bannersettings = {
  dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
};
const albumSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow : <StyledPrevArrow/>,
  nextArrow : <StyledNextArrow/>,
 
  responsive: [ // 반응형 웹 구현 옵션
  {  
    breakpoint: 1024, //화면 사이즈 960px일 때
    settings: {
      //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
      slidesToShow:3
    } 
  },
  { 
    breakpoint: 800, //화면 사이즈 768px일 때
    settings: {	
      //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
      slidesToShow:2
    }
  },
  { 
    breakpoint: 480, //화면 사이즈 768px일 때
    settings: {	
      //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
      slidesToShow:1
    }
  }
  ]
}

const albumDatalength = 9


  return (
    <>
    
      <WrapBox>
      <AppBar />

        <div>
        <Slider {...Bannersettings}>
        <BannerDiv>
          <BannerImg src={banner1} alt="banner" />
        </BannerDiv>
        <BannerDiv>
          <BannerImg src={banner2} alt="banner" />
        </BannerDiv>
         
        </Slider>
      </div>

          <ContentBoxDiv>
          <h1>참조은 Story</h1>
        <StyledSlider {...albumSettings}>
        {Array.from({length: albumDatalength},(v,i) =>
        <TitleImgDiv >
          <TitleImg src={sampleImg} alt="sampleImg" />
          </TitleImgDiv>
        )}
        </StyledSlider>
        
      </ContentBoxDiv>


        <ContentBoxDiv>
          <h1>예배시간 안내</h1>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>구분</TableCell>
                  <TableCell align="right">예배시간</TableCell>
                  <TableCell align="right">예배장소</TableCell>
                  <TableCell align="right">담당교역자</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableInfo.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.time}</TableCell>
                    <TableCell align="right">{row.location}</TableCell>
                    <TableCell align="right">{row.user}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ContentBoxDiv>
        <Footer />
        
      </WrapBox>
      
    </>
  );
}

const WrapBox = Styled.div`
  width: 100%;
  padding-top: 48px;
  overflow-x: hidden;
`;

const ContentBoxDiv = Styled.div`
  margin-top: 6%;
  margin-bottom: 5%;
  padding : 3%
`;
const BannerDiv = Styled.div`
  display: flex;
  width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
`;
const BannerImg = Styled.img`
  width: 100%;
`

const TitleImgDiv = Styled.div`
   /* display: flex;
    height: 20vw;
    width: 80%;
    /* justify-content: space-between;
    flex-direction: row; */
    margin:2px;
    padding: 2px;
  
`;
const TitleImg = Styled.img`
width: 95%;
  height: 100%;

`;


const StyledSlider = Styled(Slider)`
  display: flex;
 flex-direction: row;
 justify-content: space-around;
 position: relative;
  margin:1.5%;

 `;

 const StyledPrevArrow = Styled.div`
  position: absolute;
  margin-left: 11px;
  z-index: 3;
  &::before {
    content: "";
    display: inline-block;
    border-top: 5px solid #000;
    border-left: 5px solid #000;
    width: 10px;
    height: 10px;
    transform: rotate(315deg);
    margin-right: 10px;
  }
`;

const StyledNextArrow = Styled.div`
  position: absolute;
  margin-right: 22px;
  z-index: 3;

  &::before {
    content: "";
    display: inline-block;
    border-top: 5px solid #000;
    border-right: 5px solid #000;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    margin-left: 10px;
  }
`;



export default Home;

