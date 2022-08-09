import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

})

export default function Form() {
    const classes = useStyles()

    return (
        <Container>
            <Typography 
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Input your information
            </Typography>

            </Container>
    )
}