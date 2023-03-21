import styled from "styled-components";

const TitleBox = (props) => {
    return (
        <TitleBoxDiv>
        <h1>{props.miniTitle}</h1>
        <Line></Line>
             </TitleBoxDiv>
    );
};

const TitleBoxDiv = styled.div`
display: flex;
justify-content: space-around,center;
align-items: center;
  margin-top: 6%;
  margin-bottom: 5%;
  padding : 3%
`;
const Line = styled.div`
width: 90%;
  height: 8px;
  background-color: #cbcbcb;

`;

export default TitleBox;