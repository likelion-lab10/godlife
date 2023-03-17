import { useRef } from "react";
import debounce from "lodash.debounce";
import { Link } from 'react-router-dom';
import { useSignIn, useAuthState, auth } from 'fbase/auth';
import { FormInput, SubmitButton } from "components";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const initialFormState = {
  email: '',
  password: '',
}

export default function LoginPage() {
  const formRef = useRef(initialFormState);
  const { signIn, isLoading } = useSignIn();
  const { user } = useAuthState();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { email, password } = formRef.current;
    await signIn(email, password);
    if (user) {
      console.log(user);
    }
  }

  const onInputHandler = debounce((e) => {
    const { name, value } = e.target;
    formRef.current[name] = value;
  }, 300);

  const googleLoginHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  if (isLoading) {
    return (
      <div role='alert' className='flex justify-center items-center h-screen'>
        <img src="assets/loading.svg" alt="로딩중" />
      </div>
    )
  }

  return (
    <>
      <h1 className="text-center text-h1 mt-20 mb-12">로그인</h1>
      <form className="flex flex-col gap-10 justify-center items-center" onSubmit={onSubmitHandler}>
        <FormInput name="email" type="email" label="이메일" placeholder="이메일" onChange={onInputHandler} />
        <FormInput name="password" type="password" label="비밀번호" placeholder="비밀번호" onChange={onInputHandler} />
        <SubmitButton disabled={false} className="mt-6">로그인</SubmitButton>
      </form>
      <Link className="absolute mt-4 text-gray border-b left-1/2 -translate-x-1/2" to='/register'>회원가입</Link>
      <div className="flex flex-col justify-center items-center gap-6 mt-40">
        <SubmitButton className="flex justify-center items-center" social={true}>
          <img className="mr-2 w-6 h-6" src="assets/kakao.png" alt="카카오톡 아이콘" />
          카카오로 시작하기
        </SubmitButton>
        <SubmitButton className="flex justify-center items-center" social={true} onClick={googleLoginHandler}>
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