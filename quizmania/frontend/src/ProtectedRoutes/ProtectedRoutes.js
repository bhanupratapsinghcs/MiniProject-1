import React from 'react'
import { Route, Redirect } from 'react-router'

export default function ProtectedRoutes({ user, component: Component, ...rest }) {
    console.log(user);
    return (
        <Route {...rest} render={
            () => {
                if (user) {
                    return <Component />
                }
                else {
                    return <Redirect to='/' />
                }

            }
        } />
    )
}
