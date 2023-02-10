
import { useContext, useEffect } from 'react'
import { AppContext } from '../../Context/AppContext';
import { Card, Grid, Typography } from '@mui/material';
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
    <Card style={{ background: '#FFF' }}>
      {(xs || sm) && (!md && !lg) ?
        <div >
          <Grid container >
            <Grid item xs={12} sm={12}>

              <Card style={{ height: 650, width: '100%', background: '#FFF' }}>
                <DataGrid
                  rows={photos}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[photosCount]}
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
              <Grid item md={12} lg={12}>

                <Card style={{ height: 650, width: '100%', background: '#FFF' }}>
                  <DataGrid
                    rows={photos}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[photosCount]}
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
          :
          null
      }



    </Card>
  )
}

export default Photos