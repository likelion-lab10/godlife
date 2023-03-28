import { auth } from 'fbase/auth';
import { SubmitButton } from 'components';
import { useNavigate } from 'react-router-dom';
import { useCreateAuthUser } from 'fbase/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function GoogleLogin({onError}) {

  const { createAuthUser } = useCreateAuthUser();
  const navigate = useNavigate();

  const googleLoginHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (data) => {
        await createAuthUser(data.user);
        navigate('/');
      })
      .catch((error) => onError('중복된 이메일 입니다.'))
  };

  return (
    <SubmitButton type="button" name="social" onClick={googleLoginHandler}>
      <img src={require('../../assets/google.png')} alt="구글 로그인" className="mr-2 w-5 h-5" />
      구글로 시작하기
    </SubmitButton>
  )
}

export default GoogleLogin;
