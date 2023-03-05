import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import UserInfo from './userData'
const root = ReactDOM.createRoot(document.getElementById('root'));

function Log(){
    function Signup() {
        console.log("i am here");
        const responseMessage = (response) => {
            var cred = response.credential;
            console.log(cred);
            

            root.render(
                <React.StrictMode>
                  < UserInfo />
                </React.StrictMode>
              );
              
        };
        const errorMessage = (error) => {
            console.log(error);
        };
        return (
            <div
                style = {{
                    display : 'flex',
                    justifyContent : 'center',
                    alignItems : 'center',
                    flexDirection : 'column',
                }}
            >
                <h2>Google Login</h2>
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