import { Box, Button, Card, CardContent, CardMedia, Grid, InputAdornment, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import image from '../../assets/gif2.gif'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from "sweetalert2";

const Login = () => {

    //#region variables para responsive
    const temita = useTheme();
    const xs = useMediaQuery(temita.breakpoints.up("xs"));
    const sm = useMediaQuery(temita.breakpoints.up("sm"));
    const md = useMediaQuery(temita.breakpoints.up("md"));
    const lg = useMediaQuery(temita.breakpoints.up("lg"));
    //#endregion variables para responsive

    const validationSchema = yup.object().shape({
        name: yup.string().required('Campo Obligatorio'),
    })
    const {
        getValues,
        setValue,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(validationSchema) });

    function LogIn() {
        Swal.fire({
            title: "Logeado",
            text: `Bienvenid@ ${getValues('name')} `,
            icon: 'success',
            iconColor: '#4b64ca',
            confirmButtonText: 'Ingresar ',
            confirmButtonColor: '#4b64ca'
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.setItem('user', getValues('name'))
                window.location.href = '/dashboard'
            }
        })
    }

    return (

        <center>
            {(xs || sm) && (!md && !lg) ?
                <Card sx={{
                    mt: 15, width: '60%',
                    background: "linear-gradient(-45deg, #121111, #d5e0e4, #d5e0e4, #4B64CA)",
                    backgroundSize: "400% 400%",
                    animation: "gradient 10s ease infinite",
                }}>
                    <CardMedia
                        component="img"
                        sx={{ width: '100%' }}
                        image={image}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5"> Inicio Sesión</Typography>
                        <form onSubmit={handleSubmit(() => LogIn())}>
                            <TextField
                                label='Usuario'
                                color="secondary"
                                variant="outlined"
                                fullWidth
                                id="name"
                                type="text"
                                size="small"
                                sx={{
                                    '& label.Mui-focused': {
                                        color: '#263686',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: '#263686',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#263686',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#263686',
                                        },
                                    },
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle sx={{ color: '#4b64ca' }} />
                                        </InputAdornment>
                                    ),
                                }}
                                {...register('name')}
                            />
                            <Typography sx={{ color: '#4b64ca' }}>{errors.name?.message}</Typography>

                            <Button type='submit' sx={{
                                border: '1px solid grey', textTransform: 'none', width: '150px', borderRadius: '8px', color: '#263686',
                                background: '#FFF ', '&:hover': {
                                    backgroundColor: '#263686',
                                    color: '#FFF',
                                }, marginTop: '10px'
                            }}>
                                Continuar
                            </Button>
                        </form>

                    </CardContent>


                </Card>
                : (xs && sm) && (md || lg) ?

                    <Card sx={{
                        display: 'flex', mt: 15, width: '45%',
                        background: "linear-gradient(-45deg, #121111, #d5e0e4, #d5e0e4, #4B64CA)",
                        backgroundSize: "400% 400%",
                        animation: "gradient 10s ease infinite",
                    }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', flex: '1 0 auto' }}>
                            <CardContent >
                                <Typography gutterBottom variant="h5"> Inicio Sesión</Typography>
                                <form onSubmit={handleSubmit(() => LogIn())}>
                                    <TextField
                                        label='Usuario'
                                        color="secondary"
                                        variant="outlined"
                                        fullWidth
                                        id="name"
                                        type="text"
                                        size="small"
                                        sx={{
                                            '& label.Mui-focused': {
                                                color: '#263686',
                                            },
                                            '& .MuiInput-underline:after': {
                                                borderBottomColor: '#263686',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '&:hover fieldset': {
                                                    borderColor: '#263686',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#263686',
                                                },
                                            },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle sx={{ color: '#263686' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                        {...register('name')}
                                    />
                                    <Typography sx={{ color: '#4b64ca' }}>{errors.name?.message}</Typography>

                                    <Button type='submit' sx={{
                                        border: '1px solid grey', textTransform: 'none', width: '150px', borderRadius: '8px', color: '#263686',
                                        background: '#FFF ', '&:hover': {
                                            backgroundColor: '#263686',
                                            color: '#FFF',
                                        }, marginTop: '10px'
                                    }}>
                                        Continuar
                                    </Button>
                                </form>

                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: '500px' }}
                            image={image}
                        />
                    </Card>
                    : null
            }
        </center>

    )
}

export default Login