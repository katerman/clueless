var React = require('react');
var Legend = require('react-legend');

var LegendActions = require('../actions/actions');
var LegendQuests = require('../quests/quests');

var helpers = require('../helpers/helpers');

// used in CWM. Used for frontend to set up table
var clueObjects = helpers.clueGameObjects;

var Storage = window.localStorage;

var ActionButtons = require('../components/action-buttons.jsx');
var Table = require('../components/game-table.jsx');
var Navbar = require('../components/_navbar.jsx');

var App = React.createClass({
    /*
	* componentWillMount
	* call our actions, and set up a default store to use
	*/
    componentWillMount: function() {

		//set up our actions by passing a reference to the react component
        LegendActions(this);

		// setup our local storage and set our global store equal to it if we have something in the local store
        if (Storage.clueless) {
            Legend.UpdateStore({
                clueless: JSON.parse(Storage.clueless),
                gameData: clueObjects
            });
            return;
        }
		//if we don't have anything in local storage, set it up with our default object
		Storage.clueless = JSON.stringify(helpers.newGameObject);
        Legend.UpdateStore({clueless: helpers.newGameObject, gameData: clueObjects});
    },
    /*
	* _playerCardTotal
	* Used to return how many cards a specific player has
	*/
    _playerCardTotal: function(playerName) {
        var store = Legend.GetStore();
        if (store.clueless.playerCardMap[playerName]) {

            var playerCardMap = store.clueless.playerCardMap[playerName].cards;
            var cardValue = 0;

            var totalObj = {};
            var copy = Object.assign(totalObj, playerCardMap.people, playerCardMap.rooms, playerCardMap.weapons);

            Object.keys(copy).forEach(function(key) {
                var value = copy[key];
                if (value === true) {
                    cardValue++;
                }
            });
            return '(' + cardValue + ')';
        }
        return null;
    },
    /*
	* _classCheck
	* for component to return a sepcific class based on an expression
	*/
    _classCheck: function(expr) {
        if (typeof expr === 'undefined') {
            return '';
        } else if (expr === true) {
            return 'success';
        } else {
            return 'danger';
        }
    },
    /*
	* _hiddenBtnCheck
	* just checks if an expression is undefined or not, used to display the x button in the table
	*/
    _hiddenBtnCheck: function(expr) {
        if (typeof expr === 'undefined') {
            return 'hidden';
        }
        return '';
    },
    /*
	* _addNewPlayer
	* fires our add new player quest
	*/
    _addNewPlayer: function() {
        Legend.Quest('AddNewPlayer');
        return false;
    },
    /*
	* _resetGame
	* fires our reset game quest
	*/
    _resetGame: function() {
        Legend.Quest('ResetGame');
        return false;
    },
    /*
	* _resetPlayerTile
	* fires our reset player tile quest, passed in data from the frontend (check game-table-row)
	*/
    _resetPlayerTile: function(data) {
        Legend.Quest('ResetPlayerTile', data);
        return false;
    },
    /*
	* _radioOnChange
	* fires our update card state quest, passed in data from the frontend (check game-table-row)
	*/
    _radioOnChange: function(data) {
        Legend.Quest('UpdateCardState', data);
        return false;
    },
	render: function() {
        return (
			<div>
				<Navbar />

	            <div className="container">
					<div className="col-md-12">
						<div className="row">
			                <ActionButtons
			                    addNewPlayer={this._addNewPlayer}
			                    resetGame={this._resetGame}
			                />
						</div>
					</div>

					<div className="col-md-12">
						<div className="row">
			                <Table
			                    store={Legend.GetStore()}
								classCheck={this._classCheck}
								hiddenBtnCheck={this._hiddenBtnCheck}
								resetPlayerTile={this._resetPlayerTile}
								radioOnChange={this._radioOnChange}
								playerCardTotal={this._playerCardTotal}
								container={this}
			                />
						</div>
					</div>
	            </div>
			</div>
		);
	}

});

module.exports = App;
