var Legend = require('react-legend');
var helpers = require('../helpers/helpers');

module.exports = function(component){

	var Storage = window.localStorage;

	// If the game is reset, or created this is the object to use to set the game state.
	var newGameObject = helpers.newGameObject;

	// Show a prompt() and ask the user what name they want to add
	Legend.ActionType('NewPlayerPrompt', function(quest, questData){
		var newPlayer = prompt('Player Name.');
		var LocalStorageParsed = Object.assign({}, helpers.isJson(Storage.clueless) ? JSON.parse(Storage.clueless) : Storage.clueless);

		// if the player isn't new
		if(newPlayer && newPlayer.length > 0){
			if(LocalStorageParsed.players && LocalStorageParsed.players.indexOf(newPlayer) < 0){
				LocalStorageParsed.players.push(newPlayer);
				LocalStorageParsed.playerCardMap[newPlayer] = {
					cards: {
						people: {},
						weapons: {},
						rooms: {}
					}
				}

				Storage.clueless = JSON.stringify(LocalStorageParsed);

				quest.next({clueless: JSON.parse(Storage.clueless)});

			}else{
				alert('Player already exsists use another name.')
				quest.reject('Player already exsists use another name.');
			}
		}else{
			alert('Not a valid player name. Try again.');
			quest.reject('Not a valid player name. Try again.');
		}

	});

	// checks to make sure storage has a clueless object and creates one if its missing
	Legend.ActionType('CheckLocalStorage', function(quest, questData){
		if(typeof Storage.clueless === 'undefined'){
			Storage.clueless = JSON.stringify(newGameObject);
		}
		quest.next();
	});

	// resets the game back to the newGameObject
	Legend.ActionType('ResetGame', function(quest, questData){
		Storage.clueless = JSON.stringify(newGameObject);
		quest.next({clueless: JSON.parse(Storage.clueless)});
	});

	// does a forceupdate to rerender react
	Legend.ActionType('Render', function(quest, questData){
		component.forceUpdate();
		quest.next();
	});

	// removes a user from having a card
	Legend.ActionType('ResetPlayerTile', function(quest, questData){
		var data = questData.data;
		var LocalStorageParsed = Object.assign({}, helpers.isJson(Storage.clueless) ? JSON.parse(Storage.clueless) : Storage.clueless);

		delete LocalStorageParsed.playerCardMap[data.person].cards[data.type][data.card];

		Storage.clueless = JSON.stringify(LocalStorageParsed);

		quest.next({ clueless: JSON.parse(Storage.clueless) });
	});

	// updates a player having or not having a specific card
	Legend.ActionType('UpdateCardState', function(quest, questData){
		var data = questData.data;
		var Person = data.person;
		var Card = data.card;
		var Have = data.have;
		var Type = data.type;
		var LocalStorageParsed = Object.assign({}, helpers.isJson(Storage.clueless) ? JSON.parse(Storage.clueless) : Storage.clueless);

		var CardType = LocalStorageParsed.playerCardMap[Person].cards[Type];

		CardType[Card] = Have;

		Storage.clueless = JSON.stringify(LocalStorageParsed);

		quest.next({ clueless: JSON.parse(Storage.clueless) });
	});

}
