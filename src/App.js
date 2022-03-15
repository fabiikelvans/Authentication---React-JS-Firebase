import { useState } from 'react';
import './App.css';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {auth} from './firebase';

function App() {

  const[ registerEmail, setRegisterEmail] = useState('');
  const[ registerPassword, setRegisterPassword] = useState('');
  const[ loginEmail, setLoginEmail] = useState('');
  const[ loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser);
  })


  const register = async () => {
    try{
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    }
    catch(error){
        console.log(error.message);
    }
  }

    const login = async () => {
      try{
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        console.log(user);
      }
      catch(error){
          console.log(error.message);
      }
    }

    const logout = async () => {
      await signOut(auth);
    }

  return (
    <div className="App">
     <div className='register'>
       <h3> Register User </h3>
       <div className="input-group">
         <input placeholder='Email' type="text" 
         value={registerEmail}
         onChange={(event) => {
           setRegisterEmail(event.target.value);
         }}
         />
         </div>

         <div className="input-group">
         <input placeholder='Password' type="password"
         value={registerPassword}
         onChange={(event) => {
           setRegisterPassword(event.target.value);
         }}
         />
        </div>

        <button onClick={register}>Register</button>
     </div>

     <div className="login">
       <h3>Login</h3>
       
       <div className="input-group">
         <input placeholder='Email' type="text" 
         value={loginEmail}
         onChange={(event) => {
           setLoginEmail(event.target.value);
         }}
         />
         </div>

         <div className="input-group">
         <input placeholder='Password' type="password" 
         value={loginPassword}
         onChange={(event) => {
           setLoginPassword(event.target.value);
         }}
          />
        </div>

        <button onClick={login}> Login </button>

       </div>

       <h4>User Logged In: </h4>
       
       <p>{user?.email}</p>

       <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default App;
