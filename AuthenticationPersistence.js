import { getAuth, setPersistence, signInWithEmailAndPassword, 
    browserSessionPersistence,  signInWithRedirect, 
    inMemoryPersistence, GoogleAuthProvider } from "firebase/auth";


export const AuthenticationPersistence  = () => {

    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return signInWithEmailAndPassword(auth, email, password);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });



}