import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WithAuth = (WrappedComponent, check) => {
    const HOC = () => {
        const AUTH = useSelector(state => state.Auth)
        if (check === 'RDTUM') {
            return AUTH.token === null ? <WrappedComponent /> : <Navigate to='/usermanagement' />;
        }
        else if (check === 'RDTLN') {
            return AUTH.token !== null ? <WrappedComponent /> : <Navigate to='/login' />;
        }
    }
    return HOC;
}

export default WithAuth;