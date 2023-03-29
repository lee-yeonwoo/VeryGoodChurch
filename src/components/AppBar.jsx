import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import clogo from '../clogo.png';


const AppBar = () => {
  const navigate = useNavigate()
  return (
      <AppBarDiv>
        <LogoImgDiv
          onClick={() => {
            navigate("/");
          }}
          >
         <img src={clogo} alt="clogo" />  
        </LogoImgDiv>
               
        <CoreMenuListDiv>
        <MenuDiv
        onClick={() => {
          navigate("/welcome");
        }}
        >환영합니다</MenuDiv>
        <MenuDiv
        onClick={() => {
          navigate("/time");
        }}
        >예배시간</MenuDiv>
        <MenuDiv
        onClick={() => {
          navigate("/directions");
        }}
        >찾아오시는 길</MenuDiv>
        <MenuDiv
        onClick={() => {
          navigate("/churchLife");
        }}
        >교회 생활</MenuDiv>


      </CoreMenuListDiv>
    </AppBarDiv>
  );
};
const AppBarDiv = styled.div`
  position: fixed;
  top:0;
  z-index:10;
  width: 100%;
  /* min-height: 10%; */
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: white;
  font-size: calc(10px + 2vmin);
  color: black;
`;
const LogoImgDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width: auto;
  height: 50px;
  padding:30px;
  cursor: pointer;
`;


const CoreMenuListDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px;
  margin-top: 40px;
`;
const MenuDiv = styled.div`
   /* display: flex; */
  font-size: 20px;
  padding: 10px;
  font-size: 18px;
  float: left;
  font-weight: bold;
  cursor: pointer;
`;




export default AppBar;