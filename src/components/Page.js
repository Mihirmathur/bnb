import React from 'react';
import * as API from '../api';

export default class Page extends React.Component {
	state={
		page:{}
	}
	componentDidMount(){
		API.listings.child(this.props.params.id).on('value', this.updateContent)
	}
	componentWillReceiveProps(nextProps){
		API.listings.child(this.props.params.id).off('value', this.updateContent);
		API.listings.child(nextProps.params.id).on('value', this.updateContent);
	}
	updateContent = (snaphot) => {
		let json = snapshot.exportVal();
		this.setState({
			page: json
		});
	}

	render(){
		return <div>
			{this.page.title}
		</div>;
	}
}