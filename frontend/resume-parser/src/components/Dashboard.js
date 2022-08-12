import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {Container, AppBar, Typography, Grid, Grow, TextField, Box} from '@mui/material';
import Posts from './Posts/Posts';
import {fetchCandidates} from "../api";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";


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
                const response = await axios.get(`http://localhost:5000/candidates`);
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
                const response = await axios.get(`http://localhost:5000/candidates/search?name=${search.name || 'none'}&skills=${search.skills}&experienceYrs=${search.experienceYrs}`);
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

    return (
        <div>
            {/*<TextField*/}
            {/*    label="Search for resume using name, keywords, postion, experience, etc."*/}

            {/*>*/}
            {/*</TextField>*/}
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Box textAlign='center' marginTop={1}>
                    <TextField
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
