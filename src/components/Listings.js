import React from 'react';
import * as API from '../api';

export default class Listings extends React.Component {
	state = {
		newPageTitle: '',
		newPageDesc:''
	}
	render(){
		return<div>
				{
					this.props.user ? <div className='col-md-12'>
					<br /><br />
					<center>
					<input type="text" value={this.state.newPageTitle} 
					className="form-control wid" 
					placeholder="Listing Title" 
					onChange={this.update}/><br />
					<input type="text" value={this.state.newPageDesc} 
					className="form-control wid" 
					placeholder="Description" 
					onChange={this.update1} 
					onKeyPress={this.createPage} />
					</center>
					</div> :null
				}
				</div>;
	}
	update = evt => this.setState({ newPageTitle: evt.target.value });
	update1 = evt => this.setState({ newPageDesc: evt.target.value });
	createPage = evt => {
		if (evt.charCode !== 13) return;
		API.listings.push({ host: this.props.user.username, title: this.state.newPageTitle, description: this.state.newPageDesc});
		this.setState({newPageTitle: '', newPageDesc: ''});
	}
}