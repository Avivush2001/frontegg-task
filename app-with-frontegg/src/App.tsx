import './App.css';
import { useRef, useEffect } from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder  } from "@frontegg/react";

function App() {
  const initialRedirectAttempted = useRef(false);
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  

  useEffect(() => {
    if (!isAuthenticated && !initialRedirectAttempted.current) {
      initialRedirectAttempted.current = true;
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location.href}`;
  };

  return (

    <div className="App">
      {isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl || undefined} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user?.accessToken)}>
              What is my access token?
            </button>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;