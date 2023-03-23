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


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}


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
const Albumsettings = {
  dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
};


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
        <StyledSlider {...Albumsettings}>
        
          <TitleImgDiv>
          <TitleImg src={sampleImg} alt="sampleImg" />
          </TitleImgDiv>
          <TitleImgDiv>
          <TitleImg src={sampleImg} alt="sampleImg" />
          </TitleImgDiv>
          <TitleImgDiv>
          <TitleImg src={sampleImg} alt="sampleImg" />
          </TitleImgDiv>
          <TitleImgDiv>
          <TitleImg src={sampleImg} alt="sampleImg" />
          </TitleImgDiv>
          <TitleImgDiv>
          <TitleImg src={sampleImg} alt="sampleImg" />
          </TitleImgDiv>
          <TitleImgDiv>
          <TitleImg src={sampleImg} alt="sampleImg" />
          </TitleImgDiv>
          <TitleImgDiv>
          <TitleImg src={sampleImg} alt="sampleImg" />
          </TitleImgDiv>
          <TitleImgDiv>
          <TitleImg src={sampleImg} alt="sampleImg" />
          </TitleImgDiv>
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
  width:243px;
  height:177px;
  background: #ffffff;
  margin:8px;
  padding: 10px;
  
`;
const TitleImg = Styled.img`
  width:100%;
  height:100%;

`;


const StyledSlider = Styled(Slider)`
  display: flex;
 flex-direction: row;
 justify-content: space-around;
`



export default Home;

