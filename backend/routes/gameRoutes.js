const express = require('express');
const rateLimit = require('express-rate-limit');
const cacheMiddleware = require('../middlewares/cacheMiddleware');

const router = express.Router();

// Rate limiting middleware: allow 100 requests per hour
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100,
    message: 'Too many requests, please try again later.',
});

// GET all games with optional filtering, pagination, and search
router.get('/games', limiter, cacheMiddleware, (req, res) => {
    // Logic for filtering, pagination, and searching games
});

// GET game statistics
router.get('/games/stats', limiter, cacheMiddleware, (req, res) => {
    // Logic for retrieving game statistics
});

// GET a single game by ID
router.get('/games/:id', limiter, cacheMiddleware, (req, res) => {
    // Logic for retrieving a game by ID
});

// POST a new game
router.post('/games', limiter, (req, res) => {
    // Logic for creating a new game
});

// PUT update a game by ID
router.put('/games/:id', limiter, (req, res) => {
    // Logic for updating a game
});

// DELETE a game by ID
router.delete('/games/:id', limiter, (req, res) => {
    // Logic for deleting a game
});

module.exports = router;