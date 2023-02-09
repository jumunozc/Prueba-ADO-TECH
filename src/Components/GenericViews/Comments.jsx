
import { useContext, useEffect } from 'react'
import { AppContext } from '../../Context/AppContext';
import { Card, Grid, Typography } from '@mui/material';
import Header from './Header';
import { DataGrid } from '@mui/x-data-grid';
import GenericFunctions from '../../hooks/GenericFunctions';


const Comments = () => {
  const { xs, sm, md, lg, username, comments, commentsCount } = useContext(AppContext);
  const { DetectUser } = GenericFunctions()
  useEffect(() => {
    DetectUser()
  }, [])
  const columns = [
    { field: 'postId', headerName: 'Post ID', width: 120 },
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'name', headerName: 'Nombre', width: 500 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'body', headerName: 'Texto', width: 1500 }
  ];
  return (
    <Card style={{ background: '#0E0E0E' }}>
      {(xs || sm) && (!md && !lg) ?
        <>
          <Typography variant='h4' sx={{ textAlign: 'left', fontFamily: "'Poppins'", padding: '5px', color: '#EEE', fontStyle: 'italic' }}>
            Resumen de comentarios
          </Typography>
          <Grid container >
            <Grid item xs={12} sm={12}>

              <Card style={{ height: 650, width: '100%', background: '#FFF' }}>
                <DataGrid
                  rows={comments}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[commentsCount]}
                  sx={{

                    '& .MuiDataGrid-columnHeaders': { color: '#FFF', background: 'linear-gradient(90deg, rgba(17,17,19,1) 44%, rgba(217,216,232,1) 91%)' },
                    '& .css-17jjc08-MuiDataGrid-footerContainer': { color: '#FFF', background: 'linear-gradient(90deg, rgba(17,17,19,1) 44%, rgba(217,216,232,1) 91%)' },
                    '& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar': { color: '#FFF' },
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </>

        : (xs && sm) && (md || lg) ?
          <>
            <Typography variant='h2' sx={{ textAlign: 'left', fontFamily: "'Poppins'", padding: '5px', color: '#EEE', fontStyle: 'italic' }}>
              Resumen de comentarios
            </Typography>
            <Grid container >
              <Grid item md={12} lg={12}>

                <Card style={{ height: 650, width: '100%', background: '#FFF' }}>
                  <DataGrid
                    rows={comments}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[commentsCount]}
                    sx={{

                      '& .MuiDataGrid-columnHeaders': { color: '#FFF', background: 'linear-gradient(90deg, rgba(17,17,19,1) 44%, rgba(217,216,232,1) 91%)' },
                      '& .css-17jjc08-MuiDataGrid-footerContainer': { color: '#FFF', background: 'linear-gradient(90deg, rgba(17,17,19,1) 44%, rgba(217,216,232,1) 91%)' },
                      '& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar': { color: '#FFF' },
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

export default Comments