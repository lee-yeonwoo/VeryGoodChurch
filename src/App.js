import React from "react";
import "./App.css";
import Styled from "styled-components";
import AlbumItem from "./components/AlbumItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const images = [
  {
    title: "",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1024px-Icecat1-300x300.svg.png",
  },
  {
    title: "",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1024px-Icecat1-300x300.svg.png",
  },
  {
    title: "",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1024px-Icecat1-300x300.svg.png",
  },
  {
    title: "",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1024px-Icecat1-300x300.svg.png",
  },
  {
    title: "",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1024px-Icecat1-300x300.svg.png",
  },
];

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

function App() {
  return (
    <>
      {
        <AppBarDiv>
          <LogoimageDiv>
            <img src="clogo.png" alt="clogo" />
            </LogoimageDiv>
          <CoreMenuListDiv>
            <MenuDiv>환영합니다</MenuDiv>
            <MenuDiv>예배시간</MenuDiv>
            <MenuDiv>찾아오시는 길</MenuDiv>
            <MenuDiv>교회 생활</MenuDiv>
          </CoreMenuListDiv>
        </AppBarDiv>
      }
      <WrapBox>
        
      <ContentBoxDiv>
        <BannerDiv>
          <img src="banner.png" alt="banner" class="banner" />
        </BannerDiv>
      </ContentBoxDiv>
        <ContentBoxDiv>
          <h1>참조은 Story</h1>
          <button>이전</button>
          <button>다음</button>
          {/* <h1>사진 ~~~</h1>
          <h1>사진 ~~~</h1>
          <h1>사진 ~~~</h1>
          <h1>사진 ~~~</h1>
          <h1>사진 ~~~</h1> */}
          <AlbumBoxDiv>
          {images.map((image) => (
            <div className="AlbumItem">
              <img className="Album-image" src={image.src} alt="Icecat1" />
              <h2>{image.title}</h2>
            </div>
          ))}
        </AlbumBoxDiv>
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
          <h1>푸터</h1>
        </ContentBoxDiv>
      </WrapBox>
    </>
  );
}

const WrapBox = Styled.div`
  width: 100%;
  padding-top: 48px;
`;
const AppBarDiv = Styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color:#fff;
`;
const LogoimageDiv = Styled.div`
  display: flex;
  justify-content: flex-start;
  // width: 300px;
  //   height: 60px;
    padding: 15px;
`;
const CoreMenuListDiv = Styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;
const MenuDiv = Styled.div`
  font-weight: bold;
  font-size: 17px;
`;
const ContentBoxDiv = Styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding:15px;
  border-radius: 20px
  border: 2px solid #000000;
`
const BannerDiv = Styled.div`
  display: flex;
  width: 100%;
  background-color: red;
`
const AlbumBoxDiv = Styled.div`
display: flex;
flex-direction: row;
`
export default App;
