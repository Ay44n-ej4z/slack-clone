import React from 'react'
import "./Login.css"
import Button from '@material-ui/core/Button';
import { auth, provider } from '../firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = ()=> {
    auth
        .signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error => {
            alert(error.message)
        })
    }
    return (
        <div className = "login">
           <div className = 'login_container'>
            <img 
            src = "https://media.itpro.co.uk/image/upload/v1570816493/itpro/2019/02/slackshutterstock_1289033551.jpg"
             alt = ''
             />
             <h1>Sign in to Slack</h1>
             <Button onClick = {signIn} >Sign in with Google</Button>
           </div>
        </div>
    )
}

export default Login
