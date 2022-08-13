import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import MenuItem from "@mui/material/MenuItem";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import FileBase from 'react-file-base64'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadCandidate } from '../api/index';
import '../App.css';


export default function Form() {
    const [candidateData, setCandidateData] = useState({
        name: '', skills: '', email: '', phone: '', highestDegree: '',
        experienceYr: 0, major: '', school: '', latestJobTitle: '', latestCompany: '',
        selectedResume: ''
    })

    const [experienceYr, setExperienceYr] = useState('');

    const [name, setName] = useState('');
    const [highestDegree, setHighestDegree] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [details, setDetails] = useState('');
    const [skills, setSkills] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newData = await uploadCandidate(candidateData);
            notifySuccess();
            clear();
        } catch (error) {
            notifyFailure();
            console.log(error);
        }
    }

    const notifySuccess = () => toast("Candidate Profile Successfully Uploaded!");
    const notifyFailure = () => toast.error("Error Occurred During Uploading...");

    const clear = () => {
        setExperienceYr('');
        setCandidateData({
            name: '', skills: '', email: '', phone: '', highestDegree: '',
            experienceYr: 0, major: '', school: '', latestJobTitle: '', latestCompany: '',
            selectedResume: ''
        });
    }

    return (
        <Container>
            <Box
                sx={{
                    width: 1105,
                    height: 35,
                    boxShadow: 5,
                    borderRadius: 2,
                    backgroundColor: 'background.paper'
                }}
            >
                <Typography
                    variant="h5"
                    color='textSecondary'
                    component='h2'
                    align='center'
                    justify='center'
                    fontWeight='bold'
                    margin={5}
                    gutterBottom
                >
                    Please fill in your information below
                </Typography>
            </Box>
            <ToastContainer />
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Box
                    sx={{
                        width: 1105,
                        height: 140,
                        boxShadow: 5,
                        borderRadius: 2,
                        align: 'center',
                        marginTop: 5,
                        backgroundColor: 'background.paper'
                    }}
                >
                    <br></br>
                    <Typography
                        variant="h6"
                        color='textSecondary'
                        component='h6'
                        marginLeft={5}
                        fontWeight='bold'
                        gutterBottom
                    >
                        Personal Details
                    </Typography>
                    <Grid container direction={"row"} spacing={5} marginLeft={0}>
                        <Grid item>
                            <TextField
                                label="Full Name"
                                variant="standard"
                                color='secondary'
                                style={{ width: 300 }}
                                required
                                value={candidateData.name}
                                onChange={(e) =>
                                    setCandidateData({ ...candidateData, name: e.target.value })}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Email"
                                variant="standard"
                                color='secondary'
                                style={{ width: 300 }}
                                required
                                value={candidateData.email}
                                onChange={(e) =>
                                    setCandidateData({ ...candidateData, email: e.target.value })}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Phone"
                                variant="standard"
                                color='secondary'
                                style={{ width: 300 }}
                                required
                                value={candidateData.phone}
                                onChange={(e) =>
                                    setCandidateData({ ...candidateData, phone: e.target.value })}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    sx={{
                        width: 1105,
                        height: 140,
                        boxShadow: 5,
                        borderRadius: 2,
                        align: 'center',
                        marginTop: 5,
                        backgroundColor: 'background.paper'
                    }}
                >
                    <br></br>
                    <Typography
                        variant="h6"
                        color='textSecondary'
                        component='h6'
                        marginLeft={5}
                        fontWeight='bold'
                        gutterBottom
                    >
                        Education
                    </Typography>
                    <Grid container direction={"row"} spacing={5} marginLeft={0}>
                        <Grid item>
                            <FormControl fullWidth variant="outlined" style={{ width: 300 }}>
                                <InputLabel id="demo-simple-select-label">Highest Degree</InputLabel>
                                <Select
                                    value={candidateData.highestDegree}
                                    label="Age"
                                    onChange={(e) => {
                                        setCandidateData({ ...candidateData, highestDegree: e.target.value })
                                    }}
                                >
                                    <MenuItem value={'BA'}>BA</MenuItem>
                                    <MenuItem value={'BS'}>BS</MenuItem>
                                    <MenuItem value={'MA'}>MA</MenuItem>
                                    <MenuItem value={'MS'}>MS</MenuItem>
                                    <MenuItem value={'PhD'}>PhD</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <TextField
                                label="School"
                                variant="standard"
                                color='secondary'
                                style={{ width: 300 }}
                                fullWidth
                                value={candidateData.school}
                                onChange={(e) =>
                                    setCandidateData({ ...candidateData, school: e.target.value })}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Major"
                                variant="standard"
                                color='secondary'
                                style={{ width: 300 }}
                                fullWidth
                                value={candidateData.major}
                                onChange={(e) =>
                                    setCandidateData({ ...candidateData, major: e.target.value })}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    sx={{
                        width: 1105,
                        height: 300,
                        boxShadow: 5,
                        borderRadius: 2,
                        align: 'center',
                        marginTop: 5,
                        backgroundColor: 'background.paper'
                    }}
                >
                    <br></br>
                    <Typography
                        variant="h6"
                        color='textSecondary'
                        component='h6'
                        marginLeft={5}
                        fontWeight='bold'
                        gutterBottom
                    >
                        Professional Experience
                    </Typography>
                    <Grid container direction={"row"} spacing={5} marginLeft={0}>
                        <Grid item>
                            <TextField
                                label="Current Company"
                                variant="standard"
                                color='secondary'
                                style={{ width: 300 }}
                                fullWidth
                                value={candidateData.latestCompany}
                                onChange={(e) =>
                                    setCandidateData({ ...candidateData, latestCompany: e.target.value })}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Current Job Title"
                                variant="standard"
                                color='secondary'
                                style={{ width: 300 }}
                                fullWidth
                                value={candidateData.latestJobTitle}
                                onChange={(e) =>
                                    setCandidateData({ ...candidateData, latestJobTitle: e.target.value })}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Total Experience Years - Only Input Number"
                                variant="standard"
                                color='secondary'
                                style={{ width: 300 }}
                                fullWidth
                                value={experienceYr}
                                onChange={(e) => {
                                    setExperienceYr(e.target.value)
                                    setCandidateData({ ...candidateData, experienceYr: Number(e.target.value) })
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction={"row"} spacing={5} marginLeft={0} marginTop={0}>
                        <Grid item>
                            Skills:
                        </Grid>
                        <Grid item>
                            <TextField
                                variant="outlined"
                                color='secondary'
                                style={{ width: 500 }}
                                marginLeft='normal'
                                multiline
                                rows={4}
                                value={candidateData.skills}
                                onChange={(e) =>
                                    setCandidateData({ ...candidateData, skills: e.target.value.split(',') })}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box marginTop={3}>
                    <Typography
                        variant="h6"
                        color='textSecondary'
                        component='h2'
                        fontWeight='bold'
                        gutterBottom
                    >
                        Upload your Resume:
                    </Typography>
                    <div className="input-file">
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) =>
                                setCandidateData({ ...candidateData, selectedResume: base64 })}
                        />
                    </div>
                </Box>
                <Box textAlign='center' marginTop={2}>
                    <Button
                        type="submit"
                        color='primary'
                        variant="contained"
                        justify='center'
                        margin={5}
                        endIcon={<KeyboardArrowRightIcon />}
                    >
                        submit
                    </Button>
                </Box>
            </form>
            <br></br>
        </Container>
    );
}
