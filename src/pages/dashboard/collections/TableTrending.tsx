import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

//icons
import TrendingUpRounded from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRounded from '@mui/icons-material/TrendingDownRounded';
import VerifyIcon from 'src/icons/VefiryIcon'

import LinearProgress from '@mui/material/LinearProgress'
import { padding } from '@mui/system';
import Analytics from './analytics';

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  padding: '6px',
  minWidth: '100px'
}))


const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.divider
}));


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.getContrastText,
    borderBottom: '0px',
    border: 0
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderBottom: '0',
    padding: 0,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  CollectionImg: string,
  CollectionName: string,
  CollectionVerify: boolean,
  WhaleHolders: number,
  Supply: number,
  DiamondHands: number,
  MarketCap: number,
  OsFloorPrice: number,
  OsFloorPriceToken: string,
  OsFloorPricePercentage: number,
  OsFloorPrincePositive: boolean,
  OneDayVolume: number,
  OneDayVolumePercentage: number,
  OneDayVolumePositive: boolean,
  SevenDayVolume: number,
  SevenDayVolumePercentage: number,
  SevenDayVolumePositive: boolean,
  AvgPrice: number,
  AvgPriceToken: string,
  AvgPricePercentage: number,
  AvgPricePositive: boolean,
  CollectionRevealed: number,
) {
  return { CollectionImg, CollectionName, CollectionVerify, WhaleHolders, Supply, DiamondHands, MarketCap, OsFloorPrice, OsFloorPriceToken, OsFloorPricePercentage, OsFloorPrincePositive, OneDayVolume, OneDayVolumePercentage, OneDayVolumePositive, SevenDayVolume, SevenDayVolumePercentage, SevenDayVolumePositive, AvgPrice, AvgPriceToken, AvgPricePercentage, AvgPricePositive, CollectionRevealed };
}

const rows = [
  createData('https://i.seadn.io/gae/4yq8GQqa4rYyiq51ntFtpZ3cRT8I-GmEbP3aQn5O0RPdfbuI0pMIqp2proFWeMo3pzdegKR3oX1F8CSUUsMEjVoUIqmTrJze-BkA3A?auto=format&w=1920', 'Clay Friends', true, 10, 20, 30, 100.331, 10, 'ETH', 10, true, 10, 10, true, 700, 70, true, 2.55, 'ETH', 0, true, 90),
  createData('https://i.seadn.io/gae/4yq8GQqa4rYyiq51ntFtpZ3cRT8I-GmEbP3aQn5O0RPdfbuI0pMIqp2proFWeMo3pzdegKR3oX1F8CSUUsMEjVoUIqmTrJze-BkA3A?auto=format&w=1920', 'Clay Friends', true, 10, 20, 30, 100.331, 10, 'ETH', 10, true, 10, 10, true, 700, 70, true, 2.55, 'ETH', 0, true, 90),
  createData('https://i.seadn.io/gae/4yq8GQqa4rYyiq51ntFtpZ3cRT8I-GmEbP3aQn5O0RPdfbuI0pMIqp2proFWeMo3pzdegKR3oX1F8CSUUsMEjVoUIqmTrJze-BkA3A?auto=format&w=1920', 'Clay Friends', false, 10, 20, 30, 100.331, 10, 'ETH', 10, true, 10, 10, true, 700, 70, true, 2.55, 'ETH', 0, true, 90),
  createData('https://i.seadn.io/gae/4yq8GQqa4rYyiq51ntFtpZ3cRT8I-GmEbP3aQn5O0RPdfbuI0pMIqp2proFWeMo3pzdegKR3oX1F8CSUUsMEjVoUIqmTrJze-BkA3A?auto=format&w=1920', 'Clay Friends', true, 10, 20, 30, 100.331, 10, 'ETH', 10, true, 10, 10, true, 700, 70, true, 2.55, 'ETH', 0, true, 90),
  createData('https://i.seadn.io/gae/4yq8GQqa4rYyiq51ntFtpZ3cRT8I-GmEbP3aQn5O0RPdfbuI0pMIqp2proFWeMo3pzdegKR3oX1F8CSUUsMEjVoUIqmTrJze-BkA3A?auto=format&w=1920', 'Clay Friends', true, 10, 20, 30, 100.331, 10, 'ETH', 10, true, 10, 10, true, 700, 70, true, 2.55, 'ETH', 0, true, 90),
];


