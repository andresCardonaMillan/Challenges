import Login from "./auth/Login";
import * as React from 'react'
import {auth} from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import Register from "./auth/Register";
import Home from './pages/Home'

function App() {

  const [user, setUser] = React.useState(null);
  const [authState, setAuthState] = React.useState(null)

  React.useEffect(()=>{
    const unSuscribe = onAuthStateChanged(auth, 
      async authenticatedUser => {
        if (authenticatedUser) {
          setUser(authenticatedUser.email)
          setAuthState('home');
        } else{
          setUser(null);
          setAuthState('login')
        }
      })

      return unSuscribe;
  }, [user])

  if (authState === null) return <div className="font-bold text-center text-5xl">Loading..</div>
  if (authState === 'login') return <Login setAuthState = {setAuthState} setUser= {setUser}/>
  if (authState === 'register') return <Register setAuthState = {setAuthState} setUser= {setUser}/>
  if (user) return <Home  user={user} setAuthState = {setAuthState} setUser= {setUser}/>
}

export default App;
