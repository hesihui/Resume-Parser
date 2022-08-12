import React from "react";
import Post from "./Post/Post";
import { Grid } from '@mui/material';

const Posts = () => {
    return (
        
            <Grid 
                marginTop='1px'
                display='flex'
                alignItems='center'
                container
                spacing={10}>
                <Grid item xs={12} sm={6} md={6}>
                  <Post />
                  <Post />
                  <Post />
                </Grid>
            
            </Grid>
          
        );
      };

export default Posts;