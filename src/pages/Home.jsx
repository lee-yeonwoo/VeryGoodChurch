import React from "react";
import Styled from "styled-components";
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import TimeTable from "../components/TimeTable";


import banner1 from "../banner.png";
import banner2 from "../banner2.png";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





function Home() {


const Bannersettings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true, //자동 재생 할 것인지
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
};
const albumSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow : <StyledPrevArrow/>,
  nextArrow : <StyledNextArrow/>,
 
  responsive: [ // 반응형 웹 구현 옵션
  {  
    breakpoint: 1024, //화면 사이즈 960px일 때
    settings: {
      //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
      slidesToShow:3
    } 
  },
  { 
    breakpoint: 800, //화면 사이즈 768px일 때
    settings: {	
      //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
      slidesToShow:2
    }
  },
  { 
    breakpoint: 480, //화면 사이즈 768px일 때
    settings: {	
      //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
      slidesToShow:1
    }
  }
  ]
}

// ------bannerData-------------------

const bannerImgData = [
  {
    id:1,
    img:"배너이미지1"
  },
  {
    id:2,
    img:"배너이미지2"
  }

]
// -------albumData-------------------
const homeAlbumData = [
  {
    id: 1,
    imgUrl: "https://minio.nculture.org/amsweb-opt/multimedia_assets/98/29780/14526/c/%EC%95%88%EB%8F%99_%EC%95%88%EB%8F%99%EA%B5%90%ED%9A%8C%EC%98%88%EB%B0%B0%EB%8B%B92%EC%B8%B5_20191104_171920_01-medium-size.jpg",
    linkUrl:"https://blog.naver.com/goodchurch9006/223043920058"
  },
  {
    id: 2,
    imgUrl: "http://www.christianreview.com.au/imgdata/christianreview_com_au/202111/2021112946195938.jpg",
    linkUrl:"http://www.christianreview.com.au/7617"
  },
  {
    id: 3,
    imgUrl: "https://www.light-of-truth.org/wp-content/uploads/2019/03/who-is-Jesus.jpg",
    linkUrl:"https://blog.naver.com/goodchurch9006/223041710330"
  },
  {
    id: 4,
    imgUrl: "/4",
    linkUrl:"https://blog.naver.com/goodchurch9006/223041694325"
  },
  {
    id: 5,
    imgUrl: "https://www.logoyogo.com/web/wp-content/uploads/edd/2021/04/logoyogo-1-119.jpg",
    linkUrl:"https://blog.naver.com/goodchurch9006/223041688731"
  },
]

const handleButtonClick = (linkUrl) => {
  window.location.href = linkUrl;
};
  return (
    <>
    
      <WrapBox>
      <AppBar />

        <div>
        <Slider {...Bannersettings}>
        <BannerDiv>
          <BannerImg src={banner1} alt="banner" />
        </BannerDiv>
        <BannerDiv>
          <BannerImg src={banner2} alt="banner" />
        </BannerDiv>
         
        </Slider>
      </div>

          <ContentBoxDiv>
          <h1>참조은 Story</h1>
        <StyledSlider {...albumSettings}>
        {homeAlbumData.map((id,linkUrl,imgUrl) => (
          <TitleImgDiv key={id} 
        onClick={() => handleButtonClick(id.linkUrl)}>
          <TitleImg src={id.imgUrl} alt="sampleImg" />
          </TitleImgDiv>
        ))}
        </StyledSlider>
        
      </ContentBoxDiv>
      <ContentBoxDiv>
      <h1>예배시간 안내</h1>
      <TimeTable />
      </ContentBoxDiv>
      
      
        <Footer />
        
      </WrapBox>
      
    </>
  );
}

const WrapBox = Styled.div`
  width: 100%;
  padding-top: 48px;
  overflow-x: hidden;
`;

const ContentBoxDiv = Styled.div`
  margin-top: 6%;
  margin-bottom: 5%;
  padding : 3%
`;
const BannerDiv = Styled.div`
  display: flex;
  width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
`;
const BannerImg = Styled.img`
  width: 100%;
`

const TitleImgDiv = Styled.div`
   /* display: flex;
    height: 20vw;
    width: 80%;
    /* justify-content: space-between;
    flex-direction: row; */
    margin:2px;
    padding: 2px;
    display: inline-block;
    width: 150px;
    height: 230px;
    overflow: hidden;
  
`;
const TitleImg = Styled.img`
/* width: 95%;
  height: 100%; */
  display: inline-block;
    width: 95%;
    height: 230px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 5px;

`;


const StyledSlider = Styled(Slider)`
  display: flex;
 flex-direction: row;
 justify-content: space-around;
 position: relative;
  margin:1.5%;

 `;

 const StyledPrevArrow = Styled.div`
  position: absolute;
  margin-left: 11px;
  z-index: 3;
  &::before {
    content: "";
    display: inline-block;
    border-top: 5px solid #000;
    border-left: 5px solid #000;
    width: 10px;
    height: 10px;
    transform: rotate(315deg);
    margin-right: 10px;
  }
`;

const StyledNextArrow = Styled.div`
  position: absolute;
  margin-right: 22px;
  z-index: 3;

  &::before {
    content: "";
    display: inline-block;
    border-top: 5px solid #000;
    border-right: 5px solid #000;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    margin-left: 10px;
  }
`;



export default Home;

