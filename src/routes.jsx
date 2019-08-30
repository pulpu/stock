import React from 'react';
import { Route, Switch} from 'react-router-dom';
// import { requireAuthentication } from './components/AuthenticatedComponent'
// import login from './components/login'
// import ComponentName from './components/ComponentName'
import App from './App'


const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/" component={App} />
            {/* <Route exact path="/login" component={login} />
            <Route  path="/listing" component={requireAuthentication(ComponentName)}/>  */}
        </Switch>
    </App>
)

export default Routes