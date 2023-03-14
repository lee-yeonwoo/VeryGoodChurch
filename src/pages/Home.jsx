import React from "react";
import Styled from "styled-components";
import AppBar from '../components/AppBar';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


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

  return (
    <>
    
      <WrapBox>
      <AppBar />
<ContentBoxDiv>
<BannerDiv>
          <img src="banner.png" alt="banner" />
        </BannerDiv>
</ContentBoxDiv>
        <ContentBoxDiv>
          <h1>참조은 Story</h1>
          <NextbuttonDiv>
            <Nextbutton>이전</Nextbutton>
            <Nextbutton>다음</Nextbutton>
          </NextbuttonDiv>      
          <StoryDiv>
          <TitleImgDiv>
            <TitleImg>대표사진</TitleImg>
          </TitleImgDiv>
          <TitleImgDiv>
            <TitleImg>대표사진</TitleImg>
          </TitleImgDiv>
          <TitleImgDiv>
            <TitleImg>대표사진</TitleImg>
          </TitleImgDiv>
          <TitleImgDiv>
            <TitleImg>대표사진</TitleImg>
          </TitleImgDiv>
          <TitleImgDiv>
            <TitleImg>대표사진</TitleImg>
          </TitleImgDiv>
          </StoryDiv>
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
        <ContentBoxDiv>
          <h1>참조은교회의 푸터영역</h1>
        </ContentBoxDiv>
      </WrapBox>
    </>
  );
}

const WrapBox = Styled.div`
  width: 100%;
  padding-top: 48px;
`;

const ContentBoxDiv = Styled.div`
  margin-top: 6%;
  margin-bottom: 5%;
`;
const BannerDiv = Styled.div`
  width: 100%;
`;

const TitleImgDiv = Styled.div`
  width:243px;
  height:177px;
  background: skyblue;
  margin:5px;
`;
const TitleImg = Styled.div`
  width:100%;
`;
const StoryDiv = Styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
`;
const NextbuttonDiv = Styled.div`
display: flex;
justify-content: flex-end;
padding: 5px;

`;
const Nextbutton = Styled.button`
justify-content : center;
`;
export default Home;

