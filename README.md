<br>

# 🐶 애견인 커뮤니티 윗독(WithDog)
전국 애견인들이 강아지와 함께 하는 일상을 공유하고, 다양한 애견 관련 정보를 얻어갈 수 있는 종합 커뮤니티
<br>

완성작 보러가기 🔍

<h3> https://withdog0603.netlify.app/ </h3>
<br />

## ✔️ 팀프로젝트 개요
### `진행 기관` 
신촌 코리아 IT 아카데미

💖 본 프로젝트는 프로젝트 우수작으로 선정되어 코리아 IT 아카데미 홈페이지에 게시되었습니다. (프론트엔드 과정 중 최초) 💖
https://www.koreaisacademy.com/renewal2021/community/project_view.asp?idxnum=86&clkMater=&txtMenu=&txtCurPage=2&selMater=


### `과정`
👍 프론트엔드 정규반 (평일 저녁 19:00~22:00)

### `진행 기간`
2022.05 ~ 2022.06

### `작업자`
김혜연(팀장), 김소희, 서형원

### `사용 기술 및 개발환경`
- 개발환경 : PC
- 개발도구 : VSC
- 개발언어 및 라이브러리, 프레임워크 : HTML, CSS, javascript, REACT 
- API : 다음 지도 API, 다음 주소(도로명) API

<br />

##  해결한 문제
⭐️ photoURL의 활용 : firebase의~ㅇ
Link를 컴포넌트로 쓰니까 로딩 발생함.
Switch

## ✔️ 내가 구현한 기능

### `Auth`

#### `파이어베이스`를 활용한 로그인, 로그아웃, 회원가입, 회원정보 관리 기능
- 파이어베이스 초기 세팅 : auth, firestore, storage를 import, api 키 저장. import 한 것들을 각각 authService, dbService, storageService로 expert함.  정보를 담은 파일 세팅
- 회원가입 : 회원가입 정보를 모두 입력시, `createUserWithEmailAndPassword`로 계정 생성 후 `updateProfile`로 input에 입력된 내용으로 회원 정보 업데이트. 
- 회원가입 후 `useNavigate`이용해 초기 화면으로 이동.
- 초기화면 : 화면 로딩시 authService에 저장된 사용자 정보를 불러와  `userObj`라는 객체에 저장. 
- 업데이트 : profile의 변경된 값을 적용시키기 위해, userObj를 authSerive에 저장된 값으로 업데이트 시키기 위한 `refreshUser`라는 함수를 만들어준다.
초기화면 코드 : `useEffect`를 통해 user 정보 확인 후 로그인을 판별해주는 `isLoggedIn`을 true로 변경한 후, `userObj`를 authService에 있는 것으로 업데이트 시켜준다. 
```js
useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          photoURL: user.photoURL,
          updateProfile: (args) => user.updateProfile(args)
        });
      } else {
        setIsLoggedIn(false)
      }
    })
  }, []);
```

- 로그아웃 :
```js
  const onLogOutClick = async () => {
    await authService.signOut()
    navigate('/')
    window.location.reload()
  }
```
위와 같이 로그아웃 코드 작성 후, app바에 있는 '로그아웃'클릭 시 동작하게 함.
- 

### `Router`
 

- 로그인, 회원가입 `유효성 검사` 기능 (ex. 비밀번호가 틀렸습니다. 올바른 형식의 이메일을 입력하세요.) 
- 개인정보 수정, 본인이 쓴 게시물 모아보기 기능(MyPage)
- `도로명 주소 API`를 이용한 간편한 주소 입력 기능 (회원가입, MyPage)
- 로그인/로그아웃 전후 출력 페이지 다르게 설정(INFO, Doggitter 글쓰기 등)
- 로그인/로그아웃 전후 사용 기능 다르게 설정 (아바타 버튼 클릭 시 - 로그인 전에는 로그인, 회원가입 / 로그인 후에는 마이프로필, 로그아웃)


### `Design`
🌸 담당자 : 김혜연, 서형원, 김소희 🌸

