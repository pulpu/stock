import React from 'react';
import {connect} from 'react-redux';

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount () {
            if (this.props.isAuthenticated === false) return this.props.history.push('/login');
        }

        componentWillReceiveProps (nextProps) {}

        render () {
            return (
                <div>
                    {this.props.isAuthenticated === true
                    ? <Component {...this.props} />
                    : null}
                </div>
            )
        }
    }

    const mapStateToProps = (state) => ({
        // isAuthenticated and authReducers it will be set in login componet

        token: typeof state.authReducers.result !== "undefined" ? state.authReducers.result.token : false,
        isAuthenticated: typeof state.authReducers.result !== "undefined" ? true : false
    });

    return connect(mapStateToProps)(AuthenticatedComponent);

}