// ** MUI Imports
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { styled, alpha } from '@mui/material/styles';
import { red, green, blue, yellow, orange, purple } from '@mui/material/colors';
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Magnify from 'mdi-material-ui/Magnify'
import EthereumIcon from 'src/icons/EthereumIcon';
import BidCard from './BidCard'
import BidSmallCard from './BidSmallCard'
import BidConfig from './BidConfig'
import BidSearch from './BidSearch'


export default function BidBot() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Bid Bot</Typography>
        <Typography variant='h6'>What collection do you want to bid on?</Typography>
      </Grid>
      <Grid item xs={12}>
        <BidSearch />
      </Grid>

      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <BidCard />
      </Grid>

      <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
        <BidConfig />
      </Grid>
      <Grid item xs={12}>
        {/* condition ? <BidSmallCard /> : exprIfFalse */}
        <BidSmallCard />
      </Grid>
    </Grid>
  );
}