export default function TableTrending() {
  return (

    <Grid >
      <Grid container justifyContent='flex-start' alignItems="start"
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }} >
        <Grid item >
          <Button variant='outlined' size='small'>1 min</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' size='small'>5 min</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' size='small'>10 min</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' size='small'>30 min</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' size='small'>1 hour</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' size='small'>3 hours</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' size='small'>12 hours</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' size='small'>1 day</Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' size='small'>3 days</Button>
        </Grid>

      </Grid>
      <TableContainer component={Paper} sx={{ mt: 5 }} >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Whales Holders</StyledTableCell>
              <StyledTableCell align="center">Supply</StyledTableCell>
              <StyledTableCell align="center">Diamond Hands</StyledTableCell>
              <StyledTableCell align="center">Market Cap</StyledTableCell>
              <StyledTableCell align="center">OS Floor Price</StyledTableCell>
              <StyledTableCell align="center">1D Volume</StyledTableCell>
              <StyledTableCell align="center">7D Volume</StyledTableCell>
              <StyledTableCell align="center">AVG Price</StyledTableCell>
              <StyledTableCell align="center">Revealed</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index} >
                <StyledTableCell>
                  <StyledTableCell>
                    <StyledAvatar variant='rounded' sx={{ mr: 2 }} src={row.CollectionImg} />
                  </StyledTableCell>
                  <StyledTableCell >{row.CollectionName}</StyledTableCell>
                  <StyledTableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {row.CollectionVerify == true ? <VerifyIcon sx={{ ml: 2, fontSize: '1.0rem' }} color='info' /> : ''}
                      {/* <VerifyIcon sx={{ ml: 2, fontSize: '1.0rem' }} color='info' /> */}
                    </Box>
                  </StyledTableCell>
                </StyledTableCell>
                <StyledTableCell align="center"> {row.WhaleHolders} </StyledTableCell>
                <StyledTableCell align="center"> {row.Supply} </StyledTableCell>
                <StyledTableCell align="center"> {row.DiamondHands}% </StyledTableCell>
                <StyledTableCell align="center"> {row.MarketCap.toFixed(2).replace(".", ",")}</StyledTableCell>
                <StyledTableCell align="center">
                  <Box sx={{ textAlign: 'center' }}>
                    {row.OsFloorPrice} <strong> {row.OsFloorPriceToken}</strong>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <Box sx={{ alignSelf: 'center' }}>
                      {row.OsFloorPrincePositive == true ? <TrendingUpRounded color='success' sx={{ mr: 1, fontSize: '1.3rem' }} /> : <TrendingDownRounded color='error' sx={{ mr: 1, fontSize: '1.3rem' }} />}
                    </Box>
                    <Box sx={{ alignSelf: 'center' }}>
                      {row.OsFloorPricePercentage}%
                    </Box>
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box sx={{ textAlign: 'center' }}> {row.OneDayVolume} </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                      {row.OneDayVolumePositive == true ? <TrendingUpRounded color='success' sx={{ mr: 1, fontSize: '1.3rem' }} /> : <TrendingDownRounded color='error' sx={{ mr: 1, fontSize: '1.3rem' }} />}
                      {row.OneDayVolumePercentage}%
                    </Box>
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box sx={{ textAlign: 'center' }}> {row.SevenDayVolume} </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    {row.SevenDayVolumePositive == true ? <TrendingUpRounded color='success' sx={{ mr: 1, fontSize: '1.3rem' }} /> : <TrendingDownRounded color='error' sx={{ mr: 1, fontSize: '1.3rem' }} />}
                    {row.SevenDayVolumePercentage}%
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box sx={{ textAlign: 'center' }}> {row.AvgPrice.toFixed(2).replace(".", ",")} <strong>{row.AvgPriceToken}</strong> </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    {row.AvgPricePositive == true ? <TrendingUpRounded color='success' sx={{ mr: 1, fontSize: '1.3rem' }} /> : <TrendingDownRounded color='error' sx={{ mr: 1, fontSize: '1.3rem' }} />}
                    {row.AvgPricePercentage}%
                  </Box>

                </StyledTableCell>
                <StyledTableCell align="center">
                  <StyledLinearProgress color='primary' value={row.CollectionRevealed} variant='determinate' />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}


{/* <TrendingUpRounded />
<TrendingDownRounded /> */}
