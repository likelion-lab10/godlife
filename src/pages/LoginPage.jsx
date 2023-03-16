
import { FormInput, SubmitButton } from "components";
import { Link } from 'react-router-dom';

export default function LoginPage() {


  return (
    <>
      <h1 className="text-center text-h1 mt-20 mb-12">로그인</h1>
      <form className="flex flex-col gap-10 justify-center items-center">
        <FormInput name="email" type="email" label="이메일" placeholder="이메일" />
        <FormInput name="password" type="password" label="비밀번호" placeholder="비밀번호" />
        <SubmitButton disabled={false} className="mt-6">로그인</SubmitButton>
      </form>
      <Link className="absolute mt-4 text-gray border-b left-1/2 -translate-x-1/2" to='/register'>회원가입</Link>
      <div className="flex flex-col justify-center items-center gap-6 mt-40">
        <SubmitButton className="flex justify-center items-center" social={true}>
          <img className="mr-2 w-5 h-5" src="assets/kakao.png" alt="카카오톡 아이콘" />
          카카오로 시작하기
        </SubmitButton>
        <SubmitButton className="flex justify-center items-center" social={true}>
          <img className="mr-2 w-5 h-5" src="assets/google.png" alt="구글 아이콘" />
          구글로 시작하기
        </SubmitButton>
        <SubmitButton className="flex justify-center items-center" social={true}>
          <img className="mr-2 w-5 h-5" src="assets/facebook.png" alt="페이스북 아이콘" />
          페이스북으로 시작하기
        </SubmitButton>
      </div>
    </>
  )
}