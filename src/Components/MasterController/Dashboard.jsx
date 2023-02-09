import { Card, FormControl, Grid, InputLabel, MenuItem, Select, Tooltip } from '@mui/material';
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

    const { xs, sm, md, lg, username, vista, setVista } = useContext(AppContext);

    const views = [
        { vista: "vw_Users", descripcion: "Usuarios" },
        { vista: "vw_Album", descripcion: "Albums" },
        { vista: "vw_Post", descripcion: "Posts" },
        { vista: "vw_Comments", descripcion: "Comentarios" },
        { vista: "vw_Photos", descripcion: "Fotos" },
        { vista: "vw_Todos", descripcion: "Tareas" },
    ]
    const components = {
        vw_Users: App,
        vw_Album: Albums,
        vw_Post: Posts,
        vw_Comments: Comments,
        vw_Photos: Photos,
        vw_Todos: Todos
    };

    const handleChange = (event) => {
        setVista(event.target.value);
    };

    function Story(props) {

        // ¡Correcto! El tipo JSX puede ser una variable en mayúscula.
        const SpecificStory = components[props.storyType];
        return <SpecificStory story={props.story} />;
    }
    const style = {
        background: "##EEE",
        backgroundSize: "400% 400%",
        animation: "gradient 10s ease infinite"
    }

    return (
        <Grid container sx={style}>
            <Header user={username} />
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '50px 0px 10px 0px' }}>
                <Card sx={{ boxShadow: '3px 3px 3px 3px grey',background:'#0E0E0E' }}>
                    <Grid container spacing={2} style={{ padding: '10px' }} >
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Tooltip title="Control de recursos" placement="bottom">
                                <FormControl fullWidth >
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={vista}
                                        onChange={handleChange}
                                        sx={{color:'#0E0E0E',background:'#FFF'}}
                                    >
                                        {views.map((items) => (
                                            <MenuItem value={items.vista}>{items.descripcion}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Tooltip>
                        </Grid>
                    </Grid>

                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}  >

                <Card sx={{ boxShadow: '3px 3px 3px 3px grey' }}>
                    <Story storyType={vista} />
                </Card>

            </Grid>
        </Grid>
    )
}

export default Dashboard