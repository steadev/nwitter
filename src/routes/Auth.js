import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { useState } from "react";
import { fAuth } from "../firebase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState();
  const onChange = (event) => {
    const {target: {name, value}} = event;
    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        // create account
        data = await createUserWithEmailAndPassword(fAuth, email, password);
      } else {
        // log in
        data = await signInWithEmailAndPassword(fAuth, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  }

  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const { name } = event.target;
    let provider;
    if (name === 'google') {
      provider = new GoogleAuthProvider();
    }

    if (name === 'github') {
      provider = new GithubAuthProvider();
    }
    try {
      const result = await signInWithPopup(fAuth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange}/>
        <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
        <input type="submit" value={newAccount ? 'Create Account' : 'Log in'} />
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? "Log in" : "Create Account"}</span>
      <div>
        <button name="google" onClick={onSocialClick}>Continue with Google</button>
        <button name="github" onClick={onSocialClick}>Continue with Github</button>
      </div>
    </div>
  );
}


export default Auth;