import { Navigate } from 'react-router-dom'
// import Login from '../pages/login/Login'

function PrivateRoute({children}) {

  let isAthenticate = true 

  if(!isAthenticate){
    return <Navigate to="/login"/>
  }
  else{
    return children
  }
}

export default PrivateRoute
