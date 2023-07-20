import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

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
  mintPrice: number,
  mintToken: string,
  publicMintHours: string,
  publicMintDate: string,
  added: string,
) {
  return { image, name, mintPrice, mintToken, publicMintHours, publicMintDate, added };
}

const rows = [
  createData('https://i.seadn.io/gcs/files/51f82e014f0131c9a2ca31c10b10f4f3.gif?auto=format&w=1200',
    'LIGHTBORN AVATARS', 127, 'ETH', '2h 11m', 'May 21, 08:00', '1 month ago'),
  createData('https://i.seadn.io/gcs/files/50e09f3e8f88d14d13a94b2ea6b9bd0c.png?auto=format&w=1200',
    'Monomyth By Heart You', 127, 'ETH', '2h 11m', 'May 21, 08:00', '1 month ago'),
  createData('https://i.seadn.io/gae/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8?auto=format&w=1200',
    'Cool Cats NFT', 127, 'ETH', '2h 11m', 'May 21, 08:00', '1 month ago'),
  createData('https://i.seadn.io/gae/gjOExI2qNNJuv6fo4hmHamRzDMRLkYPFQtK4d67GE3bgdVJCyZngUwY_h6qp9244pp7l_pF2JBHtOJ8cLgzFbulxMK-KqlZnu9E1sg?auto=format&w=1200',
    'Gutter Cat Gang', 127, 'ETH', '2h 11m', 'May 21, 08:00', '1 month ago'),
  createData('https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&w=1200',
    'Mutant Ape Yacht Club', 127, 'ETH', '2h 11m', 'May 21, 08:00', '1 month ago'),
];

export default function DropTable() {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Collection</StyledTableCell>
            <StyledTableCell align="center">Mint Prince</StyledTableCell>
            <StyledTableCell align="center">Public Mint</StyledTableCell>
            <StyledTableCell align="center">Added</StyledTableCell>
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
                <Typography align="center">
                  {row.mintPrice} {row.mintToken}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Box>
                  <Typography variant='body1' sx={{ fontWeight: 600, lineHeight: '20px' }}>{row.publicMintHours}</Typography>
                </Box>
                <Box>
                  <Typography variant='body2' >
                    {row.publicMintDate}
                  </Typography>
                </Box>
              </StyledTableCell>
              <StyledTableCell align="center"> {row.added} </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
