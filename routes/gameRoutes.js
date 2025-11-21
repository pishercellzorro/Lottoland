const express = require('express');
const router = express.Router();

// Mock data for demonstration purposes
const games = [
    { id: 1, name: 'Lotto', results: [], jackpot: 500000 },
    { id: 2, name: 'Powerball', results: [], jackpot: 300000 },
];

// GET /api/games - Retrieve all games
router.get('/games', (req, res) => {
    res.json(games);
});

// GET /api/games/:id - Retrieve a specific game by ID
router.get('/games/:id', (req, res) => {
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (game) {
        res.json(game);
    } else {
        res.status(404).send('Game not found');
    }
});

// GET /api/games/:id/results - Retrieve results for a specific game
router.get('/games/:id/results', (req, res) => {
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (game) {
        res.json(game.results);
    } else {
        res.status(404).send('Game not found');
    }
});

// GET /api/games/:id/jackpot - Retrieve jackpot for a specific game
router.get('/games/:id/jackpot', (req, res) => {
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (game) {
        res.json({ jackpot: game.jackpot });
    } else {
        res.status(404).send('Game not found');
    }
});

// POST /api/favorites - Add a game to favorites
router.post('/favorites', (req, res) => {
    // This would normally involve saving to a database
    res.status(201).send('Game added to favorites');
});

// GET /api/search - Search for games
router.get('/search', (req, res) => {
    const searchTerm = req.query.q;
    const results = games.filter(game => game.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.json(results);
});

module.exports = router;