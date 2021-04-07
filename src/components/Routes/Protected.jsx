import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Protected = ({ component: Component, ...rest }) => {

  // const userLogged = localStorage.getItem('token')
  const userLogged = true

  if ( !userLogged ) {
    return <Redirect to="/login" />
  }
  return <Route {...rest} component={Component} />

}

export default Protected


// NOTE: route: el ...rest es xq el route puede tener mas propiedades y estas se le pasan de esta manera ejemplo el path de route
