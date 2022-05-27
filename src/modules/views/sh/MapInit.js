import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Stack, Box, Paper, Grid } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
const { kakao } = window

const MapInit = ({ searchPlace }) => {
  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState([])
  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
    var markers = []
    const container = document.getElementById('myMap')
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)
    const ps = new kakao.maps.services.Places()
    ps.keywordSearch(searchPlace, placesSearchCB)

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds()

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i])
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }

        map.setBounds(bounds)
        // 페이지 목록 보여주는 displayPagination() 추가
        displayPagination(pagination)
        setPlaces(data)
      }
    }

    // 검색결과 목록 하단에 페이지 번호 표시
    function displayPagination(pagination) {
      var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement('a')
        el.href = '#'
        el.innerHTML = i

        if (i === pagination.current) {
          el.className = 'on'
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i)
            }
          })(i)
        }

        fragment.appendChild(el)
      }
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      })

      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
        infowindow.open(map, marker)
      })
    }
  }, [searchPlace])

  return (
    <Box sx={{width: '100%'}}>
      <Grid container rowSpacing={0.5}>
        <Grid item xs={7}>
          <Box className="map"
            id="myMap"
            style={{
              border: '3px solid gray',
              borderRadius: '8px',
              width: '70vh',
              height: '600px',
            }}
          ></Box>
        </Grid>
        <Grid item xs={5}>
          <Box className="address_list">
            {Places.map((item, i) => (
              <Stack className="address_list_ind" key={i} style={{ marginTop: '5px' }}>
                <span className="address_list_title">{i + 1}. {item.place_name}</span>
                <span className="address_list_add1"><PlaceIcon color="primary"/> {item.address_name}</span>
                {item.road_address_name ? (
                  <span className="address_list_add2"><PlaceIcon color="primary"/> {item.road_address_name}</span>
                ) : (<span></span>)}
                {item.phone ? (
                  <span className="address_list_phone"><PhoneIcon color="primary"/> {item.phone}</span>
                ) : (<span></span>)}
                <br></br>
              </Stack>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MapInit