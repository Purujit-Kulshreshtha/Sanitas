import express from 'express';
import {getUsers, getUser, signin, signup, updateUserData} from '../controllers/user.js'
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/signin', signin)
router.post('/signup', signup)

router.patch('/:id', updateUserData)

export default router;