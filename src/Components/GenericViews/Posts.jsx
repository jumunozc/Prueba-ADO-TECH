import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext';
import { Accordion, AccordionDetails, AccordionSummary, Card, Divider, Grid, List, ListItem, Paper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import GenericFunctions from '../../hooks/GenericFunctions';
import config from '../../config/config.json'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Posts = () => {
  const { xs, sm, md, lg, posts, postsCount } = useContext(AppContext);
  const { DetectUser } = GenericFunctions()

  useEffect(() => {
    DetectUser()
  }, [])
  const [comments, setComments] = useState([])

  async function GetComments(key) {

    await fetch(`${config.REACT_APP_API_URL}/posts/${key}/comments`, {
      crossdomain: true,
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      method: 'GET'
    }).then(async res => ({
      response: await res.json()
    })).then(async function (data) {
      setComments(data.response)
    })

  }

  const columns = [
    { field: 'userId', headerName: 'User ID', width: 120 },
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'title', headerName: 'Titulo', width: 500 },
    { field: 'body', headerName: 'Texto', width: 1500 }
  ];
  return (
    <Card sx={{ background: '#0E0E0E' }}>
      {(xs || sm) && (!md && !lg) ?
        <>
          <Typography variant='h4' sx={{ textAlign: 'left', fontFamily: "'Poppins'", padding: '5px', color: '#EEE', fontStyle: 'italic' }}>
            Resumen de Posts
          </Typography>
          <Grid container >
            <Grid item xs={12} sm={12}>
              <Grid container>
                <Grid item xs={12} sm={12} sx={{ padding: '5px' }}>
                  <Paper style={{ maxHeight: 600, overflow: 'auto' }}>

                    <Typography variant='h6' sx={{ textAlign: 'left', fontFamily: "'Poppins'", padding: '5px', fontStyle: 'italic', fontWeight: 'bolder' }}>Comentarios de los posts</Typography>
                    {posts.map((item, key) => (
                      <Accordion key={key}>
                        <AccordionSummary onClick={() => GetComments(item.userId)} expandIcon={<ExpandMoreIcon sx={{ color: '#4b64ca' }} />}>{item.title}</AccordionSummary>
                        <AccordionDetails >
                          <Paper style={{ height: '300px', overflow: 'auto' }}>
                            <List>
                              {comments.map((item, key) => (
                                <>
                                  <ListItem key={key} disablePadding>
                                    <table cellSpacing={0} style={{ fontFamily: "'Poppins', sans-serif", width: '100%', marginBottom: '10px' }}>
                                      <tr>
                                        <th />
                                        <th />
                                      </tr>
                                      <tr>
                                        <td><Typography><span style={{ fontWeight: 'bolder' }}>Usuario:</span>  {item.name}</Typography></td>
                                      </tr>
                                      <tr>
                                        <td><Typography><span style={{ fontWeight: 'bolder' }}>Email del usuario:</span>  {item.email}</Typography></td>
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
                  rows={posts}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[postsCount]}
                  sx={{
                      
                    '& .MuiDataGrid-columnHeaders': { color: '#FFF',background:'linear-gradient(90deg, rgba(17,17,19,1) 44%, rgba(217,216,232,1) 91%)' },
                    '& .css-17jjc08-MuiDataGrid-footerContainer': { color: '#FFF',background:'linear-gradient(90deg, rgba(17,17,19,1) 44%, rgba(217,216,232,1) 91%)' },
                    '& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar': { color: '#FFF'},
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </>

        : (xs && sm) && (md || lg) ?
          <>
            <Typography variant='h2' sx={{ textAlign: 'left', fontFamily: "'Poppins'", padding: '5px', color: '#EEE', fontStyle: 'italic' }}>
              Resumen de Posts
            </Typography>
            <Grid container >
              <Grid item md={5} lg={5}>
                <Grid container>
                  <Grid item md={12} lg={12} sx={{ padding: '5px' }}>
                    <Paper style={{ maxHeight: 600, overflow: 'auto' }}>

                      <Typography variant='h6' sx={{ textAlign: 'left', fontFamily: "'Poppins'", padding: '5px', fontStyle: 'italic', fontWeight: 'bolder' }}>Comentarios de los posts</Typography>
                      {posts.map((item, key) => (
                        <Accordion key={key}>
                          <AccordionSummary onClick={() => GetComments(item.userId)} expandIcon={<ExpandMoreIcon sx={{ color: '#4b64ca' }} />}>{item.title}</AccordionSummary>
                          <AccordionDetails >
                            <Paper style={{ height: '300px', overflow: 'auto' }}>
                              <List>
                                {comments.map((item, key) => (
                                  <>
                                    <ListItem key={key} disablePadding>
                                      <table cellSpacing={0} style={{ fontFamily: "'Poppins', sans-serif", width: '100%', marginBottom: '10px' }}>
                                        <tr>
                                          <th />
                                          <th />
                                        </tr>
                                        <tr>
                                          <td><Typography><span style={{ fontWeight: 'bolder' }}>Usuario:</span>  {item.name}</Typography></td>
                                        </tr>
                                        <tr>
                                          <td><Typography><span style={{ fontWeight: 'bolder' }}>Email del usuario:</span>  {item.email}</Typography></td>
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
              <Grid item md={7} lg={7} sx={{ padding: '5px' }}>
                <Card sx={{ height: 670, width: '100%', background: '#EEE' }}>
                  <DataGrid
                    rows={posts}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[postsCount]}
                    sx={{
                      
                      '& .MuiDataGrid-columnHeaders': { color: '#FFF',background:'linear-gradient(90deg, rgba(17,17,19,1) 44%, rgba(217,216,232,1) 91%)' },
                      '& .css-17jjc08-MuiDataGrid-footerContainer': { color: '#FFF',background:'linear-gradient(90deg, rgba(17,17,19,1) 44%, rgba(217,216,232,1) 91%)' },
                      '& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar': { color: '#FFF'},
                    }}

                  />
                </Card>
              </Grid>
            </Grid>
          </>
          :
          null
      }



    </Card>
  )
}

export default Posts