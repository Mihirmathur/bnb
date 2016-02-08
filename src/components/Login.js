import React from 'react';
import * as API from '../api';

export default class Login extends React.Component {
    render() {
        if (this.props.user)
            return <div className='row'>
            <div className='col-md-12'>
                <p>  
                 <button className="btn btn-default fr" onClick={this.signout}> Sign Out </button> </p>
                 <br /><br />
                 
            </div>
            </div>;
            

        return (
            <div>
            <br/>
                <div className="col-md-4"></div>
                <div className="col-md-4 card card-block">
                    
                    <center>
                        <h4>Welcome to clonebnb host.</h4>
                        <h5>Login or signup.</h5>
                        <div className="mid"> 
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon1"><i className="fa fa-envelope-o"></i></span>
                                <input id = "name" type="text" className="form-control" ref='username' 
                    placeholder="Username" aria-describedby="basic-addon1"/>
                            </div>
                         </div>
                        &nbsp;&nbsp;
                        <div className="">
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon1"><i className="fa fa-key"></i></span>
                                <input id="pw" type="password" className="form-control" ref='password' placeholder="Password" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <br/>
                    
                
            <br/>

                    <div className="">
                        <p>
                            <button className="btn btn-default" onClick={this.signin}> Sign In </button>&nbsp;&nbsp;
                            <button className="btn btn-default" onClick={this.signup}> Sign Up </button>
                        </p>
                    </div>
                </center>
                
            </div>
            <div className="col-md-4"></div>
            
        <br /><br />            

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
