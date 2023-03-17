import styled from "styled-components";

const TitleBox = () => {
    const Title = "환영합니다"
    return (
        <TitleBoxDiv>
        <h1>{Title}</h1>
        <Line></Line>
             </TitleBoxDiv>

    );
};

const TitleBoxDiv = styled.div`
  margin-top: 6%;
  margin-bottom: 5%;
  padding : 3%
`;
const Line = styled.div`
  width: 1160px;
  height: 8px;
  background-color: aliceblue;

`;

export default TitleBox;