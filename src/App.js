import React, { useEffect } from 'react';
import { makeStyles, Fade } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import * as apis from './apis/apis';

import Header from './components/Header';
import MainContainer from './containers/MainContainer';

import * as WLActions from './store/whitelist.actions';

const useStyles = makeStyles((theme) => ({
    main: {
        display: "auto",
        overflow: "auto",
        position: "relative",
        width: 1180,
        height: 700,
        borderStyle: "solid",
        margin: "auto",
        left: 0,
        right: 0,
        top: 65,
        backgroundColor: "#716C7A",
    },
    hide: {
        display: "none",
    },
}))

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const visible = useSelector((state) => state.WhiteList.showWL);

    const closeApplication = () => {
        dispatch(WLActions.hideWhitelist());
        apis.closeWhitelist();
    }

    useEffect(() => {
        document.addEventListener("keydown", (e) => onKeyPress(e));
        return (e) => {
            
            if (e.keyCode === 27) {
                document.removeEventListener("keydown", (e) => onKeyPress(e));
            }
        };
    }, []);

    const onKeyPress = (e) => {
        if (e.keyCode === 27) {
            closeApplication()
        }
    }

    useEffect(() => {
        window.addEventListener("message", (e) => onMessage(e));
        return () => {
            window.removeEventListener("message", (e) => onMessage(e));
        };
    }, []);

    const onMessage = (event) => {
        if (event.data.openWL) {
            dispatch(WLActions.showWhitelist());
            if (event.data.employees) {
                dispatch(WLActions.loadEmployeeList(event.data.employees));
            }
        }
        if (event.data.openWL === false) {
            dispatch(WLActions.clearEmployeeList());
        }
    } 

    return (
        <Fade in={visible} timeout={1000,1000}>
            <div className={classes.main}>
                <Header closeApplication={closeApplication}/>
                <MainContainer closeApplication={closeApplication} />
            </div>
        </Fade>
    )
}

export default App;