var React = require('react');

var GameTableRow = require('./game-table-row.jsx');

var GameSheet = function(props){
	var store = props.store;
	return (
		<section className="panel panel-default" id="GameSheet">
			<div className="table-container">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>
								<div className="hidden">Name</div>
								<div className="relative">
									<div className="fixed-header">Name</div>
								</div>
							</th>
							{store.clueless.players.map(function(playerName, index){
								return (
									<th key={"th"+index}>
										<div className="hidden">{playerName} {props.playerCardTotal(playerName)}</div>
										<div className="relative">
											<div className="fixed-header">{playerName} {props.playerCardTotal(playerName)}</div>
										</div>
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody>

						<tr className="info">
							<td colSpan={store.clueless.players.length+1}>People</td>
						</tr>
						{store.gameData.people.map(function(cluePersonName, index){
							return (
								<GameTableRow
									key={"GTR-"+index+"people"}
									rowKey={"row" + index + "people"}
									store={store}
									type="people"
									cluePersonName={cluePersonName}
									classCheck={props.classCheck}
									hiddenBtnCheck={props.hiddenBtnCheck}
									resetPlayerTile={props.resetPlayerTile}
									radioOnChange={props.radioOnChange}
									container={props.container}
								/>
							)
						})}

						<tr className="info">
							<td colSpan={store.clueless.players.length+1}>Weapons</td>
						</tr>
						{store.gameData.weapons.map(function(cluePersonName, index){
							return (
								<GameTableRow
									key={"GTR-"+index+"weapons"}
									rowKey={"row" + index + "weapons"}
									store={store}
									type="weapons"
									cluePersonName={cluePersonName}
									classCheck={props.classCheck}
									hiddenBtnCheck={props.hiddenBtnCheck}
									resetPlayerTile={props.resetPlayerTile}
									radioOnChange={props.radioOnChange}
									container={props.container}
								/>
							)
						})}

						<tr className="info">
							<td colSpan={store.clueless.players.length+1}>Rooms</td>
						</tr>
						{store.gameData.rooms.map(function(cluePersonName, index){
							return (
								<GameTableRow
									key={"GTR-"+index+"rooms"}
									rowKey={"row" + index + "rooms"}
									store={store}
									type="rooms"
									cluePersonName={cluePersonName}
									classCheck={props.classCheck}
									hiddenBtnCheck={props.hiddenBtnCheck}
									resetPlayerTile={props.resetPlayerTile}
									radioOnChange={props.radioOnChange}
									container={props.container}
								/>
							)
						})}

					</tbody>
				</table>
			</div>
		</section>
	);

};

module.exports = GameSheet;
