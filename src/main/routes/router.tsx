import { makeLogin, makeSignUp, makeSurveyList, makeSurveyResult } from '@/main/factories/pages'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters'
import { ApiContext } from '@/presentation/contexts'
import { PrivateRoute } from '@/presentation/components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import React from 'react'

const Router: React.FC = () => {
  return (
    <RecoilRoot>
      <ApiContext.Provider
        value={{
          setCurrentAccount: setCurrentAccountAdapter,
          getCurrentAccount: getCurrentAccountAdapter
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={makeLogin} />
            <Route path="/signup" exact component={makeSignUp} />
            <PrivateRoute path="/" exact component={makeSurveyList} />
            <PrivateRoute path="/surveys/:id" component={makeSurveyResult} />
          </Switch>
        </BrowserRouter>
      </ApiContext.Provider>
    </RecoilRoot>
  )
}

export default Router
