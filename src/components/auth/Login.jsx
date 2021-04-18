import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button
            className="rounded bg-purple-500 mt-3 mb-3 p-1 pl-2 pr-2 text-xs subpixel-antialiased hover:bg-purple-600 text-white"
            onClick={() => loginWithRedirect()}
        >
            LOG IN
    </button>
    );
};

export default Login;
