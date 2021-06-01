import React, {useState} from 'react';
import firebase from 'firebase';
import AppInterface from './comps/AppInterface';
import SignIn from './comps/SignIn';

import { auth } from './firebase/firebaseInit';

function App() {
    const [anonUserLogged, setAnonUserLogged ] = useState(false);
    // anonym user login state 
    const [gUser, setGUser] = useState(); 
    // google user login state
    const provider = new firebase.auth.GoogleAuthProvider();

    const signInWithGoogle = () => {
      auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result.user.displayName);
        setGUser(result.user.displayName)
      })
    }

    async function signInAnon() {
        auth.signInAnonymously()
        .then(() => {
            console.log('signed in');
            setAnonUserLogged(true);
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
        });
      }
      
      
      async function signOutAnon() {
        auth.signOut().then(() => {
          setAnonUserLogged(false);
          console.log('signed out');
        }).catch((error) => {
          console.log(error);
        })
      };

    return (
        <div>
            {anonUserLogged || gUser ? <AppInterface handleAuth={signOutAnon} /> : <SignIn handleAnonAuth={signInAnon} handleGoogleAuth={signInWithGoogle}/> }
        </div>
    );
}

export default App;
