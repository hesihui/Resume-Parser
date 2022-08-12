import React, {useEffect, useState} from "react";
import Post from "./Post/Post";
import { Grid } from '@mui/material';

const Posts = ({candidates}) => {
    // console.log(candidates);

    return (
            <Grid 
                marginTop='1px'
                display='flex'
                alignItems='center'
                container
                spacing={10}>
                <Grid item xs={12} sm={6} md={6}>
                    {
                        candidates.map(
                            (candidate, index) =>
                                (<Post candidate={candidate} key={index}/>)

                        )
                    }
                </Grid>
            </Grid>
          
        );
      };

export default Posts;