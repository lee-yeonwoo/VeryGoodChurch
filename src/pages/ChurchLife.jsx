import { useState, useEffect } from "react";
import styled from "styled-components";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Pagination from "../components/pagination";
import TitleBox from '../components/TitleBox';
function ChurchLife() {
  const [photos, setPhotos] = useState([]);
  const limit = 9;
  const total = 100;
  const [page,setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <WrapBox>
      <AppBar />
      <TitleBox miniTitle = "교회생활"></TitleBox>
      <CardListBoxDiv>
        {photos.slice(offset,offset+limit).map(({ id, title, thumbnailUrl }) => (
          <CardDiv key={id}>
            <Title>
              {id}. {title}
            </Title>
            <img src = {thumbnailUrl} alt = "samlple" ></img>
            <BorderLine></BorderLine>
          </CardDiv>
        ))}
      </CardListBoxDiv>
      <footer>
        <Pagination
        total={total}
        length={limit}
        page={page}
        setPage={setPage}
        />
      </footer>
      <Footer />
    </WrapBox>
    
  );
}
export default ChurchLife;

  const WrapBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
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



const Title = styled.label`
position: absolute;
color: white;
z-index: 1000;
font-weight: bold;
font-size: 100%;

`
const BorderLine = styled.div `
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
  margin-bottom: 5%;
  padding : 3%
  `



//   export default ChurchLife;