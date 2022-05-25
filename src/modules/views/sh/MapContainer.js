import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    // 장소 검색 객체 생성
    const ps = new kakao.maps.services.Places();
    // 키워드로 장소 검색 
    ps.keywordSearch(searchPlace, placesSearchCB);
    // 키워드 검색 완료 시 호출되는 콜백함수
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        //latlngbounds 객체에 좌표 추가
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        // 검색된 장소 위치 기준으로 지도 재설정
        map.setBounds(bounds);
      }
    }

    // 지도에 마커 표시
    function displayMarker(place) {
      // 마커 생성 후 지도에 표시
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트 등록
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
        infowindow.open(map, marker)
      });
    }
  }, [searchPlace]);

  return (
    <div
      id="myMap"
      style={{
        width: '500px',
        height: '500px',
      }}>
    </div>
  )
}
export default MapContainer