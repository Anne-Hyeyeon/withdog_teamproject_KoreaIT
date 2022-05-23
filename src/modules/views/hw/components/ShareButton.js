import React from "react";
import { Button } from '@mui/material';
const { Kakao } = window

const ShareButton = () => {
  const url = "https://catmbtitest.netlify.app" // 배포 후 url 변경
  const resultUrl = window.location.href

  React.useEffect(() => {
    Kakao.cleanup()
    Kakao.init("84922e7c7e6d966ca8696e2187ce004f")
    console.log(Kakao.isInitialized())
  }, [])

  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '내가 강아지였다면? 결과 보기',
        description: '아메리카노, 빵, 케익',  // 데이터 가져와서 바꿔주기
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          androidExecutionParams: 'test',
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러 가기',
          link: {
            mobileWebUrl: url

          },
        },
      ]
    });
  }
  return (
    <Button onClikck={ShareButton}>카카오톡 공유하기</Button>
  )
}

export default ShareButton