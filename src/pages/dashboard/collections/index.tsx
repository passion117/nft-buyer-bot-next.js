// ** MUI Imports
import * as React from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TableTrending from './TableTrending';


const Trending = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ fontWeight: 'bold', }}>All Collections</Typography>
      </Grid>
      <Grid item xs={12}>
        <TableTrending />
      </Grid>
    </Grid>
  )
}

export default Trending
