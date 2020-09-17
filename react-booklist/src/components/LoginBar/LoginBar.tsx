import React, {FC} from "react";
import FacebookLogin from 'react-facebook-login';
import {Button, styled} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const StyledText = styled(Typography)({
    color:"white",
    marginRight:"20px",
    paddingTop: "15px"
});

export const LoginBar: FC = () => {
    const userName = window.sessionStorage.getItem("userName");
    const responseFacebook = (response: any) => {
        console.log(response);
        if (response.status !== "unknown") {
            window.sessionStorage.setItem("isLoggedIn", "true");
            window.sessionStorage.setItem("userName", response.name);
            window.location.href = '/'
        }
    };

    const handleLogOut = () => {
        window.sessionStorage.setItem("isLoggedIn", "false");
        window.sessionStorage.setItem("userName", "");
        // @ts-ignore
        window.FB.logout();
        window.location.href = '/'
    };
    return (
        <AppBar position="static">
                <Box paddingX={[2,2,5]} display="flex" justifyContent="space-between">
                        <FacebookLogin
                            appId="3427827813943778"
                            autoLoad={false}
                            fields="name,email,picture"
                            icon="fa-facebook"
                            callback={responseFacebook}/>

                    <Box display="flex" >
                        {userName && <StyledText variant="body1" align="center">welcome: {userName}</StyledText>}
                        <Button variant="contained" color="secondary" onClick={handleLogOut}>
                            log out
                        </Button>
                    </Box>
                </Box>
        </AppBar>

    )
};