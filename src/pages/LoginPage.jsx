
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
    </>
  )
}