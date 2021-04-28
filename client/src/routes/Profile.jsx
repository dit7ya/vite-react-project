import React, { useContext } from 'react';

import { UserContext } from '../UserContext.js'

const Profile = () => {

    const { user, setUser } = useContext(UserContext);

    return (<div>
        <h1>{user ? "Welcome" + user.username : "Please Login"}</h1>
    </div>)

}



export default Profile;
