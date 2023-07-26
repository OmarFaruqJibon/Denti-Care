import firebaseAuthentication from "../Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged , signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

firebaseAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [doctor, setDoctor] = useState(true);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const regiserUser = (email, password, name, phone, history)=>{
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const newUser = {email, displayName: name, phone};
            setUser(newUser);

            updateProfile(auth.currentUser, {
                displayName: name,
                phone: phone
              }).then(() => {
              }).catch((error) => {
              });

              saveUser(email, name, phone, 'POST');

            setAuthError('');
            history.push('/');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
    };

    // console.log(user);

    const userLogin = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }


    const googleLogin = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user= result.user;
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
            saveUser( user.email, user.displayName, 'PUT');
        }).catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
     }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
              if (user) {
                  setUser(user);
                  getIdToken(user)
                  .then(idToken=>{
                      setToken(idToken)
                  })
              } else {
                  setUser({});
              }
              setIsLoading(false);
            });
            return () => unsubscribe;
            
      }, []);






// admin role
      useEffect(() => {
        fetch(`https://dent-care-server.onrender.com/users/admin/${user.email}`)
        .then(res=>res.json())
        .then(data=>{setAdmin(data.admin)})
      },[user.email]);


// doctor role
      useEffect(() => {
        fetch(`https://dent-care-server.onrender.com/users/doctor/${user.email}`)
        .then(res=>res.json())
        .then(data=>{setDoctor(data.doctor)})

        
      },[user.email]);









    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
    }

    const saveUser = (email, displayName, phone, method) => {

        const user = {email, displayName, phone};

        fetch('https://dent-care-server.onrender.com/users',{
            method: method,
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify(user)
        })

    };

    return {
        user,
        regiserUser,
        userLogin,
        logOut,
        authError,
        googleLogin,
        isLoading,
        admin,
        doctor,
        token
    }
};

export default useFirebase;