import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {Container, AppBar, Typography, Grid, Grow, TextField, Box} from '@mui/material';
import Posts from './Posts/Posts';
import {fetchCandidates} from "../api";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { styled } from '@mui/system';

const Dashboard = () => {
    const searchQuery = {
        name: '',
        skills: '',
        experienceYrs: ''
    };

    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState(searchQuery);


    useEffect(() => {
        const getCandidates = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/candidates`);
                setCandidates(response.data);
            } catch (err) {
             console.log(err);
            } finally {
                setLoading(false);
            }
        };
        getCandidates();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const getCandidatesBySearch = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/candidates/search?name=${search.name || 'none'}&skills=${search.skills}&experienceYrs=${search.experienceYrs}`);
                console.log(response.data);
                const {data} = response.data;
                setCandidates(data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        getCandidatesBySearch();
    }

    const StatWrapper = styled('div')(
        ({ theme }) => `
          min-width: 300px;
        `,
            );

    const MyComponent = styled('div')({
        color: 'darkslategray',
        backgroundColor: 'aliceblue',
        padding: 8,
        borderRadius: 4,
    });


    return (
        <div>
            {/*<TextField*/}
            {/*    label="Search for resume using name, keywords, postion, experience, etc."*/}

            {/*>*/}
            {/*</TextField>*/}
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Box 
                    sx={{
                        margin: '40px',
                    }}
                textAlign='center' 
                justifyContent="center"
                marginTop={1}
                alignItems="center">
                    
                    <TextField
                    sx={{
                        margin: '10px',
                    }}
                        label="Search By Name"
                        variant="outlined"
                        color='secondary'
                        marginLeft={2}
                        required
                        // value={}
                        onChange={(e) =>
                        {setSearch({...searchQuery, name: e.target.value})} }
                    />
                    <TextField
                    sx={{
                        margin: '10px',
                    }}
                        label="Search By Skills, Seperated Skills By Commas"
                        variant="outlined"
                        color='secondary'
                        marginLeft={2}
                        required
                        // value={}
                        onChange={(e) =>
                        {setSearch({...searchQuery, skills: e.target.value})} }
                    />
                    <TextField
                    sx={{
                        margin: '10px',
                    }}
                        label="Search By Experience Years"
                        variant="outlined"
                        color='secondary'
                        marginLeft={2}
                        required
                        // value={}
                        onChange={(e) =>
                        {setSearch({...searchQuery, experienceYrs: e.target.value})} }
                    />
                        <Button
                        sx={{
                            maxWidth: '170px', maxHeight: '70px', minWidth: '170px', minHeight: '55px',
                            marginTop: '10px', fontSize: '20px'
                        }}
                            type="submit"
                            color='secondary'
                            variant="contained"
                            justify='center'
                            endIcon={<KeyboardArrowRightIcon />}
                        >
                            Search
                        </Button>
                </Box>
            </form>
            <Posts candidates={candidates} />
        </div>
    );
}

export default Dashboard;
