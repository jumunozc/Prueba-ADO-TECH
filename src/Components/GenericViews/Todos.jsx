import { useContext, useEffect } from 'react'
import { AppContext } from '../../Context/AppContext';
import { Card, Grid, Typography } from '@mui/material';
import Header from './Header';
import { DataGrid } from '@mui/x-data-grid';
import GenericFunctions from '../../hooks/GenericFunctions';

const Todos = () => {
  const { xs, sm, md, lg, username, todos, todosCount } = useContext(AppContext);
  const { DetectUser } = GenericFunctions()

  useEffect(() => {
    DetectUser()
  }, [])
  const columns = [
    { field: 'userId', headerName: 'User ID', width: 120 },
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'title', headerName: 'Titulo tarea', width: 500 },
    { field: 'completed', headerName: 'Estado de la tarea', width: 300 }
  ];
  return (
    <Card style={{ background: '#FFF' }}>
      {(xs || sm) && (!md && !lg) ?
        <>
          <Grid container >
            <Grid item xs={12} sm={12}>

              <Card style={{ height: 650, width: '100%', background: '#FFF' }}>
                <DataGrid
                  rows={todos}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[todosCount]}
                  sx={{

                    '& .MuiDataGrid-columnHeaders': {color: '#FFF', background: '#4b64ca' },
                    '& .css-17jjc08-MuiDataGrid-footerContainer': {color: '#FFF', background: '#4b64ca' },
                    '& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar': { color: '#FFF' },
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </>

        : (xs && sm) && (md || lg) ?

          <div style={{ width: "1800px" }}>
            <Grid container >
              <Grid item md={12} lg={12}>

                <Card style={{ height: 650, width: '100%', background: '#FFF' }}>
                  <DataGrid
                    rows={todos}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[todosCount]}
                    sx={{

                      '& .MuiDataGrid-columnHeaders': {color: '#FFF', background: '#4b64ca' },
                      '& .css-17jjc08-MuiDataGrid-footerContainer': {color: '#FFF', background: '#4b64ca' },
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

export default Todos