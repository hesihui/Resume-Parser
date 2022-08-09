import express from 'express';
import { getCandidates, uploadCandidate } from '../controller/candidates.js'

const router = express.Router();

// fetch all the candiates
router.get('/', getCandidates);
router.post('.', uploadCandidate);
export default router;