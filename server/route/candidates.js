import express from 'express';
import { getCandidates, uploadCandidate, deleteCandidate, getCandidateBySearch } from '../controller/candidates.js'

const router = express.Router();

router.get('/search', getCandidateBySearch);
// fetch all the candiates
router.get('/', getCandidates);
router.post('/', uploadCandidate);
router.delete('/:id', deleteCandidate);


export default router;