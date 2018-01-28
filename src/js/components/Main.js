import React from 'react';
import kGlobalConstants from 'GlobalConstants';

const github_logo = './img/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png';

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
		fetch(kGlobalConstants.API + '/twister')
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
					<div id="topbar" className="d-flex">
						<div className="p-2">{twister_count}</div>
						<div className="p-2 ml-auto">
							<a className="pull-right" href="https://github.com/b0ses/diction-django-site">
							<img src={github_logo} height="20"/>
							</a>
						</div>
					</div>
					<h1 className="text-center flex-row">Diction Practice</h1>
					<h4 className="text-center flex-row" id="quote">"
						<span className="highlight">Diction</span> is done with the <span className="highlight">tip</span> of the <span className="highlight">tongue</span> and the <span className="highlight">teeth</span>"
					</h4>
					<div className="flex-row">
						<div className="p-2">
						<button autoFocus id="twist" className="btn btn-light mx-auto d-block" onClick={this.newTwister}>Twist</button>
						</div>
					</div>
				</div>
				<div id="bottom-half" className="container-fluid">
					<div id="twister" className="flex-row text-center">
						<p>{this.nl2br(this.state.twister)}</p>
						<br/><p><a href={this.state.source} target="_blank">Source</a></p>
					</div>
				</div>
			</div>
		);
	}
}