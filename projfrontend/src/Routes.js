import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./core/Home"
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Profile from "./user/Profile"
import PrivateRoute from "./auth/helper/PrivateRoutes"
import CardDescription from './core/components/CardDescription';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/coursedesc" exact component={CardDescription} />
                <PrivateRoute path="/profile" exact component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}