// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: 'AIzaSyAen9DNdlno80uQcGkWSdScrZnmYdUK4oo',
	authDomain: 'recipecookbook-e3649.firebaseapp.com',
	projectId: 'recipecookbook-e3649',
	storageBucket: 'recipecookbook-e3649.appspot.com',
	messagingSenderId: '942102675827',
	appId: '1:942102675827:web:437ac185caa0ee6b2f8506',
	measurementId: 'G-DPK44KHXSC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//Initialize Firebase Auth and get a reference to the service
export const auth = getAuth(app);
