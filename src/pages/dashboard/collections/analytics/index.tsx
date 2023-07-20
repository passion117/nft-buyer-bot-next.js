//** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container';
import { red, green, blue, yellow, orange, purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import CollectionInfo from '../../collectionInfo'

import ListingsAndTrades from './ListingsAndTrades';
import SummaryChart from './SummaryChart';

// ** Styled Component Import
import RechartsWrapper from 'src/@core/styles/libs/recharts'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import CollectionData from '../../collectionData'

const Boxis = styled(Box)(({ theme }) => ({
  backgroundColor: 'brown',
  width: '100%',
  border: '4px solid #494193',
  height: 370
}));

const BrT = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up('xs')]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up('sm')]: {
    backgroundColor: orange[500],

  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: green[500],

  },
  [theme.breakpoints.up('xl')]: {
    backgroundColor: purple[500],
  },
}));




const Analytics = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sx={{ mb: 5 }}>
        <Grid container spacing={2}>
          <CollectionInfo />
          <CollectionData />
        </Grid>
      </Grid >
      <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
        <ListingsAndTrades />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
        <RechartsWrapper>
          <DatePickerWrapper>
            <SummaryChart />
          </DatePickerWrapper>
        </RechartsWrapper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>

        {/* <SalesChart /> */}
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>

        {/* <TopHoldersChart /> */}
      </Grid>
    </Grid>


  )
}

export default Analytics

