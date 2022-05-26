import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from './components/loading'

const Actor = () => {

    const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();
    if (isLoading) {
      return <div><Loading/></div>;
    }
    return !isAuthenticated ? (
      loginWithRedirect()
    ) : (
      <div>
        <h1>Actor</h1>
      </div>
    );
    // !isAuthenticated && (loginWithRedirect()),
    // isAuthenticated && (
    //   <div>
    //     <h1>Actor</h1>
    //   </div>
    // )
}

export default Actor;
