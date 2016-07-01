var Legend = require('react-legend');

module.exports = function(){

	Legend.NewQuest(
		{'name': 'AddNewPlayer'},
		[
			{'type': 'CheckLocalStorage'},
			{'type': 'NewPlayerPrompt'},
			{'type': 'Render'}
		]
	);

	Legend.NewQuest(
		{'name': 'ResetGame'},
		[
			{'type': 'CheckLocalStorage'},
			{'type': 'ResetGame'},
			{'type': 'Render'}
		]
	);

	Legend.NewQuest(
		{'name': 'ResetPlayerTile'},
		[
			{'type': 'CheckLocalStorage'},
			{'type': 'ResetPlayerTile'},
			{'type': 'Render'}
		]
	);

	Legend.NewQuest(
		{'name': 'UpdateCardState'},
		[
			{'type': 'CheckLocalStorage'},
			{'type': 'UpdateCardState'},
			{'type': 'Render'}
		]
	);

}();
