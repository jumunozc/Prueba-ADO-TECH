import React, { createContext, useEffect, useState } from 'react'
import { useMediaQuery, useTheme } from '@mui/material';
import config from '../config/config.json'

export const AppContext = createContext();

export function AppContextProvider(props) {
    //#region variables para responsive
    const temita = useTheme();
    const xs = useMediaQuery(temita.breakpoints.up("xs"));
    const sm = useMediaQuery(temita.breakpoints.up("sm"));
    const md = useMediaQuery(temita.breakpoints.up("md"));
    const lg = useMediaQuery(temita.breakpoints.up("lg"));
    //#endregion variables para responsive

    const username = sessionStorage.getItem('user')

    const [todos, setTodos] = useState([])
    const [todosCount, setTodosCount] = useState([])

    const [posts, setPosts] = useState([])
    const [postsCount, setPostsCount] = useState([])

    const [comments, setComments] = useState([])
    const [commentsCount, setCommentsCount] = useState([])

    const [albums, setAlbums] = useState([])
    const [albumsCount, setAlbumsCount] = useState([])

    const [photos, setPhotos] = useState([])
    const [photosCount, setPhotosCount] = useState([])

    const [users, setUsers] = useState([])
    const [usersCount, setUsersCount] = useState([])

    const [vista, setVista] = useState('vw_Users')



    useEffect(() => {

        switch (vista) {
            case "vw_Users":

                fetch(`${config.REACT_APP_API_URL}/users`, {
                    crossdomain: true,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    method: 'GET'
                }).then(async res => ({
                    response: await res.json()
                })).then(async function (data) {
                    setUsersCount(data.response.length)
                    setUsers(data.response)
                })
                break;
            case "vw_Album":
                fetch(`${config.REACT_APP_API_URL}/albums`, {
                    crossdomain: true,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    method: 'GET'
                }).then(async res => ({
                    response: await res.json()
                })).then(async function (data) {
                    setAlbumsCount(data.response.length)
                    setAlbums(data.response)
                })
                break;
            case "vw_Post":
                fetch(`${config.REACT_APP_API_URL}/posts`, {
                    crossdomain: true,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    method: 'GET'
                }).then(async res => ({
                    response: await res.json()
                })).then(async function (data) {
                    setPostsCount(data.response.length)
                    setPosts(data.response)
                })
                console.log("123123")
                break;
            case "vw_Comments":
                fetch(`${config.REACT_APP_API_URL}/comments`, {
                    crossdomain: true,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    method: 'GET'
                }).then(async res => ({
                    response: await res.json()
                })).then(async function (data) {
                    setCommentsCount(data.response.length)
                    setComments(data.response)
                })
                break;
            case "vw_Photos":
                fetch(`${config.REACT_APP_API_URL}/photos`, {
                    crossdomain: true,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    method: 'GET'
                }).then(async res => ({
                    response: await res.json()
                })).then(async function (data) {
                    setPhotosCount(data.response.length)
                    setPhotos(data.response)
                })
                break;
            case "vw_Todos":
                fetch(`${config.REACT_APP_API_URL}/todos`, {
                    crossdomain: true,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    method: 'GET'
                }).then(async res => ({
                    response: await res.json()
                })).then(async function (data) {
                    setTodosCount(data.response.length)
                    setTodos(data.response)
                })
                break;

        }

    }, [vista])

    return (
        <AppContext.Provider value={{
            username,
            xs, sm, md, lg,
            posts, comments, albums, photos, todos, users,
            usersCount, photosCount, albumsCount, commentsCount, postsCount, todosCount,
            vista, setVista
        }}>
            {props.children}
        </AppContext.Provider>
    )
}