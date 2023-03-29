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
  width: 100%;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 2%;
  padding : 1%
`;
const Line = styled.div`
  width: 15%;
  height: 2px;
  background-color: #B7D7AF;

`;

export default TitleBox;