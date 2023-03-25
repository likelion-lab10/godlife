import React from 'react';
import BackButton from '../components/BackButton';
import CreateChallengeButton from '../components/CreateChallengeButton';
import Navbar from '../components/Navbar';
import Category from '../components/Category';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs  } from "firebase/firestore";
import { getStorage } from "firebase/storage";


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