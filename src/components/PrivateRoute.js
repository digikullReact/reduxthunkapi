import { Navigate } from "react-router-dom";
import { checkToken } from "../utils/customvalidation";

// HIGHER ORDER COMPONENT

function PrivateRoute({ children }) {


  const auth = checkToken();

  return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;