// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import DealSniperCard from './dealSniperCard'
import Box from '@mui/system/Box';
import styled from '@mui/system/styled';

const GridCustom = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

const DealSniper = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 5 }}>Multi-Market Listings Sniper</Typography>
      </Grid>
      <Box sx={{ width: '100%' }}>
        <GridCustom>
          <Grid
            container
            direction="row"
            justifyContent="start"
            alignItems="center"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
            <DealSniperCard />
          </Grid>
        </GridCustom>
      </Box>
    </Grid>
  )
}

export default DealSniper
