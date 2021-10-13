import { useContext } from "react";
import { Redirect, Route } from "react-router";
import AuthContext from "../context/auth/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
    const authContext = useContext(AuthContext)
    let auth = authContext.isAuthenticated;
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;