import { SubmitButton } from 'components'
import { auth } from 'fbase/auth';
import { useCreateAuthUser } from 'fbase/firestore';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function FacebookLogin({onError}) {

  const { createAuthUser } = useCreateAuthUser();
  const navigate = useNavigate();

  const facebookLoginHandler = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (data) => {
        await createAuthUser(data.user);
        navigate('/');
      })
      .catch((error) => onError('중복된 이메일 입니다.'))
  };

  return (
    <SubmitButton type="button" name="social" onClick={facebookLoginHandler}>
      <img className="mr-2 w-5 h-5" src={require('../../assets/facebook.png')} alt="페이스북 로그인" />
      페이스북으로 시작하기
    </SubmitButton>
  )
}

export default FacebookLogin;
