import React, { Component } from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import App from "./containers/app"
import AvisList from "./containers/avis-list"
import NotFound from "./components/not-found"

class Routes extends Component {
    render(){
        return(
            <div>
                <Router history={browserHistory}>
                    <Route path="/" component={App}/>
                    <Route path="vos-avis" component={AvisList}/>
                    <Route path="*" component={NotFound}/>
                </Router>
            </div>
        )
    }
}

export default Routes