import React, {useEffect, useState} from "react";
import Post from "./Post/Post";
import { Grid } from '@mui/material';

const Posts = ({candidates}) => {
    // console.log(candidates);

    return (
                <Grid container alignItems="stretch" spacing={4}>
                    {candidates.map((candidate) => (
                        <Grid key={candidate._id} item xs={12} sm={12} md={6} lg={4}>
                            <Post candidate={candidate} />
                        </Grid>
                    ))}
                </Grid>
            )

      };

export default Posts;