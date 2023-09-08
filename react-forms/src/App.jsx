import { useState } from 'react'
import './App.css'
//Need to import authenticate component and signup component
import Authenticate from './components/Authenitcate';
import SignUpForm from './components/SignUpForm';

//Incorporating our new components
export default function App() {

  const [token, setToken] = useState(null);

  return (
    <>
      <Authenticate token={token} setToken={setToken}/>

      <SignUpForm token={token} setToken={setToken}/>

    </>
  );
}
