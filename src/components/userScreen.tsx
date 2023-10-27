import { User, UserManager } from "oidc-client-ts";
import { useEffect, useState } from "react";


function UserScreen({userManager}:{ userManager: UserManager | undefined}) {
    const [user, setUser] = useState<User | null>();
    useEffect(() => {
        userManager?.getUser().then(us => setUser(us));
    }, [userManager]); 
    console.log(user?.access_token);
    return (
        <div className="UserScreen">
            <h1 id="name">{user?.profile.email}</h1>
            <button >Call Api</button>
        </div>
    );
}

export default UserScreen;