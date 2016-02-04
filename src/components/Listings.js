import React from 'react';
import * as API from '../api';
import {Link} from 'react-router'

export default class Listings extends React.Component {
	state = {
		loaded:false,
		pages: {},
		newPageTitle: '',
		newPageDesc:''
	}
	componentDidMount() {
        API.listings.on('value', ss => this.setState({
            pages: ss.exportVal() || {},
            loaded: true
        }));
    }
	render(){
		let items = Object.keys(this.state.pages).map(id=><li key={id}>
			<Link to='page' params={{id:id}} > {this.state.pages[id].title}</Link>
			</li>);

		return<div>
		
				{
					this.props.user ? <div className='col-md-12'>
					<br /><br />
					<center>
					<input type="text" value={this.state.newPageTitle} 
					className="form-control wid" 
					placeholder="Listing Title" 
					onChange={this.update}/><br />
					<textarea type="text" value={this.state.newPageDesc} 
					className="form-control wid" 
					rows='5'
					placeholder="Description" 
					onChange={this.update1} 
					onKeyPress={this.createPage} />
					<ul>{items.props}</ul>
					</center>
					</div> :<ul>{items}</ul>
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