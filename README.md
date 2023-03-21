<br>
<br>

![header](https://capsule-render.vercel.app/api?type=waving&color=0:E3DEDC,100:C3A6A0&height=180&section=header&text=God%20Life%20&fontSize=90&)

<br>

# 멋쟁이 사자처럼 🦁 React Project
> 삶이 달라질 수 있는 단 하나의 열쇠는 바로 습관이다.

[![NPM Version][npm-image]][npm-url]
<!--[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]-->

![](../header.png)

<p align="center">
  <br>
  <img src="https://user-images.githubusercontent.com/77651050/223636764-2aef2ccc-7ef9-4264-8d49-000254134314.jpg">
  <br>
</p>

<!--목차-->

<br>

## 프로젝트 소개

<p align="justify">
21일의 기적을 만들어주는 웹앱 프로젝트 입니다.
</p>

<p align="center">

</p>

<br>

## 기술 스택

| Tailwind | React |
| :--------: | :--------: | 
|   <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1625321458213/-layBQDv1.jpeg" width="50">     |   <img src="https://images.velog.io/images/namezin/post/a4780e7b-4d05-4b46-9ece-e745c49b6d58/react.png" width="50">    | 

<br>
## 공통 컴포넌트
# **공통 컴포넌트**

- BackButton
- CreateChallengeButton
- Navbar
- PageTitle
- SubmitButton
- TextInput

---

## **BackButton**

뒤로가기 버튼 컴포넌트 입니다.버튼 클릭 시 reactRouterDom의 useNavigate 훅을 사용하여 이전 페이지로 돌아갈 수 설정해 놓았습니다.별 다른 props나 입력사항이 필요 없고, absolute를 사용하여 left 28px, top 80px 고정해 놓았습니다.

```
import { BackButton } from 'components';

export default function SearchPage() {
  ...
  return (
    <>...
      <BackButton />...
    </>)
}

```

![https://user-images.githubusercontent.com/83108580/226247376-f7ca800f-4f27-48be-814a-4ba2fd116576.png](https://user-images.githubusercontent.com/83108580/226247376-f7ca800f-4f27-48be-814a-4ba2fd116576.png)

---

## **CreateChallengeButton**

챌린지 모집 글쓰기 페이지로 이어지는 버튼 컴포넌트 입니다.버튼 클릭 시 reactRouterDom의 useNavigate 훅을 사용하여 recruit 페이지로 이동할 수 있게끔 설정해 놓았습니다.뒤로가기 버튼과 마찬가지로 별 다른 props나 입력사항 필요 없이, absolute를 사용하여 right 28px, top 80px 고정해 놓았습니다.

```
import { CreateChallengeButton } from 'components';

export default function SearchPage() {
  ...
  return (
    <>...
      <CreateChallengeButton />...
    </>)
}

```

![https://user-images.githubusercontent.com/83108580/226247433-7c3213ea-190c-4dbc-b0fa-a2d363fd4873.png](https://user-images.githubusercontent.com/83108580/226247433-7c3213ea-190c-4dbc-b0fa-a2d363fd4873.png)

---

## **NavBar**

하단 네비게이션 바 컴포넌트 입니다.너비 390px, 높이 68px, absolute를 사용하여 중앙 하단 정렬로 지정해놓았고,각각 버튼 클릭 시 reactRouterDom의 useNavigate 훅을 사용하여 페이지 전환이 가능하게끔 만들었습니다.

```
import { NavBar } from 'components';

export default function SearchPage() {
  ...
  return (
    <>...
      <NavBar />...
    </>)
}

```

![https://user-images.githubusercontent.com/83108580/226247560-2f68e429-8ff6-4c75-98c1-3416356b975b.png](https://user-images.githubusercontent.com/83108580/226247560-2f68e429-8ff6-4c75-98c1-3416356b975b.png)

---

## **PageTitle**

로그인, 회원가입, 챌린지 인증 페이지 등에 들어가는 제목 컴포넌트 입니다.아래 예시 처럼 children으로 텍스트를 넘겨주면 중앙정렬 및 텍스트 사이즈가 조정된 상태로 화면에 출력됩니다.

```
import { PageTitle } from 'components';

export default function LoginPage() {
  ...
  return (
    <><PageTitle>로그인</PageTitle>...
    </>)
}

```

![https://user-images.githubusercontent.com/83108580/226247974-3612fe9c-6db1-46db-b6fa-6e85d81f8f21.png](https://user-images.githubusercontent.com/83108580/226247974-3612fe9c-6db1-46db-b6fa-6e85d81f8f21.png)

---

## **SubmitButton**

로그인, 회원가입, 대시보드 페이지 등에 들어가는 버튼 컴포넌트 입니다.type, disabled, name, 그리고 ...restProps를 받아 button 태그에 부여해줍니다.

- type(필수값) : 버튼의 타입을 지정해 줍니다 (ex. submit, button 등).
- disabled : true/false의 boolean 값을 넘겨주어 버튼의 활성화 비활성화 여부를 설정하고, 사용자가 비활성화 된 버튼을 인식할 수 있도록 스타일이 변경됩니다. (기본값 : false)
- name : 버튼의 스타일을 결정합니다. social, mini 두 가지의 텍스트 값을 넘겨주어 버튼의 스타일을 바꿀 수 있습니다.
    - social : 소셜 로그인 버튼 스타일로 변경할 수 있습니다.
    - mini : 대시보드의 참여하기, 삭제하기 버튼 등과 같은 작은 사이즈의 버튼 스타일로 변경할 수 있습니다.
    - 기본값(아무것도 입력하지 않을 시) : 일반적으로 여러 페이지에서 사용되는 primary 색상의 버튼입니다.
- case 1

```
import { SubmitButton } from 'components';

export default function CertifiedPage() {
  ...
  return (
    <>...
      <SubmitButton type="button">인증하기</SubmitButton></>)
}

```

![https://user-images.githubusercontent.com/83108580/226247748-d4f40abe-6e27-4858-97ae-6aa05388969c.png](https://user-images.githubusercontent.com/83108580/226247748-d4f40abe-6e27-4858-97ae-6aa05388969c.png)

- case 2

```
import { SubmitButton } from 'components';

export default function DashboardPage() {
  ...
  return (
    <>...
      <SubmitButton type="submit" name='mini'>참여하기</SubmitButton></>)
}

```

![https://user-images.githubusercontent.com/83108580/226247794-deabe494-5c38-413e-adde-5f7b56f6d218.png](https://user-images.githubusercontent.com/83108580/226247794-deabe494-5c38-413e-adde-5f7b56f6d218.png)

- case 3

```
import { SubmitButton } from 'components';

export default function RegisterPage() {
  ...
  return (
    <>...
      <SubmitButton type="submit" disabled={true}>회원가입</SubmitButton></>)
}

```

![https://user-images.githubusercontent.com/83108580/226247875-dc8e3484-bb83-492f-9b9d-2e16dc98ffb6.png](https://user-images.githubusercontent.com/83108580/226247875-dc8e3484-bb83-492f-9b9d-2e16dc98ffb6.png)

---

## **TextInput**

로그인 회원가입 페이지에 사용되는 input 컴포넌트 입니다.`<label>`태그와 `<input>`태그가 구성되어 있습니다.label 태그는 sr-only라는 tailwindcss 스타일을 부여하여 웹 접근성을 고려하였습니다.props로는 type, name, children, ...restProps를 받습니다.

- type : input의 타입을 지정합니다. (ex. text, email, password 등)
- name : input 태그의 name을 지정합니다.
- children : label 태그의 텍스트 값을 지정합니다.


## 구현 기능

### 회원가입
추가 예정

### 로그인
추가 예정

### 인증
추가 예정

### 필터 기능
추가 예정

### 검색 기능
추가 예정

<br>

## 사용 예제

스크린 샷과 코드 예제를 통해 사용 방법을 자세히 설명합니다.

_더 많은 예제와 사용법은 [Wiki][wiki]를 참고하세요._

<br>

## 환경 설정

<!--모든 개발 의존성 설치 방법과 자동 테스트 슈트 실행 방법을 운영체제 별로 작성합니다.-->

```sh
npm start
npm test
npm run build
```

<!--## 업데이트 내역

* 0.2.1
    * 수정: 문서 업데이트 (모듈 코드 동일)
* 0.2.0
    * 수정: `setDefaultXYZ()` 메서드 제거
    * 추가: `init()` 메서드 추가
* 0.1.1
    * 버그 수정: `baz()` 메서드 호출 시 부팅되지 않는 현상 (@컨트리뷰터 감사합니다!)
* 0.1.0
    * 첫 출시
    * 수정: `foo()` 메서드 네이밍을 `bar()`로 수정
* 0.0.1
    * 작업 진행 중-->
    
<br>

## 정보

밴치마킹 : 루티너리, 딸기마켓 시안, 챌린저스 앱, 인 아웃 앱, 트래커 앱 <br />
개발 가이드 : [피그마 링크](https://www.figma.com/file/p6blGsv8wntHhZWTr1F8XN/%EA%B0%9C%EB%B0%9C-%EA%B0%80%EC%9D%B4%EB%93%9C?node-id=0-1&t=wA07Y1TXlZ2Odwdm-0)<br />
copyright : 멋쟁이 사자처럼 4기 파이널 프로젝트 lab10(이로운, 전하준, 윤성민, 현지수, 심유선)<br />

<!--이름 – [@트위터 주소](https://twitter.com/dbader_org) – 이메일주소@example.com

XYZ 라이센스를 준수하며 ``LICENSE``에서 자세한 정보를 확인할 수 있습니다.

[https://github.com/yourname/github-link](https://github.com/dbader/)-->


<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/likelion-lab10/godlife/wiki
