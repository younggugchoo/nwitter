import React from "react";
import { authService } from "fbase";

const Home =()=>{

    const logout = ()=>{
        authService.signOut();
    }

    return (
        <div>
            Home
            <div>
            <button onClick={logout}>LogOut </button>
            </div>
        </div>

        
    )
}

export default Home;