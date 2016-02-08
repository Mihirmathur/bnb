import React from 'react';
import * as API from '../api';
import {Link} from 'react-router';

var filepicker = require('filepicker-js');
filepicker.setKey('A5svCF4nfRZaTN39PpcE3z');


var t=0;
export default class Listings extends React.Component {
	state = {
		loaded:false,
		pages: {},
		newPageTitle: '',
		newPageDesc:'',
		newPageImg:''
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
			<br />
			<span className="btn btn-default btn-file" onClick={this.upFile}>Browse an image...</span>
			<br /><br />
			<button className="file btn btn-primary" 
			onClick={this.createPage1}>Submit</button> 
			<ul>{items.props}</ul>
			</center>
			</div> :<ul>{items}</ul>
		}
		</div>;
	}
	
	update = evt => this.setState({ newPageTitle: evt.target.value });
	update1 = evt => this.setState({ newPageDesc: evt.target.value });
	update2 = evt => this.setState({ newPageImg: evt.target.value });
	upFile = evt =>{
		filepicker.pick(
			function(Blob){
				console.log(Blob.url);
			t = Blob.url;
			}
			);
	}
	createPage = evt => {
		if (evt.charCode !== 13) return;
		

		API.listings.push(
			{ host: this.props.user.username, 
				title: this.state.newPageTitle, 
				description: this.state.newPageDesc,
				img: t
			});


		this.setState({newPageTitle: '', newPageDesc: '', newPageImg:''});
	}
	createPage1 = evt => {
		API.listings.push(
			{ host: this.props.user.username, 
				title: this.state.newPageTitle, 
				description: this.state.newPageDesc,
				img: t
			});
		this.setState({newPageTitle: '', newPageDesc: '', newPageImg:''});
	}
}