import { useRef } from 'react';
import { isEmail } from 'utils';
import debounce from 'lodash.debounce';
import { useSignUp } from 'fbase/auth';
import { useCreateAuthUser } from 'fbase/firestore';
import { FormInput, SubmitButton, Header } from 'components';

const initialFormState = {
  name: '',
  nickname: '',
  email: '',
  password: '',
  passwordConfirm: '',
}

export default function RegisterPage() {

  const { signUp } = useSignUp();
  const { createAuthUser } = useCreateAuthUser();

  const formStateRef = useRef(initialFormState);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { name, nickname, email, password, passwordConfirm } = formStateRef.current;

    if (!name || name.trim().length < 2) {
      console.error('이름은 2글자 이상 입력해야 합니다.');
      return;
    }

    if (!nickname || nickname.trim().length < 2) {
      console.error('닉네임은 2글자 이상 입력해야 합니다.');
      return;
    }

    if (!isEmail(email)) {
      console.error('이메일 형식에 맞지 않는 메일 주소입니다. 다시 입력해 주세요.');
      return;
    }

    if (!password || password.trim().length < 10) {
      console.error('비밀번호를 10자 이상 입력해주세요.');
      return;
    }

    if (!Object.is(password, passwordConfirm)) {
      console.error('비밀번호가 일치하지 않습니다.');
      return;
    }

    const user = await signUp(email, password, name);
    await createAuthUser(user);
  }

  const onInputHandler = debounce((e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  }, 300);

  return (
    <>
      <Header>회원가입</Header>
      <form className="flex flex-col justify-center items-center gap-12" onSubmit={onSubmitHandler} >
        <FormInput name="name" type="text" placeholder="이름" label="이름" srOnly={true} onChange={onInputHandler} />
        <FormInput name="nickname" type="text" placeholder="닉네임" label="닉네임" srOnly={true} onChange={onInputHandler} />
        <FormInput name="email" type="email" placeholder="이메일" label="이메일" srOnly={true} onChange={onInputHandler} />
        <FormInput name="password" type="password" placeholder="비밀번호" label="비밀번호" srOnly={true} onChange={onInputHandler} />
        <FormInput name="passwordConfirm" type="password" placeholder="비밀번호 확인" label="비밀번호 확인" srOnly={true} onChange={onInputHandler} />
        <SubmitButton mt="mt-10" text="회원가입" />
      </form>
    </>
  )
}
