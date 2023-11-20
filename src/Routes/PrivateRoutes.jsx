import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    // console.log('Location in PrivateRoute- ', location);

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
    
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node,

}