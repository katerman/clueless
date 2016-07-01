var React = require('react');

var GameSheet = function(props){
	return (
		<div id="actionButtons" className="col-md-12">
			<div className="row pull-right">
				<div className="btn-group">
					<button onClick={props.addNewPlayer} className="btn btn-info">New Player</button>
					<button onClick={props.resetGame} className="btn btn-default">Reset</button>
				</div>
			</div>
		</div>
	);

};

module.exports = GameSheet;
