var React = require('react');

var GameTableRow = function(props){
	var store = props.store;
	var type = props.type;
	var index = props.rowKey;
	var classCheck = props.classCheck;
	var hiddenBtnCheck = props.hiddenBtnCheck;

	return (
		<tr key={props.rowKey}>
			<td>{props.cluePersonName}</td>
			{store.clueless.players.map(function(playerName, pindex){
				return (
					<td key={"td"+playerName+index+"-"+pindex} className={classCheck(store.clueless.playerCardMap[playerName].cards[type][props.cluePersonName])}>

						<button
							className={"btn btn-default btn-sm resetBtn " + hiddenBtnCheck(store.clueless.playerCardMap[playerName].cards[type][props.cluePersonName]) }
							onClick={props.resetPlayerTile.bind(props.container, {"type": type, "card": props.cluePersonName, "person": playerName})}>
							X
						</button>

						<label htmlFor={"cb"+playerName+props.cluePersonName+index+"-"+pindex+"have"}>
							Have
							<input
								checked={typeof store.clueless.playerCardMap[playerName].cards[type][props.cluePersonName] !== 'undefined' && store.clueless.playerCardMap[playerName].cards[type][props.cluePersonName] === true}
								onChange={props.radioOnChange.bind(props.container, {"type": type, "card": props.cluePersonName, "person": playerName, "have": true})}
								id={"cb"+playerName+props.cluePersonName+index+"-"+pindex+"have"}
								type="radio"
								value="1"
								name={props.cluePersonName + "-cb" + index+pindex}
							/>
						</label>
						<br/>
						<label htmlFor={"cb"+playerName+props.cluePersonName+index+"-"+pindex+"nothave"}>
							Not Have
							<input
								checked={typeof store.clueless.playerCardMap[playerName].cards[type][props.cluePersonName] !== 'undefined' && store.clueless.playerCardMap[playerName].cards[type][props.cluePersonName] === false}
								onChange={props.radioOnChange.bind(props.container, {"type": type, "card": props.cluePersonName, "person": playerName, "have": false})}
								id={"cb"+playerName+props.cluePersonName+index+"-"+pindex+"nothave"}
								type="radio"
								value="0"
								name={props.cluePersonName + "-cb" + index+pindex}
							/>
						</label>
					</td>
				)
			})}
		</tr>
	);

};

module.exports = GameTableRow;
