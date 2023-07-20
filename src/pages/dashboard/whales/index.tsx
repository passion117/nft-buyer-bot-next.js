// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { width } from '@mui/system'
import TrendingDownIcon from 'src/icons/TrendingDownIcon';
import TrendingUpIcon from 'src/icons/TrendingUpIcon';

// ** Icon Imports
import CartPlus from 'mdi-material-ui/CartPlus'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'

// ** Temporary imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'


// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import WhalesValue from 'src/views/dashboards/whales/WhalesValue'
import UpDownValue from 'src/views/dashboards/whales/UpDownValue'
import TableCollection from 'src/views/dashboards/whales/TableCollection'
import TableActivity from 'src/views/dashboards/whales/TableActivity'

const Whales = () => {
  return (
    <Grid container spacing={6}  >
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 5 }}>Whales</Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box><Typography variant='h6' sx={{ fontWeight: 500, }}>Whale Insight</Typography></Box>
            </Box>
          </CardContent>
          <CardContent>
            <Typography variant='subtitle1' >LIST OF WHALES</Typography>
            <Typography>For the last week <Box component="span" sx={{ color: 'success.main' }}>106%(689)</Box> of 🐳 are filling their pockets</Typography>
          </CardContent>

          <Box>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <ApexChartWrapper>
                  <WhalesValue />
                </ApexChartWrapper>
              </Grid>
            </Grid>
          </Box>

          <CardContent>
            <UpDownValue />
          </CardContent>
          <CardContent sx={{ mt: 10 }}>
            <Grid item>
              <TableCollection />
            </Grid >
          </CardContent>
        </Card>

      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant='h6' sx={{ fontWeight: 500, }}>Whale Activity</Typography>
              </Box>
            </Box>
          </CardContent>
          <CardContent>
            <Grid item>
              {/* <TableActivity /> */}
              <TableActivity />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid >

  )
}

export default Whales
