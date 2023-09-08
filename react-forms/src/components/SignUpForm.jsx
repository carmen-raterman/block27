//Need to import usestate from React
import React, { useState } from 'react'

//Step 3, creating sign-up form component
export default function SignUpForm({ setToken }) {

    //Step 6, setting our three state variables
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    //Step 9, creating handleSubmit
    async function handleSubmit(event) {

        try {
            event.preventDefault();
            // console.log("Testing");
            const getData = async () => {
                const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");

                const result = await response.json();
    
                console.log(result);
    
                setToken(result.token)
            }

            getData()
            console.log(username, password)

        } catch (error) {
            setError(error.message);
            console.log(error);
        }
    };


    return(
        <>
            <h2>Sign Up</h2>
            {error && <p> {error} </p>}
            
            <form onSubmit={handleSubmit}>
                <label> 
                    Username: {" "} <input value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>

                <label> 
                    Password: {" "} <input value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>

                <button> Submit </button>
            </form></>
    );
};