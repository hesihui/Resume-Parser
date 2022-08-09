import express from 'express';
import { getCandidates, uploadCandidate, deleteCandidate } from '../controller/candidates.js'

const router = express.Router();

// fetch all the candiates
router.get('/', getCandidates);
router.post('/', uploadCandidate);
router.delete(':id', deleteCandidate);

export default router;