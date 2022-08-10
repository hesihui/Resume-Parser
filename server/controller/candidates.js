import CandidateInfo from "../model/candidatesInfo.js";
import candidatesInfo from "../model/candidatesInfo.js";
import mongoose from "mongoose";

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
    const { name, email, phone, skills, highestDegree,
        major, school, experienceYr, latestJobTitle, latestCompany, selectedResume } = req.body;

    const newCandidate = new CandidateInfo({ name, email, phone, skills, highestDegree,
        major, school, experienceYr, latestJobTitle, latestCompany, selectedResume });

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

export const getCandidateBySearch = async (req, res) => {
    const { name, skills, experienceYrs } = req.query;

    try {
        const nameSearch = new RegExp(name, "i");
        const exYr = Number(experienceYrs);
        const candidates = await candidatesInfo.find({
            $or: [{ nameSearch },
                { experienceYr: {$gte: exYr} },
                { skills: { $in: skills.split(',') }}]
        })
        res.json({ data: candidates });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
