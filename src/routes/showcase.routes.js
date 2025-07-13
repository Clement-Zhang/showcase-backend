const { Router } = require('express');
const {
    addUser,
    getUsers,
    wipe,
} = require('../controllers/showcase.controller.js');

const router = Router();

router.get('/add', addUser);
router.get('/get', getUsers);
router.get('/wipe', wipe);

module.exports = router;
