import { SubmitButton } from 'components';
import { useEffect } from 'react';

export default function KakaoLogin() {
  const { Kakao, location } = window;

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
        const res = await response.json();
        Kakao.Auth.setAccessToken(res.access_token);
        Kakao.API.request({
          url: '/v2/user/me',
        })
          .then((response) => {
            const {kakao_account} = response;
            console.log(response.id, kakao_account.email);
          })
          .catch((error) => {
            console.log(error);
          })
      })();
    } else {
      console.log("No code");
    }
  })

  

  const kakaoLoginHandler = () => {
    Kakao.Auth.authorize({
      redirectUri,
      scope
    })
  }

  const kakaoLogoutHandler = () => {
    Kakao.Auth.logout()
      .then((response) => {
        console.log(Kakao.Auth.getAccessToken());
      })
      .catch((error) => {
        console.log('Not Logged In');
      });
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <SubmitButton onClick={kakaoLoginHandler}>KakaoLogin</SubmitButton>
    <SubmitButton onClick={kakaoLogoutHandler}>KakaoLogout</SubmitButton>
    </div>
  )
}
