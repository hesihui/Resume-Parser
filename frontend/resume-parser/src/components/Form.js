import React, { useState }from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';



export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [details, setDetails] = useState('');
    const [skills, setSkills] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const handleSubmit = (e) => {
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
    }

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
                onChange={(e) => setName(e.target.value)}
                label="Full Name"
                variant="outlined"
                color='secondary'
                margin='normal'
                fullWidth
                required
                error={nameError}
            />
            <TextField
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                variant="outlined"
                color='secondary'
                margin='normal'
                fullWidth
                required
                error={emailError}
            />
            <TextField
                onChange={(e) => setPhone(e.target.value)}
                label="Phone"
                variant="outlined"
                color='secondary'
                margin='normal'
                fullWidth
                required
                error={phoneError}
            />
            <TextField
                onChange={(e) => setCompany(e.target.value)}
                label="Current Company"
                variant="outlined"
                color='secondary'
                margin='normal'
                fullWidth
                
            />
            <TextField
                onChange={(e) => setDetails(e.target.value)}
                label="Details"
                variant="outlined"
                color='secondary'
                margin='normal'
                multiline
                rows={4}
                fullWidth
                
            />
            <TextField
                onChange={(e) => setSkills(e.target.value)}
                label="Skills"
                variant="outlined"
                color='secondary'
                margin='normal'
                multiline
                rows={4}
                fullWidth
                
            />

        
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