- `테마 컬러` 설정 : primary : 오렌지 secondary : 블랙. 
각 메인 테마 컬러 별 main, light, dark 색상 별도 설정으로 조화롭게 컬러 배치 
- 메인 컨셉 설정 : 심플 + 친근함
- 가독성 좋은 메인화면, 각 요소를 개별 컴포넌트로 구성 (배너 + 소개 + 반려견칼럼 + 애견핫플레이스 +광고 배너)
- 모든 페이지 `반응형` (PC, 태블릿, 모바일 호환)
- 네비바 반응형 (모바일 환경으로 접속시 메뉴가 리스트아이콘으로 축소됨)
- 로그인 시 네비바 아바타에 사용자 이름 출력 (로그아웃 상태에서는 랜덤 강아지 사진)
- 로그인/메인화면 재접속 시 배너 이미지 랜덤으로 출력 (총 7개의 강아지 이미지)
- 전 페이지에 스크롤 업 버튼 추가(숨겨져 있다가 화면을 일정 길이만큼 내리면 자동으로 생성됨)

### `Doggitter(CRUD)`
🌸 담당자 : 김혜연 🌸

- 아바타 + 사진 + 제목 + 내용 + 좋아요 + 댓글기능 등 SNS 기본 기능 모두 탑재
- `게시글 작성`하기 : 제목, 내용, 이미지 첨부파일 입력시 리스트에 게시물 추가
- 게시글 `수정`, `삭제` : 본인 게시글 Edit, Delete 가능 (타인 게시글 불가)
- `좋아요` : ID당 한 개만 가능. 자동 카운트
- `코멘트` : 각 게시글별 코멘트 작성 가능. 본인 코멘트일 경우에만 삭제 가능 (useParams)

### `Dog MBTI(심리테스트)`
🌸 담당자 : 서형원 🌸

- 문항, 문답, 이미지를 개별 파일에 있는 `배열, 객체`로 저장한 후 페이지에서 불러와서 보여주는 기능
- 각 문항별로 할당된 점수를 `카운트`한 후, 최종 점수에 따라 16가지의 `각각 다른 결과값과 이미지` 도출 (useParams)
- 진행 상황에 따라 바뀌는 `프로그레스 바` 구현
- 테스트 페이지별 썸네일, 결과 내용이 함께 나오는 `카카오톡 공유하기` 기능

### `INFO(지도 API)`
🌸 담당자 : 김소희 🌸

- 회원가입 시 입력한 주소 정보를 기반으로, 내 근처에 있는 강아지 산책 가능 공원을 확인하는 기능
- 지도에 주변 산책 가능 공원이 `마크`됨 
- 지도 옆에는 공원 이름, 정보, 위치, 전화번호가 표시된 `텍스트 리스트`가 있어 간편하게 정보 파악 가능
- 스크롤 시 지도 `확대,축소` 기능을 on/off 할 수 있는 버튼
- 회원가입 시 입력한 주소뿐만 아니라, 직접 위치정보를 입력하는 방식으로도 검색 가능
- 회원 정보 변경시 자동으로 지도 업데이트 됨

<br />


## ✔️ 특장점

- 간편한 회원가입, 로그인만으로 쉽게 SNS 활동을 할 수 있음. 😎
- 게시글 업로드, 코멘트, 좋아요 기능으로 사람들과 소통 가능 
- 사람들의 흥미를 끌 수 있는 심리테스트 페이지와 카카오톡 공유하기 기능이 구현되어 있어, 사이트 홍보 효율적으로 가능 
- 클릭 한 번으로 강아지 산책 공원 정보를 한 눈에 확인할 수 있음.
- 웹뿐만 아니라 모바일에서도 가독성이 좋은 반응형 홈페이지
- 색깔, 디자인 컨셉이 잘 잡혀있는 홈페이지

<br />
<br />

## ✔️ 프로젝트 팀장으로서 담당한 역할
- 회의록 올리기
- 주제 선정
- 기획안 발표, 최종 시연 발표
- 코드, 파일 정리
- 깃헙을 통해 깃 브랜치 관리



## ✔️ 사용한 기술, 프로젝트를 통해 얻은 지식
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) 파이어스토어, 파이어베이스 Auth 사용법 

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) 버전 관리

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) 브랜치를 통한 협업, merge등 협업에 필요한 주요 기능 실습

![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) 디자인 라이브러리 이용

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAF) JSX 작동원리, React hooks(useState, useEffect),  다양한 라이브러리 설치 / 활용법, 이용 중 나타나는 다양한 오류 핸들링

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 리액트 라우터, 링크 사용법

![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white) Adobe Photoshop을 이용한 다양한 이미지 작업, 배너 작성



<br />
<br />
