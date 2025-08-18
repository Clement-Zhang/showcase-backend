import { Router } from 'express';
import {
    addUser,
    getUsers,
    summarize,
    editUser,
    deleteUser,
    wipe,
} from '../controllers/showcase.controller.js';

const router = Router();

router.post('/add', addUser);
router.get('/get', getUsers);
router.get('/summarize', summarize);
router.post('/edit', editUser);
router.post('/delete', deleteUser);
router.post('/wipe', wipe);

export default router;
