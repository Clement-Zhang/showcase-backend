const { Router } = require('express');
const {
    addUser,
    getUsers,
    wipe,
} = require('../controllers/showcase.controller.js');

const router = Router();

router.post('/add', addUser);
router.get('/get', getUsers);
router.post('/wipe', wipe);

module.exports = router;
