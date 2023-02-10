import { AppBar, Box, Card, CssBaseline, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import CommentIcon from '@mui/icons-material/Comment';
import AlbumIcon from '@mui/icons-material/Album';
import PanoramaIcon from '@mui/icons-material/Panorama';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppContext } from '../../Context/AppContext';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import App from './App';
import Albums from './Albums';
import Posts from './Posts';
import Comments from './Comments';
import Photos from './Photos';
import Todos from './Todos';


const Header = (props) => {

    const { setVista, vista } = useContext(AppContext);

    const [state, setState] = useState({
        left: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    let routes = [
        { name: 'Usuarios', route: 'vw_Users', icon: <AccountCircle sx={{ color: '#4b64ca' }} /> },
        { name: 'Posts', route: 'vw_Post', icon: <ArticleIcon sx={{ color: '#4b64ca' }} /> },
        { name: 'Comentarios', route: 'vw_Comments', icon: <CommentIcon sx={{ color: '#4b64ca' }} /> },
        { name: 'Albums', route: 'vw_Album', icon: <AlbumIcon sx={{ color: '#4b64ca' }} /> },
        { name: 'Fotos', route: 'vw_Photos', icon: <PanoramaIcon sx={{ color: '#4b64ca' }} /> },
        { name: 'Tareas', route: 'vw_Todos', icon: <AddTaskIcon sx={{ color: '#4b64ca' }} /> }
    ]
    function Logout() {
        sessionStorage.clear()
        window.location.href = '/'
    }




    const drawerWidth = 250;

    const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });

    const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );


    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
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
    function Story(props) {
        const SpecificStory = components[props.storyType];
        return <SpecificStory story={props.story} />;
    }
    const style = {
        background: "##EEE",
        backgroundSize: "400% 400%",
        animation: "gradient 10s ease infinite",
        marginTop: '50px',
        marginLeft: '5px'
    }
    let titulo = ''
    switch (vista) {
        case "vw_Users":
            titulo = "Usuarios"
            break;
        case "vw_Album":
            titulo = "Albums"
            break;
        case "vw_Post":
            titulo = "Posts"
            break;
        case "vw_Comments":
            titulo = "Comentarios"
            break;
        case "vw_Photos":
            titulo = "Fotos"
            break;
        case "vw_Todos":
            titulo = "Tareas"
            break;


    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ background: '#FFF' }}>
                <Toolbar>
                    <Box flex={1} display="flex" >
                        <Stack direction="row" spacing={1} alignItems="center">
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: 5,
                                    ...(open && { display: 'none' }),
                                }}>
                                <MenuIcon sx={{ color: '#4b64ca' }} />
                            </IconButton>
                            <Typography sx={{ color: 'black' }}>{titulo}</Typography>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: 5,
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Stack>
                    </Box>
                    <Box display="flex">
                        <Stack direction="row" spacing={1} alignItems="center">
                            <AccountCircle sx={{ color: '#4b64ca' }} />
                            <Divider orientation='vertical' sx={{ background: '#FFF' }} />
                            <Typography sx={{ color: 'black', float: 'right' }}>Bienvenido/a {props.user}</Typography>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {routes.map((items) => (
                        <ListItem disablePadding sx={{
                            '&:hover': {
                                backgroundColor: '#263686',
                                color: '#FFF',
                            }
                        }}>
                            <ListItemButton onClick={() => setVista(items.route)}>
                                <ListItemIcon>
                                    {items.icon}
                                </ListItemIcon>
                                <ListItemText>{items.name}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => Logout()}>
                            <ListItemIcon>
                                <LogoutIcon sx={{ color: '#4b64ca' }} />
                            </ListItemIcon>
                            <ListItemText>Logout</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Box component="main">
                <DrawerHeader />
                <Grid container sx={style} >
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <Card sx={{ boxShadow: '3px 3px 3px 3px grey' }}>
                            <Story storyType={vista} />
                        </Card>
                    </Grid>
                </Grid>


            </Box>
        </Box>


    )
}

export default Header