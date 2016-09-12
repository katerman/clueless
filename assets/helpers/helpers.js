module.exports = {
    isJson: function(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    },
    clueGameObjects: {
        'people': [
            'Colonel Mustard',
            'Professor Plum',
            'Mr. Green',
            'Mrs. Peacock',
            'Miss Scarlet',
            'Mrs. White'
        ],
        'weapons': [
            'Knife',
            'Candlestick',
            'Revolver',
            'Rope',
            'Lead Pipe',
            'Wrench'
        ],
        'rooms': [
            'Hall',
            'Lounge',
            'Dining Room',
            'Kitchen',
            'Ballroom',
            'Conservatory',
            'Billiard Room',
            'Library',
            'Study'
        ],
    },
    newGameObject: {
        players: ['self'],
        playerCardMap: {
            'self': {
                'cards': {
                    'people': {
                        'Colonel Mustard': false,
                        'Professor Plum': false,
                        'Mr. Green': false,
                        'Mrs. Peacock': false,
                        'Miss Scarlet': false,
                        'Mrs. White': false
                    },
                    'weapons': {
                        'Knife': false,
                        'Candlestick': false,
                        'Revolver': false,
                        'Rope': false,
                        'Lead Pipe': false,
                        'Wrench': false
                    },
                    'rooms': {
                        'Hall': false,
                        'Lounge': false,
                        'Dining Room': false,
                        'Kitchen': false,
                        'Ballroom': false,
                        'Conservatory': false,
                        'Billiard Room': false,
                        'Library': false,
                        'Study': false
                    }
                }
            }
        }
    }
}
