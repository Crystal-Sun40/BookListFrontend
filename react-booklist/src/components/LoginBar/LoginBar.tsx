import React, {FC} from "react";
import FacebookLogin from 'react-facebook-login';


export const LoginBar: FC = () => {
    const responseFacebook = (response: any) => {
        console.log(response);
        if (response.status !== "unknown") {
            window.sessionStorage.setItem("isLoggedIn", "true");
        }
    };

    const handleLogOut = () => {
        window.sessionStorage.setItem("isLoggedIn", "false");
        // @ts-ignore
        window.FB.logout();
        // window.location.href = '/'
    };
    return (
        <>
            <FacebookLogin
                appId="3427827813943778"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}/>
            <button onClick={handleLogOut}>log out</button>
        </>
    )
};