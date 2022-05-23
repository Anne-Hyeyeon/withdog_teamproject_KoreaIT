import React from "react";
import { Button } from '@mui/material';
const { Kakao } = window

const ShareButton = ({ data }) => {
  const url = "https://catmbtitest.netlify.app" // 배포 후 url 변경
  const resultUrl = window.location.href

  React.useEffect(() => {
    Kakao.cleanup()
    Kakao.init("84922e7c7e6d966ca8696e2187ce004f")
  }, [])

  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '내가 강아지였다면? 결과 보기',
        description: '당신은 개로 태어나면 ${data.name} 입니다. ${data.decs}',  // 데이터 가져와서 바꿔주기
        imageUrl:
          url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러 가기',
          link: {
            mobileWebUrl: url,
            webUrl: url
          },
        },
      ]
    });
  }
  return (
    <Button onClick={shareKakao}>카카오톡 공유하기</Button>
  )
}

export default ShareButton