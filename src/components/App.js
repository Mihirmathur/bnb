import React from 'react';
import {RouteHandler} from 'react-router';

import Login from './Login';


export default class App extends React.Component {
    state = {user : USER}
    render(){
        return <div>
            <div className="row">
                <div className="col-md-10">
                <h1>Clonebnb Host</h1>
                <Login user={this.state.user} setUser={this.setUser}/>
                Display
                </div>
                <div className='col-md-6'>
                    <RouteHandler user={this.state.user}/>
                </div>
            </div>
        </div>;
    }
    setUser = (user) => this.setState({ user: user });
}
