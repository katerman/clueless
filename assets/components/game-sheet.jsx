var React = require('react');

var classCheck = function(expr){
	if(typeof expr === 'undefined'){
		return '';
	}else if(expr === true){
		return 'success';
	}else{
		return 'danger';
	}
}

var hiddenBtnCheck = function(expr){
	if(typeof expr === 'undefined'){
		return 'hidden';
	}
	return '';
};

var GameSheet = function(props){
	return (
		<div className="table-responsive panel panel-default" id="GameSheet">
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Name</th>
						{props.players.map(function(playerName, index){
							return (
								<th key={"th"+index}>{playerName} {props.playerCardAmount(playerName)}</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					<tr className="info">
						<td colSpan={props.players.length+1}>People</td>
					</tr>
					{props.GameData.people.map(function(cluePersonName, index){
						return (
							<tr key={index}>
								<td>{cluePersonName}</td>
								{props.players.map(function(playerName, pindex){
									return (
										<td key={"td"+playerName+index+"-"+pindex} className={' ' + classCheck(props.playerCardMap[playerName].cards['people'][cluePersonName])}>

											<button
												className={"btn btn-default btn-sm resetBtn " + hiddenBtnCheck(props.playerCardMap[playerName].cards['people'][cluePersonName]) }
												onClick={props.resetPlayerTile.bind(props.container, {"type": "people", "card": cluePersonName, "person": playerName})}>
												X
											</button>

											<label htmlFor={"cb"+playerName+cluePersonName+index+"-"+pindex+"have"}>
												Have
												<input
													checked={typeof props.playerCardMap[playerName].cards['people'][cluePersonName] !== 'undefined' && props.playerCardMap[playerName].cards['people'][cluePersonName] === true}
													onChange={props.radioOnChange.bind(props.container, {"type": "people", "card": cluePersonName, "person": playerName, "have": true})}
													id={"cb"+playerName+cluePersonName+index+"-"+pindex+"have"}
													type="radio"
													value="1"
													name={cluePersonName + "-cb" + index+pindex}
												/>
											</label>
											<br/>
											<label htmlFor={"cb"+playerName+cluePersonName+index+"-"+pindex+"nothave"}>
												Not Have
												<input
													checked={typeof props.playerCardMap[playerName].cards['people'][cluePersonName] !== 'undefined' && props.playerCardMap[playerName].cards['people'][cluePersonName] === false}
													onChange={props.radioOnChange.bind(props.container, {"type": "people", "card": cluePersonName, "person": playerName, "have": false})}
													id={"cb"+playerName+cluePersonName+index+"-"+pindex+"nothave"}
													type="radio"
													value="0"
													name={cluePersonName + "-cb" + index+pindex}
												/>
											</label>
										</td>
									)
								})}
							</tr>
						);
					})}
					<tr className="info">
						<td colSpan={props.players.length+1}>Weapons</td>
					</tr>
					{props.GameData.weapons.map(function(cluePersonName, index){
						return (
							<tr key={index}>
								<td>{cluePersonName}</td>
								{props.players.map(function(playerName, pindex){
									return (
										<td key={"td"+playerName+index+"-"+pindex} className={classCheck(props.playerCardMap[playerName].cards['weapons'][cluePersonName])}>

											<button
												className={"btn btn-default btn-sm resetBtn " + hiddenBtnCheck(props.playerCardMap[playerName].cards['weapons'][cluePersonName]) }
												onClick={props.resetPlayerTile.bind(props.container, {"type": "weapons", "card": cluePersonName, "person": playerName})}>
												X
											</button>

											<label htmlFor={"cb"+playerName+cluePersonName+index+"-"+pindex+"have"}>
												Have
												<input
													checked={typeof props.playerCardMap[playerName].cards['weapons'][cluePersonName] !== 'undefined' && props.playerCardMap[playerName].cards['weapons'][cluePersonName] === true}
													onChange={props.radioOnChange.bind(props.container, {"type": "weapons", "card": cluePersonName, "person": playerName, "have": true})}
													id={"cb"+playerName+cluePersonName+index+"-"+pindex+"have"}
													type="radio"
													value="1"
													name={cluePersonName + "-cb" + index+pindex}
												/>
											</label>
											<br/>
											<label htmlFor={"cb"+playerName+cluePersonName+index+"-"+pindex+"nothave"} >
												Not Have
												<input
													checked={typeof props.playerCardMap[playerName].cards['weapons'][cluePersonName] !== 'undefined' && props.playerCardMap[playerName].cards['weapons'][cluePersonName] === false}
													onChange={props.radioOnChange.bind(props.container, {"type": "weapons", "card": cluePersonName, "person": playerName, "have": false})}
													id={"cb"+playerName+cluePersonName+index+"-"+pindex+"nothave"}
													type="radio"
													value="0"
													name={cluePersonName + "-cb" + index+pindex}
												/>
											</label>
										</td>
									)
								})}
							</tr>
						);
					})}
					<tr className="info">
						<td colSpan={props.players.length+1}>Rooms</td>
					</tr>
					{props.GameData.rooms.map(function(cluePersonName, index){
						return (
							<tr key={index}>
								<td>{cluePersonName}</td>
								{props.players.map(function(playerName, pindex){
									return (
										<td key={"td"+playerName+index+"-"+pindex} className={classCheck(props.playerCardMap[playerName].cards['rooms'][cluePersonName])}>

											<button
												className={"btn btn-default btn-sm resetBtn " + hiddenBtnCheck(props.playerCardMap[playerName].cards['rooms'][cluePersonName]) }
												onClick={props.resetPlayerTile.bind(props.container, {"type": "rooms", "card": cluePersonName, "person": playerName})}>
												X
											</button>

											<label htmlFor={"cb"+playerName+cluePersonName+index+"-"+pindex+"have"}>
												Have
												<input
													checked={typeof props.playerCardMap[playerName].cards['rooms'][cluePersonName] !== 'undefined' && props.playerCardMap[playerName].cards['rooms'][cluePersonName] === true}
													onChange={props.radioOnChange.bind(props.container, {"type": "rooms", "card": cluePersonName, "person": playerName, "have": true})}
													id={"cb"+playerName+cluePersonName+index+"-"+pindex+"have"}
													type="radio"
													value="1"
													name={cluePersonName + "-cb" + index+pindex}
												/>
											</label>
											<br/>
											<label htmlFor={"cb"+playerName+cluePersonName+index+"-"+pindex+"nothave"} >
												Not Have
												<input
													checked={typeof props.playerCardMap[playerName].cards['rooms'][cluePersonName] !== 'undefined' && props.playerCardMap[playerName].cards['rooms'][cluePersonName] === false}
													onChange={props.radioOnChange.bind(props.container, {"type": "rooms", "card": cluePersonName, "person": playerName, "have": false})}
													id={"cb"+playerName+cluePersonName+index+"-"+pindex+"nothave"}
													type="radio"
													value="0"
													name={cluePersonName + "-cb" + index+pindex}
												/>
											</label>
										</td>
									)
								})}
							</tr>
						);
					})}


				</tbody>
			</table>
		</div>
	);

};

module.exports = GameSheet;
