import { useState, useEffect } from "react";
import styled from "styled-components";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import TitleBox from "../components/TitleBox";

import axios from "axios";

const tempBlogs = [
  { 
    id: 1, 
    title: "title1", 
    thumbnailUrl: "https://user-images.githubusercontent.com/73478057/228513985-214e4c02-b6e9-42bf-9cfb-743dbde6258c.png",
  },
  { 
    id: 2, 
    title: "title1", 
    thumbnailUrl: "https://user-images.githubusercontent.com/73478057/228513985-214e4c02-b6e9-42bf-9cfb-743dbde6258c.png",
  },
  { 
    id: 3, 
    title: "title1", 
    thumbnailUrl: "https://user-images.githubusercontent.com/73478057/228513985-214e4c02-b6e9-42bf-9cfb-743dbde6258c.png",
  },
  { 
    id: 4, 
    title: "title1", 
    thumbnailUrl: "https://user-images.githubusercontent.com/73478057/228513985-214e4c02-b6e9-42bf-9cfb-743dbde6258c.png",
  },
  { 
    id: 5, 
    title: "title1", 
    thumbnailUrl: "https://user-images.githubusercontent.com/73478057/228513985-214e4c02-b6e9-42bf-9cfb-743dbde6258c.png",
  },
  { 
    id: 6, 
    title: "title1", 
    thumbnailUrl: "https://user-images.githubusercontent.com/73478057/228513985-214e4c02-b6e9-42bf-9cfb-743dbde6258c.png",
  },
  { 
    id: 7, 
    title: "title1", 
    thumbnailUrl: "https://user-images.githubusercontent.com/73478057/228513985-214e4c02-b6e9-42bf-9cfb-743dbde6258c.png",
  },
  { 
    id: 8, 
    title: "title1", 
    thumbnailUrl: "https://user-images.githubusercontent.com/73478057/228513985-214e4c02-b6e9-42bf-9cfb-743dbde6258c.png",
  },
  { 
    id: 9, 
    title: "title1", 
    thumbnailUrl: "https://user-images.githubusercontent.com/73478057/228513985-214e4c02-b6e9-42bf-9cfb-743dbde6258c.png",
  },
]

function ChurchLife() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [maxNumPage, setMaxNumPage] = useState(0);

  const getMaxPage = async () => {
    // TODO: getMaxPage api needed
    const tempMax = 10
    setMaxNumPage(tempMax)
  };

  const getBlogs = async (page) => {
    // TODO: getBlogs api needed
    setBlogs([...tempBlogs])
  };

  useEffect(() => {
    if (page !== undefined && page !== null && page >= 1) {
      getBlogs(page);
    }
  }, [page]);

  useEffect(() => {
    getMaxPage();
  }, []);

  return (
    <WrapBox>
      <AppBar />
      <TitleBox miniTitle="교회생활"></TitleBox>
      <CardListBoxDiv>
        {blogs.map(({ id, title, thumbnailUrl }) => (
            <CardDiv key={id}>
              <Title>
                {id}. {title}
              </Title>
              <img src={thumbnailUrl} alt="samlple"></img>
              <BorderLine></BorderLine>
            </CardDiv>
          ))}
      </CardListBoxDiv>
      <Nav>
        {Array.from({ length: maxNumPage }, (v, i) => (
          <Button
            onClick={() => {
              setPage(i + 1);
            }}
          >
            {i + 1}
          </Button>
        ))}
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
`;

const Title = styled.label`
  position: absolute;
  color: white;
  z-index: 1000;
  font-weight: bold;
  font-size: 100%;
`;
const BorderLine = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  border: 3px solid white;
`;
const CardListBoxDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  align-content: space-between;
  margin-bottom: 5%;
  padding: 3%;
`;

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
