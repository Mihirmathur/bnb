import React from 'react';
import {RouteHandler} from 'react-router';

import Login from './Login';
import Listings from './Listings';

export default class App extends React.Component {
    state = {user : USER}
    render(){
        return <div>
        <center>
            <div className="row">
                <div className="col-md-12">
                
                <Login user={this.state.user} setUser={this.setUser}/>
                
                </div>
                <br />
                <div>
                <Listings user={this.state.user} />
                </div>
                <div className='col-md-6'>
                    <RouteHandler user={this.state.user}/>
                </div>
            </div>
        </center>
        </div>;
    }
    setUser = (user) => this.setState({ user: user });
}
