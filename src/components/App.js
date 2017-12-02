import React from 'react';
import Config from 'Config';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			twister: "",
			source: "",
			count: 0
		}
		this.newTwister = this.newTwister.bind(this);
	}

	newTwister() {
		this.setState({
			twister: this.state.twister,
			source: this.state.source,
			count: this.state.count + 1
		})
		this.populateTwister();
	}

	populateTwister() {
		fetch(Config.serverUrl + '/twister')
		.then(twister => {
			return twister.json();
		}).then(data => {
			this.setState({
				twister: data.twister,
				source: data.source,
				count: this.state.count
			})
		})
	}

	componentDidMount() {
		this.populateTwister();
	}

	nl2br(text) {
		return text.split('\n').map(function(item, key) {
		  return (
		    <span key={key}>
		      {item}
		      <br/>
		    </span>
		  )
		})
	}

	render () {
		let twister_count = <p>&nbsp;</p>; 
		if (this.state.count > 0) {
			twister_count = <p>Twisters completed: {this.state.count}</p>
		}

		return (
			<div>
				<div id="top-half" className="container-fluid">
					<div id="topbar" className="row">
						<div className="col-xs-6">{twister_count}</div>
						<div className="col-xs-6">
							<a className="pull-right" href="https://github.com/b0ses/diction-django-site">
							<img src="src/images/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png" height="20"/>
							</a>
						</div>
					</div>
					<h1 className="text-center row">Diction Practice</h1>
					<h4 className="text-center row" id="quote">"
						<span className="higlight">Diction</span> is done with the <span className="higlight">tip</span> of the <span className="higlight">tongue</span> and the <span className="higlight">teeth</span>"
					</h4>
					<div className="row">
						<button autoFocus id="twist" className="btn btn-default center-block" onClick={this.newTwister}>Twist</button>
					</div>
				</div>
				<div id="bottom-half" className="container-fluid">
					<div id="twister" className="row text-center">
						<p>{this.nl2br(this.state.twister)}</p>
						<br/><p><a href={this.state.source}>Source</a></p>
					</div>
				</div>
			</div>
		);
	}
}