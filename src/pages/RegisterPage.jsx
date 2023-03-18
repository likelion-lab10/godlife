import { isEmail } from 'utils';
import debounce from 'lodash.debounce';
import { useSignUp } from 'fbase/auth';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateAuthUser } from 'fbase/firestore';
import { FormInput, SubmitButton } from 'components';

const initialFormState = {
  name: '',
  nickname: '',
  email: '',
  password: '',
  passwordConfirm: '',
}

export default function RegisterPage() {

  let navigate = useNavigate();

  const { signUp, isLoading, error } = useSignUp();
  const { createAuthUser } = useCreateAuthUser();

  const formStateRef = useRef(initialFormState);
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { name, nickname, email, password, passwordConfirm } = formStateRef.current;

    if (!name || name.trim().length < 2) {
      setErrorMessage('이름은 2글자 이상 입력해야 합니다.');
      return;
    } else if (!nickname || nickname.trim().length < 2) {
      setErrorMessage('닉네임은 2글자 이상 입력해야 합니다.');
      return;
    } else if (!isEmail(email)) {
      setErrorMessage(`이메일 형식에 맞지 않는 메일 주소입니다.`);
      return;
    } else if (!password || password.trim().length < 10) {
      setErrorMessage('비밀번호를 10자 이상 입력해주세요.');
      return;
    } else if (!Object.is(password, passwordConfirm)) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    } else {
      setErrorMessage('');
    }

    const user = await signUp(email, password, name);
    await createAuthUser(user);
    await navigate('/login');
  }

  const onInputHandler = debounce((e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  }, 300);

  const onClickHandler = (e) => {
    setDisabled(!disabled);
  }

  if (isLoading) {
    return (
      <div role='alert' className='flex justify-center items-center h-screen'>
        <img src="assets/loading.svg" alt="로딩중" />
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex flex-col justify-center items-center h-screen gap-12'>
        <div role='alert' className="text-xl">이미 사용중인 이메일 입니다.</div>
        <SubmitButton disabled={false} onClick={() => navigate('/login')}>로그인 페이지로 이동</SubmitButton>
      </div>
    )
  }

  return (
    <>
      <h2 className='text-h1 text-center mt-20 mb-12'>회원가입</h2>
      <button className='text-h1 absolute top-20 left-12 text-gray' onClick={() => navigate('/login')}>&times;</button>
      <form className="flex flex-col justify-center items-center gap-11" onSubmit={onSubmitHandler} >
        <FormInput
          name="name"
          label="이름"
          placeholder="이름"
          onChange={onInputHandler}
        />
        <FormInput
          name="nickname"
          label="닉네임"
          placeholder="닉네임"
          onChange={onInputHandler}
        />
        <FormInput
          name="email"
          type="email"
          label="이메일"
          placeholder="이메일"
          onChange={onInputHandler}
        />
        <FormInput
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호"
          onChange={onInputHandler}
        />
        <FormInput
          name="passwordConfirm"
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호 확인"
          onChange={onInputHandler}
        />
        <div className='flex'>
          <FormInput
            name="개인정보수집동의"
            type="checkbox"
            label="개인정보 수집에 대한 동의"
            srOnly={false}
            onClick={onClickHandler}
          />
        </div>
        <p className="text-rose-600 mt-12">{errorMessage}</p>
        <SubmitButton disabled={disabled}>회원가입</SubmitButton>
      </form>
    </>
  )
}
