import React from 'react';
import Router from 'react-router';

export default class Header extends React.Component {
    render(){
        return <div>
        <nav className="navbar navbar-full navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <img id="logo" alt="Brand" src="/img/airbnb.png"/>
                    </a>
                    
                </div>
                <div className="nav navbar-nav navbar-right">
                <div className="clonebnb">clonebnb<span className="red sm"> HOST</span></div>
                </div>
            </div>
        </nav>
        </div>
    }
}