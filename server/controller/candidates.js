import CandidateInfo from "../model/candidatesInfo.js";
import candidatesInfo from "../model/candidatesInfo.js";

// get all the candidates
export const getCandidates = async (req, res) => {
    try {
        const candidateInfo = await CandidateInfo.find();
        res.status(200).json(candidateInfo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// upload candidate info
export const uploadCandidate = async (req, res) => {
    const { firstName, lastName, email, phone, skills, highestDegree,
        major, school, experienceYhr, latestJobTitle, latestCompany, selectedResume } = req.body;

    const newCandidate = new CandidateInfo({ firstName,  lastName, email, phone, skills, highestDegree,
        major, school, experienceYhr, latestJobTitle, latestCompany, selectedResume });

    try {
        await newCandidate.save();
        res.status(201).json(newCandidate);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// delete candidate record
export const deleteCandidate = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No Candidate with id: ${id}`);

    await candidatesInfo.findByIdAndRemove(id);
    res.json({ message: "Candidate Info has been deleted successfully." });
}

