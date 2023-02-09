
import { useContext, useEffect } from 'react'
import { AppContext } from '../../Context/AppContext';
import { Card, Grid, Typography } from '@mui/material';
import Header from './Header';
import { DataGrid } from '@mui/x-data-grid';
import GenericFunctions from '../../hooks/GenericFunctions';


const Photos = () => {
  const { xs, sm, md, lg, username, photos, photosCount } = useContext(AppContext);
  const { DetectUser } = GenericFunctions()

  useEffect(() => {
    DetectUser()
  }, [])
  const columns = [
    { field: 'albumId', headerName: 'Album ID', width: 120 },
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'title', headerName: 'Titulo', width: 500 },
    { field: 'url', headerName: 'Url Imagen', width: 300 },
    { field: 'thumbnailUrl', headerName: 'Thumbnail', width: 300 }
  ];
  return (
    <Card style={{ background: '#0E0E0E' }}>
      {(xs || sm) && (!md && !lg) ?
        <>
          <Typography variant='h4' sx={{ textAlign: 'left', fontFamily: "'Poppins'", padding: '5px', color: '#EEE', fontStyle: 'italic' }}>
            Fotos
          </Typography>
          <Grid container >
            <Grid item xs={12} sm={12}>

              <Card style={{ height: 650, width: '100%', background: '#FFF' }}>
                <DataGrid
                  rows={photos}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[photosCount]}
                  sx={{
                      
                    '& .MuiDataGrid-columnHeaders': { color: '#FFF',background:'linear-gradient(90deg, rgba(17,17,19,1) 44%, rgba(217,216,232,1) 91%)' },
                    '& .css-17jjc08-MuiDataGrid-footerContainer': { color: '#FFF',background:'linear-gradient(90deg, rgba(17,17,19,1) 44%, rgba(217,216,232,1) 91%)'},
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
              Fotos
            </Typography>
            <Grid container >
              <Grid item md={12} lg={12}>

                <Card style={{ height: 650, width: '100%', background: '#FFF' }}>
                  <DataGrid
                    rows={photos}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[photosCount]}
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

export default Photos