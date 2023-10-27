import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import LoginPage from './components/userScreen';
import { useEffect, useState } from 'react';
import UserScreen from './components/userScreen';
import { UserManager } from 'oidc-client-ts';

function App() {
const [userManager, setUserManager] = useState<UserManager>();  
  useEffect(() => {
    const config = {
      authority: 'https://dev-e342nu481e3r41tp.us.auth0.com',
      client_id: 'x7LKGWhQ1QPqZeyBnvNkfCTbACINX4lL',
      redirect_uri: 'http://localhost:3000', // Your redirect URI
      response_type: 'code', 
      scope: 'openid profile email',
      client_secret: 'TauJkeMfMvhnFNG4KlUDE3ecB5bFpIUoAH44jsog_jaZF733h0I2yfMt4B1uZO2Q', // Keep this secret on the server-side
    };
    setUserManager(new UserManager(config)); 
  
    userManager?.signinRedirectCallback().then(function(user) {
      console.log(user.state);
    });

  }, []);
  
  const router = createBrowserRouter([
    { path: '', element : <UserScreen userManager={userManager}/>}
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
