import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
    const { logout } = useAuth0();

    return (
        <button
            className="rounded bg-red-500 mt-3 mb-3 p-1 pl-2 pr-2 text-xs subpixel-antialiased hover:bg-red-600 text-white"
            onClick={() => logout({ returnTo: window.location.origin })}
        >
            Log Out
    </button>
    );
};

export default Logout;
