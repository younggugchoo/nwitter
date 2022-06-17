import { useState,useEffect } from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";


function App() {
  const [isLoggin, setIsLoggin] = useState(authService.currentUser);
  const [init, setInit] = useState(false);

  useEffect(() => {
    
    authService.onAuthStateChanged((user) => {

      if (user){
        setIsLoggin(true);
      }else{
        setIsLoggin(false);
      }
      setInit(true);
    });
    
  }, [])


  //console.log(authService.currentUser);
  
  return (
    <div>
        {init ? <AppRouter isLoggin={isLoggin}/> : "Initialzing"}
        <footer>
          &copy; {new Date().getFullYear() } Nwitter
        </footer>
    </div>
  );
}

export default App;
