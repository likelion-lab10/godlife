# 공통 컴포넌트

- BackButton
- CreateChallengeButton
- Navbar
- PageTitle
- SubmitButton
- TextInput

---

## BackButton
뒤로가기 버튼 컴포넌트 입니다.  
버튼 클릭 시 reactRouterDom의 useNavigate 훅을 사용하여 이전 페이지로 돌아갈 수 설정해 놓았습니다.  
별 다른 props나 입력사항이 필요 없고, absolute를 사용하여 left 28px, top 80px 고정해 놓았습니다.

```JSX
import { BackButton } from 'components';

export default function SearchPage() {
  ...
  return (
    <>
      ...
      <BackButton />
      ...
    </>
  )
}
```
![스크린샷 2023-03-20 오후 1 29 54](https://user-images.githubusercontent.com/83108580/226247376-f7ca800f-4f27-48be-814a-4ba2fd116576.png)

---

## CreateChallengeButton
챌린지 모집 글쓰기 페이지로 이어지는 버튼 컴포넌트 입니다.  
버튼 클릭 시 reactRouterDom의 useNavigate 훅을 사용하여 recruit 페이지로 이동할 수 있게끔 설정해 놓았습니다.  
뒤로가기 버튼과 마찬가지로 별 다른 props나 입력사항 필요 없이, absolute를 사용하여 right 28px, top 80px 고정해 놓았습니다.

```JSX
import { CreateChallengeButton } from 'components';

export default function SearchPage() {
  ...
  return (
    <>
      ...
      <CreateChallengeButton />
      ...
    </>
  )
}
```
![스크린샷 2023-03-20 오후 1 30 30](https://user-images.githubusercontent.com/83108580/226247433-7c3213ea-190c-4dbc-b0fa-a2d363fd4873.png)

---

## NavBar
하단 네비게이션 바 컴포넌트 입니다.  
너비 390px, 높이 68px, absolute를 사용하여 중앙 하단 정렬로 지정해놓았고,  
각각 버튼 클릭 시 reactRouterDom의 useNavigate 훅을 사용하여 페이지 전환이 가능하게끔 만들었습니다.

```JSX
import { NavBar } from 'components';

export default function SearchPage() {
  ...
  return (
    <>
      ...
      <NavBar />
      ...
    </>
  )
}
```
![스크린샷 2023-03-20 오후 1 31 37](https://user-images.githubusercontent.com/83108580/226247560-2f68e429-8ff6-4c75-98c1-3416356b975b.png)

---

## PageTitle
로그인, 회원가입, 챌린지 인증 페이지 등에 들어가는 제목 컴포넌트 입니다.  
아래 예시 처럼 children으로 텍스트를 넘겨주면 중앙정렬 및 텍스트 사이즈가 조정된 상태로 화면에 출력됩니다.
```JSX
import { PageTitle } from 'components';

export default function LoginPage() {
  ...
  return (
    <>
      <PageTitle>로그인</PageTitle>
      ...
    </>
  )
}
```
![스크린샷 2023-03-20 오후 1 35 29](https://user-images.githubusercontent.com/83108580/226247974-3612fe9c-6db1-46db-b6fa-6e85d81f8f21.png)

---

## SubmitButton
로그인, 회원가입, 대시보드 페이지 등에 들어가는 버튼 컴포넌트 입니다.  
type, disabled, name, 그리고 ...restProps를 받아 button 태그에 부여해줍니다.
- type(필수값) : 버튼의 타입을 지정해 줍니다 (ex. submit, button 등).
- disabled : true/false의 boolean 값을 넘겨주어 버튼의 활성화 비활성화 여부를 설정하고, 사용자가 비활성화 된 버튼을 인식할 수 있도록 스타일이 변경됩니다. (기본값 : false)
- name : 버튼의 스타일을 결정합니다. social, mini 두 가지의 텍스트 값을 넘겨주어 버튼의 스타일을 바꿀 수 있습니다.
  - social : 소셜 로그인 버튼 스타일로 변경할 수 있습니다.
  - mini : 대시보드의 참여하기, 삭제하기 버튼 등과 같은 작은 사이즈의 버튼 스타일로 변경할 수 있습니다.
  - 기본값(아무것도 입력하지 않을 시) : 일반적으로 여러 페이지에서 사용되는 primary 색상의 버튼입니다.

- case 1
```JSX
import { SubmitButton } from 'components';

export default function CertifiedPage() {
  ...
  return (
    <>
      ...
      <SubmitButton type="button">인증하기</SubmitButton>
    </>
  )
}
```
![스크린샷 2023-03-20 오후 1 33 29](https://user-images.githubusercontent.com/83108580/226247748-d4f40abe-6e27-4858-97ae-6aa05388969c.png)

- case 2
```JSX
import { SubmitButton } from 'components';

export default function DashboardPage() {
  ...
  return (
    <>
      ...
      <SubmitButton type="submit" name='mini'>참여하기</SubmitButton>
    </>
  )
}
```
![스크린샷 2023-03-20 오후 1 34 02](https://user-images.githubusercontent.com/83108580/226247794-deabe494-5c38-413e-adde-5f7b56f6d218.png)

- case 3
```JSX
import { SubmitButton } from 'components';

export default function RegisterPage() {
  ...
  return (
    <>
      ...
      <SubmitButton type="submit" disabled={true}>회원가입</SubmitButton>
    </>
  )
}
```
![스크린샷 2023-03-20 오후 1 34 38](https://user-images.githubusercontent.com/83108580/226247875-dc8e3484-bb83-492f-9b9d-2e16dc98ffb6.png)

---

## TextInput
로그인 회원가입 페이지에 사용되는 input 컴포넌트 입니다.  
`<label>`태그와 `<input>`태그가 구성되어 있습니다.  
label 태그는 sr-only라는 tailwindcss 스타일을 부여하여 웹 접근성을 고려하였습니다.  
props로는 type, name, children, ...restProps를 받습니다.
- type : input의 타입을 지정합니다. (ex. text, email, password 등)
- name : input 태그의 name을 지정합니다.
- children : label 태그의 텍스트 값을 지정합니다.

```JSX
import { TextInput } from 'components';

export default function RegisterPage() {
  ...
  return (
    <>
      ...
      <TextInput type='text' name='username' placeholder='이름'>이름</TextInput>
      ...
    </>
  )
}
```
![스크린샷 2023-03-20 오후 1 36 48](https://user-images.githubusercontent.com/83108580/226248095-72952641-1dbe-4145-b44e-efd3bb458724.png)
