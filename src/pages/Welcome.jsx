import styled from "styled-components";
import AppBar from '../components/AppBar';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Welcome = () => {
  const settings = {
    dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
  };
    return (
        <>
        
        <AppBar />
        <WrapBox>
          <h1>소개</h1>
          <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
          <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p><p>리액트 라우터를 사용해 보는 프로젝트입니다.</p><p>리액트 라우터를 사용해 보는 프로젝트입니다.</p><p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
        </WrapBox>
      </>
    );
  };

  const WrapBox = styled.div`
  width: 100%;
`;
  
  export default Welcome;