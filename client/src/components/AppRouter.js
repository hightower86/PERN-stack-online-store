import { observer } from 'mobx-react-lite'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import UserStore from '../store/UserStore'
import { SHOP_ROUTE } from '../utils/constants'

const AppRouter = () => {
    const { user } = UserStore
    console.log({ user })
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({ path, Component }) => {
                return <Route key={path} path={path} component={Component} exact />
            })}
            {publicRoutes.map(({ path, Component }) => {
                return <Route key={path} path={path} component={Component} exact />
            })}
            <Redirect to={SHOP_ROUTE} />
        </Switch>
    )
}

export default observer(AppRouter)
