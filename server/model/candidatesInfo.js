import mongoose from 'mongoose';

const candidateSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    skills: [String],
    email: String,
    phone: String,
    highestDegree: String,
    major: String,
    school: String,
    latestJobTitle: String,
    latestCompany: String,
    selectedResume: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const CandidateInfo = mongoose.model('CandidateInfo', candidateSchema);

export default CandidateInfo;