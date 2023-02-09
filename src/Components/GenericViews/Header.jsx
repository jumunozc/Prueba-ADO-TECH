import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import CommentIcon from '@mui/icons-material/Comment';
import AlbumIcon from '@mui/icons-material/Album';
import PanoramaIcon from '@mui/icons-material/Panorama';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LogoutIcon from '@mui/icons-material/Logout';
const Header = (props) => {


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
        { name: 'Usuarios', route: '/dashboard', icon: <AccountCircle sx={{ color: '#4b64ca' }} /> },
        { name: 'Posts', route: '/posts', icon: <ArticleIcon sx={{ color: '#4b64ca' }} /> },
        { name: 'Comentarios', route: '/comments', icon: <CommentIcon sx={{ color: '#4b64ca' }} /> },
        { name: 'Albums', route: '/albums', icon: <AlbumIcon sx={{ color: '#4b64ca' }} /> },
        { name: 'Fotos', route: '/photos', icon: <PanoramaIcon sx={{ color: '#4b64ca' }}/> },
        { name: 'Tareas', route: '/todos', icon: <AddTaskIcon sx={{ color: '#4b64ca' }} /> }
    ]
    function Logout() {
        sessionStorage.clear()
        window.location.href = '/'
    }
    return (
        <React.Fragment>
            <Box component="nav" >
                <AppBar sx={{ background: '#FFF' }}>
                    <Toolbar variant="dense">
                        <Box flex={1} display="flex" >
                            <IconButton onClick={toggleDrawer("left", true)}>
                                <MenuIcon sx={{ color: '#4b64ca' }} />
                            </IconButton>
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
            </Box>
            <Drawer
                variant="persistent"
                open={state["left"]}
                anchor="left"
                onClose={toggleDrawer("left", false)}

            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer("left", false)}
                    onKeyDown={toggleDrawer("left", false)}
                >
                    <Stack direction="row" p={2}>
                        <IconButton onClick={toggleDrawer("left", false)} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <IconButton onClick={() => Logout()}>
                        <Stack direction="row" p={2}>
                            <LogoutIcon sx={{ color: '#4b64ca' }}/>
                            <Typography>Logout</Typography>
                        </Stack>
                    </IconButton>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}

export default Header