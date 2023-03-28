import { isEmail } from 'utils';
import debounce from 'lodash.debounce';
import { useSignUp } from 'fbase/auth';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateAuthUser } from 'fbase/firestore';
import { ReactComponent as Loading } from '../assets/loading.svg';
import { BackButton, PageTitle, SubmitButton, TextInput } from 'components';

const initialFormState = {
  name: '',
  nickname: '',
  email: '',
  password: '',
  passwordConfirm: '',
}
function RegisterPage() {

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
        <Loading />
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
      <PageTitle>회원가입</PageTitle>
      <BackButton />
      <form className="flex flex-col justify-center items-center gap-11 mt-12" onSubmit={onSubmitHandler} >
        <TextInput name="name" placeholder="이름" onChange={onInputHandler}>
          이름
        </TextInput>
        <TextInput name="nickname" placeholder="닉네임" onChange={onInputHandler}>
          닉네임
        </TextInput>
        <TextInput name="email" type="email" placeholder="이메일" onChange={onInputHandler}>
          이메일
        </TextInput>
        <TextInput name="password" type="password" placeholder="비밀번호" onChange={onInputHandler}>
          비밀번호
        </TextInput>
        <TextInput name="passwordConfirm" type="password" placeholder="비밀번호 확인" onChange={onInputHandler}>
          비밀번호 확인
        </TextInput>
        <div className='flex'>
          <input id="1" className='mr-2' type='checkbox' name='개인정보수집동의' onClick={onClickHandler} />
          <label id="1">개인정보 수집에 대한 동의</label>
        </div>
        <p className="text-rose-600 mt-12">{errorMessage}</p>
        <SubmitButton disabled={disabled}>회원가입</SubmitButton>
      </form>
    </>
  )
}

export default RegisterPage;