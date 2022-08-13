import React, {useEffect, useState} from "react";
import Post from "./Post/Post";
import { Grid } from '@mui/material';

const Posts = ({candidates}) => {
    // console.log(candidates);

    return (
            // <Grid
            //     marginTop='1px'
            //     display='flex'
            //     alignItems='center'
            //     container
            //     direction="row"
            //     spacing={5}>
            //     <Grid item xs={12} sm={6} md={5}>
            //         {
            //             candidates.map(
            //                 (candidate, index) =>
            //                     (   <Grid key={candidate._id} item md={6} >
            //                           <Post candidate={candidate} key={index}/>
            //                         </Grid>
            //                         )
            //
            //             )
            //         }
            //     </Grid>
            // </Grid>
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