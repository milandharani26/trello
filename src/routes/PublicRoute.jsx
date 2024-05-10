import { Navigate } from 'react-router-dom';

function PublicRoute({children}) {
    // let isAthenticate = true;
    let isAthenticate = false;

    if (isAthenticate) {
        return <Navigate to="/dashboard" />
    }
    else {
        return children
    }
}

export default PublicRoute




