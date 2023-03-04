import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Log(){
    function Signup() {
        console.log("i am here");
        const responseMessage = (response) => {
            console.log(response);
        };
        const errorMessage = (error) => {
            console.log(error);
        };
        return (
            <div>
                <h2>React Google Login</h2>
                <br />
                <br />
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </div>
        )
    };
    ReactDOM.render(
        
        <GoogleOAuthProvider clientId="673583849633-45r7vjq6tho2slle0o0u3t2hlkjv9vac.apps.googleusercontent.com">
            <React.StrictMode>
                <Signup />
            </React.StrictMode>
        </GoogleOAuthProvider>,
        document.getElementById('root')
    );
}

export default Log;