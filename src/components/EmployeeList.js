import React from 'react';
import { makeStyles, Paper, Typography, Button, ButtonGroup, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        padding: 2,
    },
    topPaper: {
        padding: 5,
        fontFamily: "Roboto",
        display: "flex",
        justifyContent: "space-between"
    },
    bottom: {
        padding: 5,
        backgroundColor: "#6C83E0"
    },
    tableBox: {
        display: "auto",
        padding: 15,
    },
    boxPaper: {
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#D3D3D3",
    },
    button: {
        marginLeft: "auto",
        backgroundColor: "#E4CEA7",
    },
    typography_tableHeader: {
        minWidth: 170,
        color: "#716C7A",
    },
    typography_entry: {
        minWidth: 170,
    }
}))

export default (props) => {
    const classes = useStyles();
    props.employeeList.sort();
    return (
        <div className={classes.main}>
            <Paper className={classes.topPaper} elevation={3} square>
                <Typography className={classes.typography_tableHeader}>Employee</Typography>
                <Typography className={classes.typography_tableHeader}>Job Name</Typography>
                <Typography className={classes.typography_tableHeader}>Rank Name</Typography>
                <Typography className={classes.typography_tableHeader}>Rank Level</Typography>
                <Typography className={classes.typography_tableHeader}>Whitelist Level</Typography>
            </Paper>
            <div className={classes.tableBox}>
                {props.employeeList.map((Label, index) => (
                    <Paper key={index} className={classes.boxPaper} square>
                        <Typography className={classes.typography_entry} variant="body1">{props.employeeList[index].citizensName}</Typography>
                        <Typography className={classes.typography_entry} variant="body1">{props.employeeList[index].jobName}</Typography>
                        <Typography className={classes.typography_entry} variant="body1">{props.employeeList[index].jobRankName}</Typography>
                        <Typography className={classes.typography_entry} variant="body1">{props.employeeList[index].jobRankLevel}</Typography>
                        <ButtonGroup>
                            <Button onClick={() => props.handleMinus(index)}>-</Button>
                            <Button><Typography className={classes.typography_entry} variant="body1">{props.employeeList[index].jobWhitelistLevel}</Typography></Button>
                            <Button onClick={() => props.handlePlus(index)}>+</Button>
                        </ButtonGroup>
                    </Paper>
                ))}
            </div>
            <Paper className={classes.bottom} square>
                <Button variant="contained" className={classes.button} onClick={() => props.closeApplication()}>ACCEPT</Button>
            </Paper>
        </div>
    )
}