import React, { useState }from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FileBase from 'react-file-base64'
import { uploadCandidate } from '../api/index';


export default function Form() {
    const [candidateData, setCandidateData]= useState({
        name: '', skills: '', email: '', phone: '', highestDegree: '',
        experienceYr: 0, major:'', school:'', latestJobTitle:'', latestCompany:'',
        selectedResume: ''
    })
    const [name, setName] = useState('');
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
        setNameError(false);
        setEmailError(false);
        setPhoneError(false);

        if (name === '') {
            setNameError(true);
        }
        if (email === '') {
            setEmailError(true);
        }
        if (phone === '') {
            setPhoneError(true);
        }

        if (name && email && phone) {
            console.log(name, email, phone, company, details, skills);
        }

        console.log(candidateData);
        try {
            await uploadCandidate(candidateData);
        } catch (error) {
            console.log(error);
        }
    }

    const Degrees = [
        'BA',
        'BS',
        'MA',
        'MS',
        'PhD'
    ];

  return (
    <Container>
        <Typography 
            variant="h5" 
            color='textSecondary'
            component='h2'
            align='center'
            margin={5}
            gutterBottom
        > 
            Please fill in your information below
        </Typography>

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
                label="Full Name"
                variant="outlined"
                color='secondary'
                margin='normal'
                fullWidth
                required
                error={nameError}
                onChange={(e) =>
                    setCandidateData({...candidateData, name: e.target.value})}
            />
            <TextField
                label="Email"
                variant="outlined"
                color='secondary'
                margin='normal'
                fullWidth
                required
                error={emailError}
                onChange={(e) =>
                    setCandidateData({...candidateData, email: e.target.value})}
            />
            <TextField
                label="Phone"
                variant="outlined"
                color='secondary'
                margin='normal'
                fullWidth
                required
                error={phoneError}
                onChange={(e) =>
                    setCandidateData({...candidateData, phone: e.target.value})}
            />
            <TextField
                label="Current Company"
                variant="outlined"
                color='secondary'
                margin='normal'
                fullWidth
                onChange={(e) =>
                    setCandidateData({...candidateData, latestCompany: e.target.value})}
            />
            <TextField
                label="Current Job Title"
                variant="outlined"
                color='secondary'
                margin='normal'
                fullWidth
                onChange={(e) =>
                    setCandidateData({...candidateData, latestJobTitle: e.target.value})}
            />
            <TextField
                label="Total Experience Years"
                variant="outlined"
                color='secondary'
                margin='normal'
                fullWidth
                onChange={(e) =>
                    setCandidateData({...candidateData, experienceYr: Number(e.target.value)})}
            />
            <FormControl fullWidth variant="outlined" margin='normal'>
                <InputLabel id="demo-simple-select-label">Highest Degree</InputLabel>
                <Select
                    label="Age"
                    onChange={(e) =>
                        setCandidateData({...candidateData, highestDegree: e.target.value})}
                >
                    <MenuItem value={'BA'}>BA</MenuItem>
                    <MenuItem value={'BS'}>BS</MenuItem>
                    <MenuItem value={'MA'}>MA</MenuItem>
                    <MenuItem value={'MS'}>MS</MenuItem>
                    <MenuItem value={'PhD'}>PhD</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Major"
                variant="outlined"
                color='secondary'
                margin='normal'
                fullWidth
                onChange={(e) =>
                    setCandidateData({...candidateData, major: e.target.value})}
            />
            <TextField
                label="School"
                variant="outlined"
                color='secondary'
                margin='normal'
                fullWidth
                onChange={(e) =>
                    setCandidateData({...candidateData, school: e.target.value})}
            />
            <TextField
                label="Skills: Seperate Your Skills by Commas"
                variant="outlined"
                color='secondary'
                margin='normal'
                multiline
                rows={4}
                fullWidth
                onChange={(e) =>
                    setCandidateData({...candidateData, skills: e.target.value.split(',')})}
            />
            <div>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64}) =>
                        setCandidateData({ ...candidateData, selectedResume: base64 })}
                />
            </div>
        <Box textAlign='center' marginTop={5}>
            <Button
                type="submit"
                color='secondary'
                variant="contained"
                justify='center'
                margin={5}
                endIcon={<KeyboardArrowRightIcon />}
            >
                submit
            </Button>
        </Box>
        </form>
    </Container>
    );
}