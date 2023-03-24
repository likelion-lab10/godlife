import { SubmitButton } from 'components'
import { useAuthState, useSignOut } from 'fbase/auth';
import React from 'react'

export default function Main() {

  const {user} = useAuthState();
  console.log(user);

  const {signOut} = useSignOut();
  const logOut = () => {
    signOut();
    console.log(user);
  }

  return (
    <SubmitButton onClick={logOut}>로그아웃</SubmitButton>
  )
}
