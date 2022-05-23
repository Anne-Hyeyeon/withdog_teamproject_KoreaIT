const { kakao } = window;

export default function KakaoMapScript() {
    const container = document.getElementById('myMap');
    const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3
    };
    const map = new kakao.maps.Map(container, options); // 지도 생성
    const ps = new kakao.maps.services.Places(); // 장소 검색 객체 생성
    const infoWindow = new kakao.maps.InfoWindow({zIndex:1}); // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성
    //se
}