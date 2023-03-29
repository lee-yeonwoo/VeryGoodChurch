import { useState, useEffect } from "react";
import styled from "styled-components";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import TitleBox from '../components/TitleBox';

import axios from "axios";


function ChurchLife() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page,setPage] = useState(1);
  const limit = 9;
  const maxNumPage = 10;
  const offset = (page - 1) * limit;

  
    const fetchBlogData = async () => {
      
      try {
        setError(null);
        setPhotos(null);
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setPhotos(response.data);
        

      } catch (e) {
        setError(e)
      }
      setLoading(false);
    };

    useEffect(() => {
      fetchBlogData();
  }, []);
  
  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러가 발생했습니다</div>
  if (!photos) return null;
  
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
      <Nav>
        {Array.from({length: maxNumPage}, (v, i) => 
          <Button onClick={()=> { setPage(); fetchBlogData(); }}>
           {i+1}
          </Button>
        )}
        </Nav>
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

  const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  color: #4f4f4f;
  font-size: 1rem;
  &:hover {
    color: black;
    cursor: pointer;
    transform: translateY(-2px);
  }
  &[disabled] {
    color: grey;
    cursor: revert;
    transform: revert;
  }
  &[aria-current] {
    color: black;
    border: #4f4f4f;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;