import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext';
import { Accordion, AccordionDetails, AccordionSummary, Card, Divider, Grid, List, ListItem, Paper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import GenericFunctions from '../../hooks/GenericFunctions';
import config from '../../config/config.json'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {

  const { xs, sm, md, lg, users, usersCount } = useContext(AppContext);
  const { DetectUser } = GenericFunctions()

  useEffect(() => {
    DetectUser()
  }, [])

  const [arr, setArr] = useState([])

  const [albums, setAlbum] = useState([])

  const [posts, setPosts] = useState([])

  async function GetAlbums(key) {

    await fetch(`${config.REACT_APP_API_URL}/users/${key}/albums`, {
      crossdomain: true,
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      method: 'GET'
    }).then(async res => ({
      response: await res.json()
    })).then(async function (data) {
      setAlbum(data.response)
    })

  }

  function Todos(key) {
    fetch(`${config.REACT_APP_API_URL}/users/${key}/todos`, {
      crossdomain: true,
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      method: 'GET'
    }).then(async res => ({
      response: await res.json()
    })).then(async function (data) {
      setArr(data.response)
    })
  }
  function Posts(key) {
    fetch(`${config.REACT_APP_API_URL}/users/${key}/posts`, {
      crossdomain: true,
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      method: 'GET'
    }).then(async res => ({
      response: await res.json()
    })).then(async function (data) {
      setPosts(data.response)
    })
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'name', headerName: 'Nombres', width: 130 },
    { field: 'username', headerName: 'Usuario', width: 130 },
    { field: 'email', headerName: 'Email', width: 220 },
    {
      field: 'address', headerName: 'Dirección', width: 260, valueGetter: (params) =>

        `${params.row.address.street || ''} ${params.row.address.suite || ''} ${params.row.address.city || ''}`
    },
    { field: 'phone', headerName: 'Telefono', width: 200, },
    { field: 'website', headerName: 'Sitio Web', width: 120, },
    {
      field: 'company', headerName: 'Empresa', width: 200, valueGetter: (params) =>

        `${params.row.company.name || ''}`
    },
    {
      field: 'companySlogan', headerName: 'Slogan Empresarial', width: 280, valueGetter: (params) =>

        `${params.row.company.catchPhrase || ''}`
    },
  ];

  return (
    <Card sx={{ background: '#FFF' }}>
      {(xs || sm) && (!md && !lg) ?
        <div>
          <Typography variant='h4' sx={{ textAlign: 'left', padding: '5px', color: '#EEE' }}>
            Resumen de usuarios
          </Typography>
          <Grid container >
            <Grid item xs={12} sm={12}>
              <Grid container>
                <Grid item xs={12} sm={12} sx={{ padding: '5px' }}>
                  <Paper style={{ maxHeight: 200, overflow: 'auto' }}>

                    <Typography variant='h6' sx={{ textAlign: 'left', padding: '5px', fontWeight: 'bolder' }}>Tareas de usuarios</Typography>
                    {users.map((item, key) => (
                      <Accordion key={key}>
                        <AccordionSummary onClick={() => Todos(item.id)} expandIcon={<ExpandMoreIcon sx={{ color: '#4b64ca' }} />}>{item.name}</AccordionSummary>
                        <AccordionDetails >
                          <Paper style={{ height: '300px', overflow: 'auto' }}>
                            <List>
                              {arr.map((item, key) => (
                                <>
                                  <ListItem key={key} disablePadding>
                                    <table cellSpacing={0} style={{ fontFamily: "'Poppins', sans-serif", width: '100%', marginBottom: '10px' }}>
                                      <tr>
                                        <th />
                                        <th />
                                      </tr>
                                      <tr>
                                        <td><Typography><span style={{ fontWeight: 'bolder' }}>Tarea:</span>  {item.title}</Typography></td>
                                      </tr>
                                      <tr>
                                        <td><Typography><span style={{ fontWeight: 'bolder' }}>Estado de la tarea: </span> {item.completed ? "Completada" : "Sin Completar"}</Typography></td>
                                      </tr>
                                    </table>
                                  </ListItem>
                                  <Divider />
                                </>
                              ))}
                            </List>
                          </Paper>
                        </AccordionDetails>
                      </Accordion>
                    ))}

                  </Paper>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ padding: '30px 5px 5px 5px', }}>
                  <Paper style={{ maxHeight: 200, overflow: 'auto' }}>

                    <Typography variant='h6' sx={{ textAlign: 'left', padding: '5px', fontWeight: 'bolder' }}>Albums de usuarios</Typography>
                    {users.map((item, key) => (
                      <Accordion>
                        <AccordionSummary onClick={() => GetAlbums(item.id)} expandIcon={<ExpandMoreIcon sx={{ color: '#4b64ca' }} />}>{item.name}</AccordionSummary>
                        <AccordionDetails >
                          <Paper style={{ height: '300px', overflow: 'auto' }}>
                            <List>
                              {albums.map((item) => (
                                <>
                                  <ListItem key={key} disablePadding>
                                    <Typography><span style={{ fontWeight: 'bolder' }}>Titulo del album:</span>  {item.title}</Typography>
                                  </ListItem>
                                  <Divider />
                                </>
                              ))}
                            </List>
                          </Paper>
                        </AccordionDetails>
                      </Accordion>
                    ))}

                  </Paper>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ padding: '30px 5px 5px 5px', }}>
                  <Paper style={{ maxHeight: 200, overflow: 'auto' }}>

                    <Typography variant='h6' sx={{ textAlign: 'left', padding: '5px', fontWeight: 'bolder' }}>Posts de usuarios</Typography>
                    {users.map((item, key) => (
                      <Accordion>
                        <AccordionSummary onClick={() => Posts(item.id)} expandIcon={<ExpandMoreIcon sx={{ color: '#4b64ca' }} />}>{item.name}</AccordionSummary>
                        <AccordionDetails >
                          <Paper style={{ height: '300px', overflow: 'auto' }}>
                            <List>
                              {posts.map((item) => (
                                <>
                                  <ListItem key={key} disablePadding>
                                    <table cellSpacing={0} style={{ fontFamily: "'Poppins', sans-serif", width: '100%', marginBottom: '10px' }}>
                                      <tr>
                                        <th />
                                        <th />
                                      </tr>
                                      <tr>
                                        <td><Typography><span style={{ fontWeight: 'bolder' }}>Titulo:</span>  {item.title}</Typography></td>
                                      </tr>
                                      <tr>
                                        <td><Typography><span style={{ fontWeight: 'bolder' }}>Post: </span> {item.body}</Typography></td>
                                      </tr>
                                    </table>
                                  </ListItem>
                                  <Divider />
                                </>
                              ))}
                            </List>
                          </Paper>
                        </AccordionDetails>
                      </Accordion>
                    ))}

                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} sx={{ padding: '5px' }}>
              <Card sx={{ height: 670, width: '100%', background: '#EEE' }}>
                <DataGrid
                  rows={users}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[usersCount]}
                  sx={{

                    '& .MuiDataGrid-columnHeaders': { color: '#FFF', background: '#4b64ca' },
                    '& .css-17jjc08-MuiDataGrid-footerContainer': { color: '#FFF', background: '#4b64ca' },
                    '& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar': { color: '#FFF' },
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </div>

        : (xs && sm) && (md || lg) ?
          <div style={{ width: "1800px" }}>
            <Grid container >
              <Grid item md={3} lg={3}>
                <Grid container>
                  <Grid item md={12} lg={12} sx={{ padding: '5px' }}>
                    <Paper style={{ maxHeight: 200, overflow: 'auto' }}>

                      <Typography variant='h6' sx={{ textAlign: 'left', padding: '5px', fontWeight: 'bolder' }}>Tareas de usuarios</Typography>
                      {users.map((item, key) => (
                        <Accordion key={key}>
                          <AccordionSummary onClick={() => Todos(item.id)} expandIcon={<ExpandMoreIcon sx={{ color: '#4b64ca' }} />}>{item.name}</AccordionSummary>
                          <AccordionDetails >
                            <Paper style={{ height: '300px', overflow: 'auto' }}>
                              <List>
                                {arr.map((item, key) => (
                                  <>
                                    <ListItem key={key} disablePadding>
                                      <table cellSpacing={0} style={{ fontFamily: "'Poppins', sans-serif", width: '100%', marginBottom: '10px' }}>
                                        <tr>
                                          <th />
                                          <th />
                                        </tr>
                                        <tr>
                                          <td><Typography><span style={{ fontWeight: 'bolder' }}>Tarea:</span>  {item.title}</Typography></td>
                                        </tr>
                                        <tr>
                                          <td><Typography><span style={{ fontWeight: 'bolder' }}>Estado de la tarea: </span> {item.completed ? "Completada" : "Sin Completar"}</Typography></td>
                                        </tr>
                                      </table>
                                    </ListItem>
                                    <Divider />
                                  </>
                                ))}
                              </List>
                            </Paper>
                          </AccordionDetails>
                        </Accordion>
                      ))}

                    </Paper>
                  </Grid>
                  <Grid item md={12} lg={12} sx={{ padding: '30px 5px 5px 5px', }}>
                    <Paper style={{ maxHeight: 200, overflow: 'auto' }}>

                      <Typography variant='h6' sx={{ textAlign: 'left', padding: '5px', fontWeight: 'bolder' }}>Albums de usuarios</Typography>
                      {users.map((item, key) => (
                        <Accordion>
                          <AccordionSummary onClick={() => GetAlbums(item.id)} expandIcon={<ExpandMoreIcon sx={{ color: '#4b64ca' }} />}>{item.name}</AccordionSummary>
                          <AccordionDetails >
                            <Paper style={{ height: '300px', overflow: 'auto' }}>
                              <List>
                                {albums.map((item) => (
                                  <>
                                    <ListItem key={key} disablePadding>
                                      <Typography><span style={{ fontWeight: 'bolder' }}>Titulo del album:</span>  {item.title}</Typography>
                                    </ListItem>
                                    <Divider />
                                  </>
                                ))}
                              </List>
                            </Paper>
                          </AccordionDetails>
                        </Accordion>
                      ))}

                    </Paper>
                  </Grid>
                  <Grid item md={12} lg={12} sx={{ padding: '30px 5px 5px 5px', }}>
                    <Paper style={{ maxHeight: 200, overflow: 'auto' }}>

                      <Typography variant='h6' sx={{ textAlign: 'left', padding: '5px', fontWeight: 'bolder' }}>Posts de usuarios</Typography>
                      {users.map((item, key) => (
                        <Accordion>
                          <AccordionSummary onClick={() => Posts(item.id)} expandIcon={<ExpandMoreIcon sx={{ color: '#4b64ca' }} />}>{item.name}</AccordionSummary>
                          <AccordionDetails >
                            <Paper style={{ height: '300px', overflow: 'auto' }}>
                              <List>
                                {posts.map((item) => (
                                  <>
                                    <ListItem key={key} disablePadding>
                                      <table cellSpacing={0} style={{ fontFamily: "'Poppins', sans-serif", width: '100%', marginBottom: '10px' }}>
                                        <tr>
                                          <th />
                                          <th />
                                        </tr>
                                        <tr>
                                          <td><Typography><span style={{ fontWeight: 'bolder' }}>Titulo:</span>  {item.title}</Typography></td>
                                        </tr>
                                        <tr>
                                          <td><Typography><span style={{ fontWeight: 'bolder' }}>Post: </span> {item.body}</Typography></td>
                                        </tr>
                                      </table>
                                    </ListItem>
                                    <Divider />
                                  </>
                                ))}
                              </List>
                            </Paper>
                          </AccordionDetails>
                        </Accordion>
                      ))}

                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={9} lg={9} sx={{ padding: '5px' }}>
                <Card sx={{ height: 670, width: '100%', background: '#EEE' }}>
                  <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[usersCount]}
                    sx={{

                      '& .MuiDataGrid-columnHeaders': { color: '#FFF', background: '#4b64ca' },
                      '& .css-17jjc08-MuiDataGrid-footerContainer': { color: '#FFF', background: '#4b64ca' },
                      '& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar': { color: '#FFF' },
                      '& .MuiDataGrid-row': {
                        '&:hover': {
                          backgroundColor: '#263686',
                          color: '#FFF',
                        }
                      },
                    }}
                  />
                </Card>
              </Grid>
            </Grid>
          </div>
          :
          null
      }

    </Card >
  )
}

export default App
