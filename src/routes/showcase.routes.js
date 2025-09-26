import { Router } from 'express';
import {
    addUser,
    getUsers,
    summarize,
    editUser,
    deleteUser,
    wipe,
} from '../controllers/showcase.controller.js';

const showcase = Router();

showcase.post('/add', addUser);
showcase.get('/get', getUsers);
showcase.get('/summarize', summarize);
showcase.post('/edit', editUser);
showcase.post('/delete', deleteUser);
showcase.post('/wipe', wipe);

export default showcase;
