import styled from "styled-components";


const IntroduceTitle = (props) => {
    return (
        <>
        <MiniTitleBoxDiv>
                <MiniMenuDiv>{props.miniMenu}</MiniMenuDiv>
        </MiniTitleBoxDiv>
        </>
    );
};


const MiniTitleBoxDiv = styled.div`
display: flex;
justify-content: center;
width : 100%;
height: 50px;

`
const MiniMenuDiv = styled.div`
  font-size: 20px;
  padding: 10px;
  font-size: 28px;
  float: left;
  font-weight: bold;
  color : gray;
  cursor: pointer;

`

export default IntroduceTitle;