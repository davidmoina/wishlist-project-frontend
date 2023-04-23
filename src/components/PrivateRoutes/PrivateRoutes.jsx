import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {

    const { isAuthenticated } = useAuth0();

    if(!isAuthenticated) {
        return <Navigate to="/welcome"/>
    }

    return <Outlet/>
}
