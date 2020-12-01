const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/playlists/:id/reviews', reviewsCtrl.create);
router.delete('/playlists/:id/reviews', reviewsCtrl.delete);
router.put('/playlists/:id/reviews', reviewsCtrl.update);

module.exports = router;