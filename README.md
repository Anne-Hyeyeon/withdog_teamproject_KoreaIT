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
유효성 검사 : 간단하게 만들 방법이 없을까

## ✔️ 내가 구현한 기능

### `Auth`

#### `파이어베이스`를 활용한 로그인, 로그아웃, 회원가입, 회원정보 관리 기능
- 파이어베이스 초기 세팅 : auth, firestore, storage를 import, api 키 저장. import 한 것들을 각각 authService, dbService, storageService로 expert함.  정보를 담은 파일 세팅
- 회원가입 : 회원가입 정보를 모두 입력시, `createUserWithEmailAndPassword`로 계정 생성 후 `updateProfile`로 input에 입력된 내용으로 회원 정보 업데이트. 
- 회원가입 후 `useNavigate`이용해 초기 화면으로 이동.
- 초기화면 : 화면 로딩시 authService에 저장된 사용자 정보를 불러와  `userObj`라는 객체에 저장. 

- 초기 화면 useEffect 코드
 user 정보 확인 후 -> 로그인을 판별해주는 `isLoggedIn`을 true로 변경한 후, `userObj`를 authService에 있는 것으로 업데이트 시켜준다. 
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


- 로그아웃 : 아래와 같이 `로그아웃` 코드 작성 후, app바에 있는 '로그아웃'클릭 시 동작하게 함.
```js
  const onLogOutClick = async () => {
    await authService.signOut()
    navigate('/')
    window.location.reload()
  }
```
- 유효성 검사 : 🌻로그인, 회원가입 `유효성 검사` 기능 (ex. 비밀번호가 틀렸습니다. 올바른 형식의 이메일을 입력하세요.) : 파이어베이스의 공식 도큐먼트를 참고해 특정 error가 일어날 시 code가 모두 string으로 불러와진다는 내용을 발견함. 이를 이용해 간단히 `유효성 검사`를 진행하는 코드 작성
``` js
 const onSubmit= async (event)=>{
        event.preventDefault()
        if (email !== "" && password !== "") {
          try {
            await authService.signInWithEmailAndPassword(email,password);
            navigate('/')
            window.location.reload()
          } catch (error) {
            console.log(error);
            const errorCode = [
              'auth/user-disabled',
              'auth/user-not-found',
              'auth/wrong-password',
              'auth/invalid-email',
              'auth/invalid-password'
            ]
            const errorAlertMsg = [
              '등록되어 있지 않은 사용자입니다.',
              '등록되어 있지 않은 사용자입니다.',
              '패스워드가 틀립니다.',
              '올바른 형식의 이메일 주소를 입력하세요',
              '패스워드를 올바르게 입력하세요.'
            ]
            console.log(error.code)
            for (const i in errorCode) {
              if (error.code === errorCode[i]) {
                alert(errorAlertMsg[i])
          }
        }
      }
    } else {
      alert('모든 항목을 입력하세요.')
    }
  }
  ````
매우 불안정한 형태의 `유효성 검사` 형식이지만, 구글링을 해도 위와 같은 방식으로 간단하게 유효성검사를 구현한 사례는 없었다. 실 사용보다는, 도전에 의의를 뒀던 기능

[유효성 검사를 구현하기 위해 참고한 문서] (https://firebase.google.com/docs/auth/admin/errors)
- 로그인 유무에 따른 기능, 페이지 차별화: user 정보 유무에 따라(로그인 상태에 따라) `랜딩 페이지를 다르게 설정`함. 로그인을 하면 로그아웃 상태와는 다르게 네비바에 이름이 담긴 `아바타`가 생성된다. 또한 각 페이지 활동시 사용자 정보를 그대로 가져와 사용할 수 있다. (INFO, Doggitter 글쓰기 등)
페이지뿐만 아니라 네비바에 있는 아바타 `Onclick`이벤트도 달라진다.
- 마이페이지 : 개인 정보를 수정 후 업데이트 할 수 있는 페이지. 회원가입 떄 활용하는 updateProfile 파이어베이스 메소드를 이용해, 같은 방식으로 회원 정보를 수정할 수 있는 페이지를 구현했다.
```js
const onSubmit= async(event)=>{
    event.preventDefault();
    if(userObj.displayName !== newDisplayName || userObj.photoURL !== newRegion){
      await userObj.updateProfile({
        displayName: newDisplayName,
        photoURL:newRegion
      })
      refreshUser()
    }
    alert('수정되었습니다.');
  }
