import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { fAuth } from '../firebase';
import AppRouter from "./Router";

function App() {
  const [init, setInit] = useState(false);
  const [userObject, setUserObject] = useState(null);
  useEffect(() => {
    onAuthStateChanged(fAuth, (user) => {
      if (user) {
        setUserObject(user);
      } else {
      }
      setInit(true);
    })
  }, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={Boolean(userObject)} userObj={userObject} />
      ) : "Initializing..."}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
