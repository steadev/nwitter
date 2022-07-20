import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useState } from "react";
import { fAuth } from "../firebase";

const inputStyles = {};

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(); 
  const [newAccount, setNewAccount] = useState(false);

  const toggleAccount = () => setNewAccount((prev) => !prev);

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
  return (
    <>
      <form onSubmit={onSubmit} className="container">
        <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange} className="authInput" />
        <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange} className="authInput"/>
        <input type="submit" value={newAccount ? 'Create Account' : 'Log in'} className="authInput authSubmit"/>
        {error && <span className="authError">{error}</span>}
      </form>
      <span onClick={toggleAccount} className="authSwitch">{newAccount ? "Log in" : "Create Account"}</span>
    </>
  )
}

export default AuthForm;