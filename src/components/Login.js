import React from 'react';
import * as API from '../api';

export default class Login extends React.Component {
    render() {
        if (this.props.user)
            return <div className='row'>
                <p> Hi {this.props.user.username}! </p>
                <p> <button onClick={this.signout}> Sign Out </button> </p>
            </div>;

        return (<div>
            <div className="inbl">
            <div className="inbl">
               <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="fa fa-envelope-o"></i></span>
                
                    <input id = "name" type="text" className="form-control" ref='username' 
                    placeholder="Username" aria-describedby="basic-addon1"/>
                 </div>
            </div>
            &nbsp;&nbsp;
            <div className="inbl">
                 <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="fa fa-key"></i></span>
                    <input id="pw" type="password" className="form-control" ref='password' placeholder="Password" aria-describedby="basic-addon1"/>
                 </div>
            </div>
            <br/>
           <div className="inbl">
            <p>
                <button className="btn btn-default" onClick={this.signin}> Sign In </button>&nbsp;&nbsp;
                <button className="btn btn-default" onClick={this.signup}> Sign Up </button>
            </p>
            </div>
            </div>

        </div>);
        
    }
    signin = evt => this.sign('in', evt);
    signup = evt => this.sign('up', evt);
    sign = (name, evt) => {
        var username = React.findDOMNode(this.refs.username).value,
            password = React.findDOMNode(this.refs.password).value;

        API['sign' + name](username, password).then(data => this.props.setUser(data.user));
    }
    signout = evt => API.signout().then(data => this.props.setUser(null));
}
