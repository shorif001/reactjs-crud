import React from 'react'
import { Redirect} from 'react-router-dom'

const Protected = ({isLoggedIn, children}) => {
  if(!isLoggedIn){
    return isLoggedIn ? <Redirect to="/" replace/> : <Redirect to="/content"/>

  }
  return children;
}

export default Protected