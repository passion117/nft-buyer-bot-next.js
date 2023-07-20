import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BlackMesa } from 'mdi-material-ui';
import Box from '@mui/material/Box';
import { minWidth } from '@mui/system';
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import LinearProgress from '@mui/material/LinearProgress'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  padding: '6px',
  minWidth: '100px'
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.getContrastText,
    borderBottom: '5px'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderBottom: '0',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  image: string,
  name: string,
  buys: number,
  whalesBuy: number,
  sales: number,
  whalesSales: number,
  fomo: string,
) {
  return { image, name, buys, whalesBuy, sales, whalesSales, fomo };
}

const rows = [
  createData('https://i.seadn.io/gcs/files/51f82e014f0131c9a2ca31c10b10f4f3.gif?auto=format&w=1200', 'LIGHTBORN AVATARS', 127, 100, 10, 100, 'Extreme'),
  createData('https://i.seadn.io/gcs/files/50e09f3e8f88d14d13a94b2ea6b9bd0c.png?auto=format&w=1200', 'Monomyth By Heart You', 695, 27, 37, 43, 'Extreme'),
  createData('https://i.seadn.io/gae/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8?auto=format&w=1200', 'Cool Cats NFT', 262, 16.0, 24, 60, 'Extreme'),
  createData('https://i.seadn.io/gae/gjOExI2qNNJuv6fo4hmHamRzDMRLkYPFQtK4d67GE3bgdVJCyZngUwY_h6qp9244pp7l_pF2JBHtOJ8cLgzFbulxMK-KqlZnu9E1sg?auto=format&w=1200', 'Gutter Cat Gang', 305, 3.7, 67, 43, 'Extreme'),
  createData('https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&w=1200', 'Mutant Ape Yacht Club', 356, 16.0, 49, 39, 'Extreme'),
];

export default function TableCollection() {
  return (

    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Collection</StyledTableCell>
            <StyledTableCell align="center">Buys</StyledTableCell>
            <StyledTableCell align="center">Num Whales Bought</StyledTableCell>
            <StyledTableCell align="center">Sales</StyledTableCell>
            <StyledTableCell align="center">Num Whales Sold</StyledTableCell>
            <StyledTableCell align="center">Fomo Level</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell >
                <ListItem sx={{ margin: 0, padding: 0 }}>
                  <ListItemAvatar>
                    <Avatar variant='rounded' src={row.image} alt={row.name} />
                  </ListItemAvatar>
                  <Typography>{row.name} </Typography>
                </ListItem>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography align="right" sx={{ color: 'success.main' }}>{row.buys}</Typography>
                <StyledLinearProgress color='success' value={row.buys / 10} variant='determinate' />
              </StyledTableCell>
              <StyledTableCell align="center">{row.whalesBuy}</StyledTableCell>
              <StyledTableCell align="center">
                <Typography align="right" color='error'>{row.sales}</Typography>
                <StyledLinearProgress color='error' value={row.sales} variant='determinate' />
              </StyledTableCell>
              <StyledTableCell align="center">{row.whalesSales}</StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 'bold' }}>{row.fomo}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
