import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000'});

export const uploadCandidate = (newCandidateInfo) => API.post('/candidates', newCandidateInfo);
export const deleteCandidate = (id) => API.delete(`/candidates/${id}`);
export const fetchCandidateBySearch = (searchQuery) => API.get(`/candidates/search?name=${searchQuery.name || 'none'}&skills=${searchQuery.skills}&experienceYrs=${searchQuery.experienceYr}`)