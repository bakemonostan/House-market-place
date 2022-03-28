import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDva2_VO9JOqTWZhTSTYEGOrg_HT-aKHWg',
  authDomain: 'house-market-e6ca9.firebaseapp.com',
  projectId: 'house-market-e6ca9',
  storageBucket: 'house-market-e6ca9.appspot.com',
  messagingSenderId: '193122953861',
  appId: '1:193122953861:web:2980cb1796338c0b9957ec',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
