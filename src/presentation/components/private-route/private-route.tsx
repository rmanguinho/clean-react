import React, { useContext } from 'react'
import { RouteProps, Route, Redirect } from 'react-router-dom'
import { ApiContext } from '@/presentation/contexts'

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const { getCurrentAccount } = useContext(ApiContext)
  return getCurrentAccount()?.accessToken
    ? <Route {...props} />
    : <Route {...props} component={() => <Redirect to="/login" />} />
}

export default PrivateRoute
