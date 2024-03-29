import debounce from "lodash.debounce";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useSignIn, useAuthState } from 'fbase/auth';
import { ReactComponent as Loading } from 'assets/loading.svg';
import { PageTitle, SubmitButton, TextInput, GoogleLogin, FacebookLogin, KakaoLogin } from "components";

const initialFormState = {
  email: '',
  password: '',
}

function LoginPage() {
  const navigate = useNavigate();
  const formRef = useRef(initialFormState);
  const [ errorMessage, setErrorMessage ] = useState('');
  const { signIn, isLoading, error:signInError } = useSignIn();
  const { user, error:loginError } = useAuthState();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { email, password } = formRef.current;
    await signIn(email, password);
    if (user) navigate('/');
  }

  const onInputHandler = debounce((e) => {
    const { name, value } = e.target;
    formRef.current[name] = value;
  }, 300);

  useEffect(() => {
    if (signInError || loginError) setErrorMessage('등록되지 않은 이메일 입니다.');
  }, [signInError, loginError]);

  if (isLoading) {
    return (
      <div role='alert' className='flex justify-center items-center h-screen'>
        <Loading />
      </div>
    )
  }  

  return (
    <>
      <PageTitle>로그인</PageTitle>
      <form className="flex flex-col gap-10 justify-center items-center mt-11" onSubmit={onSubmitHandler}>
        <TextInput name="email" type="email" placeholder="이메일" onChange={onInputHandler}>
          이메일
        </TextInput>
        <TextInput name="password" type="password" placeholder="비밀번호" onChange={onInputHandler}>
          비밀번호
        </TextInput>
        {errorMessage ? <p className="text-red-600">{errorMessage}</p> : null}
        <SubmitButton type="submit" name="로그인">로그인</SubmitButton>
      </form>
      <Link className="absolute mt-4 text-gray border-b left-1/2 -translate-x-1/2" to='/register'>회원가입</Link>
      <div className="flex flex-col justify-center items-center gap-6 mt-40">
        <KakaoLogin />
        <GoogleLogin onError={setErrorMessage} />
        <FacebookLogin onError={setErrorMessage} />
      </div>
    </>
  )
}

export default LoginPage;