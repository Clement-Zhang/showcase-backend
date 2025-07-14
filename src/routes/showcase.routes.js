const { Router } = require('express');
const {
    addUser,
    getUsers,
    wipe,
    summarize,
} = require('../controllers/showcase.controller.js');

const router = Router();

router.post('/add', addUser);
router.get('/get', getUsers);
router.post('/wipe', wipe);
router.get('/summarize', summarize);

module.exports = router;
