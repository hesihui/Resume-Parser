import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Modal, Box } from '@mui/material';
import axios from "axios";
import './styles.css'

const Post = ({ candidate }) => {
  // console.log("candidate", candidate);

  function base64toBlob(data) {
    const base64Data = data.substr('data:application/pdf;base64,'.length);
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);

    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);

      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: "application/pdf" });
  }


  function openBase64NewTab(base64Pdf) {
    let blob = base64toBlob(base64Pdf);
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, "pdfBase64.pdf");
    } else {
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl);
    }
  }

  const handleDelete= (id) => {
    const deleteCandidate = async (id) => {
      try {
        const response = await axios.delete(`http://localhost:8000/candidates/${id}`);
      } catch (err) {
        console.log(err);
      }
    };
    deleteCandidate(id);
    window.location.reload();
  }

  return (
    <Card
      style={{
        margin: '30px',
        boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.25)',
        borderRadius: '25px',
        
      }}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        height='100%'
        position='relative'
        margin="10px"
    > 
      <Box 
        sx={{margin: '30px'}}
          
        >
      
      <Typography sx={{textAlign: 'center'}} variant="h3" color="textSecondary" component="h2">Name: {candidate.name}</Typography>
      <Typography variant="h5" color="textSecondary"> {candidate.latestJobTitle} @ {candidate.latestCompany}</Typography>

      <Typography variant="body1" color="textSecondary" component="h2">Phone: {candidate.phone} &nbsp; Email: {candidate.email}</Typography>
      <Typography variant="body1" color="textSecondary" component="h2">Degree: {candidate.highestDegree} &nbsp;
        Major: {candidate.major}</Typography>
      <Typography variant="body1" color="textSecondary"> School: {candidate.school}</Typography>
      <Typography variant="body1" color="textSecondary"> Experience Years: {candidate.experienceYr}</Typography>
      <Typography variant="body1" color="textSecondary"> Skills: {candidate.skills.join(', ')}</Typography>
      <Box textAlign='center'>
      <Button sx={{ marginTop: '20px' }} variant='contained' onClick={() => openBase64NewTab(candidate.selectedResume) }>Show Resume </Button>
      <Button sx={{ marginTop: '10px' }} variant='outlined' onClick={() => handleDelete(candidate._id) }>Delete Candidate</Button>
      </Box>
      </Box>
    </Card>
  );
};

export default Post;