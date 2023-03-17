import { useEffect } from "react";


const {kakao} = window;


function Kakao() {
    useEffect(() => {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(37.276905538746064,127.04134500869066), //지도의 중심좌표.
          level: 3 //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        map.setDraggable(false); //드래그 막기
        map.setZoomable(false); //줌 막기
         // 마커가 표시될 위치입니다 
        var markerPosition  = new kakao.maps.LatLng(37.276905538746064,127.04134500869066); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

                var iwContent = '<div style="padding:5px;">참조은교회 <br><a href="https://map.kakao.com/link/map/참조은교회,37.276905538746064,127.04134500869066" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/참조은교회,37.276905538746064,127.04134500869066" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            position : iwPosition, 
            content : iwContent 
        });

        infowindow.open(map, marker); 

        

      },[])
     
      
      return <div id="map" style={{width: '100%',height: '500px',}}></div>;
      


};



export default Kakao;