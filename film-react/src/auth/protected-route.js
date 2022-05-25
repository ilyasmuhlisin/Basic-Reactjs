import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/loading";

const ProtectedRoute = ({ element, ...args }) => (
  <Route
    component={withAuthenticationRequired(element, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
