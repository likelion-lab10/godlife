import { auth } from 'fbase/auth';
import { useEffect } from 'react';
import { SubmitButton } from 'components';
import { useNavigate } from 'react-router-dom';
import { useCreateAuthUser } from 'fbase/firestore';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

function KakaoLogin() {
  const { Kakao, location } = window;
  const { createAuthUser } = useCreateAuthUser();
  const navigate = useNavigate();

  if(!Kakao.isInitialized()) {
    Kakao.init(process.env.REACT_APP_KAKAO_REST_API_KEY);
  }

  const redirectUri = "http://localhost:3000";
  const scope = "profile_nickname,profile_image,account_email";
  useEffect(() => {
    
    const authorizeCode = location.search.split("=")[1];
    if(authorizeCode !== undefined) {
      const body = {
        grant_type: "authorization_code",
        client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
        redirect_uri: redirectUri,
        code: authorizeCode
      }
  
      const queryStringBody = Object.keys(body)
        .map(k => encodeURIComponent(k) + "=" + encodeURI(body[k]))
        .join("&");
  
      (async () => {
        const response = await fetch("https://kauth.kakao.com/oauth/token", {
          method: "POST",
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          body: queryStringBody,
        })
        const kakaoTokenRes = await response.json();
        Kakao.Auth.setAccessToken(kakaoTokenRes.access_token);
        const kakaoUserRes = await Kakao.API.request({ url: '/v2/user/me' });
        const { email, profile } = kakaoUserRes.kakao_account;
        try {
          await signInWithEmailAndPassword(auth, email, kakaoUserRes.id);  
        } catch(error) {
          const userCredentials = await createUserWithEmailAndPassword(auth, email, kakaoUserRes.id);
          const { user } = userCredentials;
          if(profile.nickname && user) await updateProfile(user, { displayName: profile.nickname });
          await createAuthUser(user);
        }
        navigate('/');
      })();
    }
  }, [Kakao.API, Kakao.Auth, createAuthUser, location.search, navigate])

  const kakaoLoginHandler = () => {
    Kakao.Auth.authorize({
      redirectUri,
      scope
    })
  }

  return (
    <SubmitButton type="button" name="social" onClick={kakaoLoginHandler}>
      <img className="mr-2 w-6 h-6" src={require('../../assets/kakao.png')} alt='카카오톡 로그인'/>
      카카오로 시작하기
    </SubmitButton>
  )
}

export default KakaoLogin;
