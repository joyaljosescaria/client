import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/" />;
}

const useAuth = () => {
    return true;
};

export default PrivateRoute;