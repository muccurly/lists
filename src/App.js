import React from 'react'
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import HomeScreen from "./screens/home/HomeScreen";
import {InfoScreen} from "./screens/info/InfoScreen";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomeScreen}/>
                <Route exact path='/info' component={InfoScreen}/>
            </Switch>
        </Router>

    )
}
export default App;
