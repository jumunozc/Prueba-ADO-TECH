import { Box, Card, FormControl, Grid, InputLabel, MenuItem, Select, Tooltip, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext';
import Albums from '../GenericViews/Albums';
import App from '../GenericViews/App';
import Comments from '../GenericViews/Comments';
import Header from '../GenericViews/Header';
import Photos from '../GenericViews/Photos';
import Posts from '../GenericViews/Posts';
import Todos from '../GenericViews/Todos';

const Dashboard = () => {

    const { username } = useContext(AppContext);

    const style = {
        background: "##EEE",
        backgroundSize: "400% 400%",
        animation: "gradient 10s ease infinite"
    }

    return (
        <Grid container sx={style}>
            <Header user={username} />
        </Grid>
    )
}

export default Dashboard