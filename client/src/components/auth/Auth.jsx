import React from "react";
import Logout from "./Logout";
import Profile from "./Profile";
import Login from "./Login";

import { useAuth0 } from "@auth0/auth0-react";

const Auth = () => {
    const { isAuthenticated, isLoading } = useAuth0();
    if (isAuthenticated) {
        return (
            isLoading ? <div /> :
                <Logout />
        )
    }

    return <Login />;
};

export default Auth;