```

<br />

### React Router
- 페이지 이동 : React `Router`를 이용해 각 페이지를 url을 통해 이동할 수 있게 세팅함. 

- `Link to` 이용해서 페이지 이동.

🌼 V6 : 기존 V5와 다른 점 (Switch 없어지고 Routes로 변경, 상대 경로 표현 방식 useHistory 대신 useNavigate의 사용 등)을 숙지하는 게 힘들었음. 구글에 V5 버전으로 짜여져 있는 코드가 많았고, 이를 V6와 비교하며 공부하는 과정이 재미있었음!

<br>

```js
return(
    <>
    {isLoggedIn && <Home userObj={userObj}/>}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<MainLoggedIn />} />
            <Route path="/mainloggedin" element={<MainLoggedIn userObj={userObj}/>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/test" element={<Test />} />
            <Route path="/info" element={<Info />} />
            <Route path="/login" element={<LogIn />} /> 
            <Route path="/signup" element={<SignUp />} />  
          </>
        ) : (
          <>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/test" element={<Test />} />
            <Route path="/info" element={<Info />} />
            <Route path="/login" element={<LogIn />} /> 
            <Route path="/signup" element={<SignUp />} />  
          </>
        )}
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </>
  )
  ```
  🌼 내가 작성했던 MainRouter.js 파일. 우리 홈페이지를 관통하는 라우터이다. 로그인 상태에 따라 로딩되는 페이지와 이동 경로를 다르게 하고 싶어 시도한 방법이지만... 다시 보니 매우 어설프다는 게 한눈에 느껴진다. 1개월 안에 반드시 보완할 것이다.



### `Design`
- MUI 라이브러리 활용 : MUI의 컴포넌트를 이용해 홈페이지를 통일성 있고 감각있게 만드려고 노력했음.

- Theme : MUI `theme` 기능을 이용한 테마 컬러 설정 : 색상을 요소별로 개별지정 하지 않고, 미리 theme파일에 저장되어 있는 걸 불러와서 사용했음.

- 컨셉 : primary 오렌지 secondary 블랙. 
각 메인 테마 컬러 별 main, light, dark 색상 별도 설정으로 조화롭게 컬러 배치, 강아지 커뮤니티답게 심플 + 친근함 강조 

- `반응형` : 모든 페이지 PC, 태블릿, 모바일 호환되는 반응형으로 제작됨. `MUI`컴포넌트 최대한 활용해서, 작은 요소까지도 xs(가장 작은 화면, 모바일), ml(중간 화면:태블릿), lg(pc 화면)별로 설정과 형태를 달리해서 사용함.
🌼 반응형 홈페이지를 만드는 건 완전 힘들었지만, 만든 후 통일성 있게 작동하는 웹사이트를 보니 완전 뿌듯했다!

- `반응형 네비바` : 모바일 환경으로 접속 시, 메뉴가 리스트 아이콘으로 축소됨.
- 기타 : 메인화면 접속 시 7개의 강아지 이미지 중 랜덤 이미지 출력. 전 페이지 스크롤 업 버튼 추가.


### `Doggitter(CRUD)`
🌸 담당자 : 김혜연 🌸

- 아바타 + 사진 + 제목 + 내용 + 좋아요 + 댓글기능 등 SNS 기본 기능 모두 탑재
- `게시글 작성`하기 : 제목, 내용, 이미지 첨부파일 입력시 리스트에 게시물 추가
- 게시글 `수정`, `삭제` : 본인 게시글 Edit, Delete 가능 (타인 게시글 불가)
- `좋아요` : ID당 한 개만 가능. 자동 카운트
- `코멘트` : 각 게시글별 코멘트 작성 가능. 본인 코멘트일 경우에만 삭제 가능 (useParams)

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
