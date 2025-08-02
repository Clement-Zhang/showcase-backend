import { Router } from 'express';
import showcase from '../controllers/showcase.controller.js';

const router = Router();

router.post('/add', showcase.addUser);
router.get('/get', showcase.getUsers);
router.post('/wipe', showcase.wipe);
router.get('/summarize', showcase.summarize);

export default router;
