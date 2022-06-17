import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";


const AppRouter=({isLoggin})=> {

    
    //console.log(isLoggin);
 
    return(
        <Router>
           <Routes>
                <Route path= "/" element={isLoggin?<Home/> : <Auth/> }/>
            </Routes>
        </Router>
    
    )
    
}

export default AppRouter;
