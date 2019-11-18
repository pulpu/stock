import React from 'react';
import { Route, Switch} from 'react-router-dom';
// import { requireAuthentication } from './components/AuthenticatedComponent'
// import login from './components/login'
// import ComponentName from './components/ComponentName'
import Home from './pages/home/home'
import App from './App'


const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/login" component={login} />
            <Route  path="/listing" component={requireAuthentication(ComponentName)}/>  */}
        </Switch>
    </App>
)

export default Routes