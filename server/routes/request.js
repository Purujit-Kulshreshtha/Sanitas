import express from 'express';
import {forgotPassword} from "../controllers/request.js";

const router = express.Router();
router.post('/forgotpassword', forgotPassword)


export default router;
