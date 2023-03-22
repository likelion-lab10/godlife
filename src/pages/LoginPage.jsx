import { useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { useCreateAuthUser } from 'fbase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { useSignIn, useAuthState, auth } from 'fbase/auth';
import { PageTitle, SubmitButton, TextInput } from "components";
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
  const { createAuthUser } = useCreateAuthUser();

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

  const googleLoginHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (data) => {
        await createAuthUser(data.user);
        navigate('/');
      })
      .catch((error) => {
        setErrorMessage('이미 사용중인 이메일 입니다.');
      });
  };

  const facebookLoginHandler = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (data) => {
        await createAuthUser(data.user);
        navigate('/');
      })
      .catch((error) => {
        setErrorMessage('이미 사용중인 이메일 입니다.');
      });
  };

  useEffect(() => {
    if (signInError || loginError) setErrorMessage('등록되지 않은 이메일 입니다.');
  }, [signInError, loginError]);

  if (isLoading) {
    return (
      <div role='alert' className='flex justify-center items-center h-screen'>
        <img src="assets/loading.svg" alt="로딩중" />
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
        <SubmitButton type="button" name="social">
          <img className="mr-2 w-6 h-6" src="assets/kakao.png" alt="카카오톡 아이콘" />
          카카오로 시작하기
        </SubmitButton>
        <SubmitButton type="button" name="social" onClick={googleLoginHandler}>
          <img className="mr-2 w-5 h-5" src="assets/google.png" alt="구글 아이콘" />
          구글로 시작하기
        </SubmitButton>
        <SubmitButton type="button" name="social" onClick={facebookLoginHandler}>
          <img className="mr-2 w-5 h-5" src="assets/facebook.png" alt="페이스북 아이콘" />
          페이스북으로 시작하기
        </SubmitButton>
      </div>
    </>
  )
}

export default LoginPage;