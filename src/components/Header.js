import React from 'react';
import { makeStyles, AppBar, Typography, IconButton, Toolbar } from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "sticky",
        color: "#E4CEA7",
        backgroundColor: "#6C83E0"
    },
    exitButton: {
        marginLeft: 'auto',
        color: "#E4CEA7",
    },
    typography_title: {
        marginLeft: 15,
        marginRight: 20,
        wordSpacing: 1,
    }
}))

export default (props) => {
    const classes = useStyles();
    return (
        <AppBar color="inherit" className={classes.appBar}>
            <Toolbar>
                <img
                    src="assets/PMALOGO.png"
                    style={{borderRadius: '50%'}}
                    height='50'
                    width='50'
                />
                <Typography variant="h5" className={classes.typography_title}>Whitelist</Typography>
                <IconButton className={classes.exitButton} onClick={() => props.closeApplication()}>
                    <ExitToApp/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};