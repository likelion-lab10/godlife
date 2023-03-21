import React from 'react';
import BackButton from '../components/BackButton';
import CreateChallengeButton from '../components/CreateChallengeButton';
import Navbar from '../components/Navbar';
import Category from '../components/Category';

function Filter() {
  return (
    <>
      <BackButton />
      <CreateChallengeButton />
      <Category />
      <Navbar />
    </>
  );
}

export default Filter;