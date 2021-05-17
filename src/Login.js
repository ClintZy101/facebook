import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider} from "./firebase"
import { actionTypes } from "./reducer"
import { useStateValue } from "./StateProvider"

function Login() {
    //  target the action in the data layer
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // pop-up sign-in
       auth
        .signInWithPopup(provider)
        .then((result)=> {
            // pushes action/state into the data layer
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            // console.log(result);
        })
        //  if there is any error in some way alert me on screen
        .catch((error) =>alert (error.message));
    }

    return (
        <div className="login">
            <div className="login-logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
                />
                <img
                src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
