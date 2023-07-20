import * as React from 'react';
import { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

// ** MUI Imports
import Chip from 'src/@core/components/mui/chip';
import CustomChip from 'src/@core/components/mui/chip';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { DataGrid, GridRowSpacingParams, gridClasses } from '@mui/x-data-grid';


const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.divider
}));

// React.useCallback((params: GridRowSpacingParams)

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  top: 0,
  bottom: 0,
}));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   backgroundColor: theme.palette.action.hover,
// }));

function createData(
  nftCollectionImg: string,
  TransactionTime: string,
  AddressOldOwner: string,
  TransactionStatus: string,
  nftImg: string,
  nftName: string,
  AddressNewOwner: string,
  TransactionToken: string,
  TransactionValue: number,
  ScanImg: string,
) {
  return {
    nftCollectionImg,
    TransactionTime,
    AddressOldOwner,
    TransactionStatus,
    nftImg,
    nftName,
    AddressNewOwner,
    TransactionToken,
    TransactionValue,
    ScanImg,
  };
}

const rows = [
  createData('https://i.seadn.io/gcs/files/1eb8d685d4e404c9b1177dfe14c2c9e0.png?auto=format&w=1920',
    '1 seconds ago', '🐋 0x83...a2', 'SELL',
    'https://img.seadn.io/files/78b5327aea0e4b890ae4451be3266d33.png?fit=max&w=1000',
    'GENUINE UNDEAD #3576', '0x75...a4', 'eth', 0.45,
    'etherscan'),

  createData('https://i.seadn.io/gae/TyPJi06xkDXOWeK4wYBCIskRcSJpmtVfVcJbuxNXDVsC39IC_Ls5taMlxpZPYMoUtlPH7YkQ4my1nwUGDIB5C01r97TPlYhkolk-TA?auto=format&w=1920',
    '4 seconds ago', '🐋 0x83...a2', 'SELL',
    'https://i.seadn.io/gae/hiZYqDn3U3LD1m3EIJxiVPwr89qbjPh0ylJ9FEk9x9Yj_xFw4eFWoM42LsH9Sbw6Gbvehf6-Ereqp-JPe8-lPUBYYzLlHK0V_gitvg?auto=format&w=1000',
    '#2304', '0x75...a4', 'eth', 0.05,
    'solscan'),

  createData('https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=1920',
    '6 seconds ago', '🐋 0x83...a2', 'BUY',
    'https://img.seadn.io/files/c9f9b76c5d9e6c61cd0eebb433878f3a.png?fit=max&w=1000',
    '#8731', '0x75...a4', 'eth', 0.05,
    'bscscan'),

  createData('https://arweave.net/nvEWc4emVQLcYctRpCHeumCfNTmrPfHk0b75ngybbBA',
    '12 seconds ago', '🐋 0x83...a2', 'BUY',
    'https://i.seadn.io/gae/H7iijl0XvLT1xe631V_aTtJJLpsLMEpjywiXySFj2U6Nyk6kaR-zLl--uY6g5BHQ2idllobAVripuxJvJ0Qi7Newti880HuIzKOyw7w?auto=format&w=1000',
    'Lunar #8541', '0x75...a4', 'sol', 13,
    'solscan'),

  createData('https://i.seadn.io/gcs/files/1eb8d685d4e404c9b1177dfe14c2c9e0.png?auto=format&w=1920',
    '1 seconds ago', '🐋 0x83...a2', 'SELL',
    'https://img.seadn.io/files/78b5327aea0e4b890ae4451be3266d33.png?fit=max&w=1000',
    'GENUINE UNDEAD #3576', '0x75...a4', 'eth', 0.45,
    'etherscan'),

  createData('https://i.seadn.io/gae/TyPJi06xkDXOWeK4wYBCIskRcSJpmtVfVcJbuxNXDVsC39IC_Ls5taMlxpZPYMoUtlPH7YkQ4my1nwUGDIB5C01r97TPlYhkolk-TA?auto=format&w=1920',
    '4 seconds ago', '🐋 0x83...a2', 'SELL',
    'https://i.seadn.io/gae/hiZYqDn3U3LD1m3EIJxiVPwr89qbjPh0ylJ9FEk9x9Yj_xFw4eFWoM42LsH9Sbw6Gbvehf6-Ereqp-JPe8-lPUBYYzLlHK0V_gitvg?auto=format&w=1000',
    '#2304', '0x75...a4', 'eth', 0.05,
    'bscscan'),

  createData('https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=1920',
    '6 seconds ago', '🐋 0x83...a2', 'BUY',
    'https://img.seadn.io/files/c9f9b76c5d9e6c61cd0eebb433878f3a.png?fit=max&w=1000',
    '#8731', '0x75...a4', 'eth', 0.05,
    'bscscan'),

  createData('https://arweave.net/nvEWc4emVQLcYctRpCHeumCfNTmrPfHk0b75ngybbBA',
    '12 seconds ago', '🐋 0x83...a2', 'BUY',
    'https://i.seadn.io/gae/H7iijl0XvLT1xe631V_aTtJJLpsLMEpjywiXySFj2U6Nyk6kaR-zLl--uY6g5BHQ2idllobAVripuxJvJ0Qi7Newti880HuIzKOyw7w?auto=format&w=1000',
    'Lunar #8541', '0x75...a4', 'sol', 13,
    'solscan'),

  createData('https://i.seadn.io/gcs/files/1eb8d685d4e404c9b1177dfe14c2c9e0.png?auto=format&w=1920',
    '1 seconds ago', '🐋 0x83...a2', 'SELL',
    'https://img.seadn.io/files/78b5327aea0e4b890ae4451be3266d33.png?fit=max&w=1000',
    'GENUINE UNDEAD #3576', '0x75...a4', 'eth', 0.45,
    'etherscan'),

  createData('https://i.seadn.io/gae/TyPJi06xkDXOWeK4wYBCIskRcSJpmtVfVcJbuxNXDVsC39IC_Ls5taMlxpZPYMoUtlPH7YkQ4my1nwUGDIB5C01r97TPlYhkolk-TA?auto=format&w=1920',
    '4 seconds ago', '🐋 0x83...a2', 'SELL',
    'https://i.seadn.io/gae/hiZYqDn3U3LD1m3EIJxiVPwr89qbjPh0ylJ9FEk9x9Yj_xFw4eFWoM42LsH9Sbw6Gbvehf6-Ereqp-JPe8-lPUBYYzLlHK0V_gitvg?auto=format&w=1000',
    '#2304', '0x75...a4', 'eth', 0.05,
    'bscscan'),

  createData('https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=1920',
    '6 seconds ago', '🐋 0x83...a2', 'BUY',
    'https://img.seadn.io/files/c9f9b76c5d9e6c61cd0eebb433878f3a.png?fit=max&w=1000',
    '#8731', '0x75...a4', 'eth', 0.05,
    'bscscan'),

  createData('https://arweave.net/nvEWc4emVQLcYctRpCHeumCfNTmrPfHk0b75ngybbBA',
    '12 seconds ago', '🐋 0x83...a2', 'BUY',
    'https://i.seadn.io/gae/H7iijl0XvLT1xe631V_aTtJJLpsLMEpjywiXySFj2U6Nyk6kaR-zLl--uY6g5BHQ2idllobAVripuxJvJ0Qi7Newti880HuIzKOyw7w?auto=format&w=1000',
    'Lunar #8541', '0x75...a4', 'sol', 13,
    'solscan'),
];


export default function TableActivity() {
  const theme = useTheme();

  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableBody >

          {rows.map((row) => (
            <StyledTableRow
              key={row.nftCollectionImg}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center">
                <StyledAvatar variant='rounded' src={row.nftCollectionImg} />
              </TableCell>
              <TableCell align="right">{row.TransactionTime}</TableCell>
              <TableCell align="right">{row.AddressOldOwner}</TableCell>
              <TableCell align="center" >
                <CustomChip sx={{ borderRadius: 0.5, minWidth: 60, fontWeight: 500 }} label={row.TransactionStatus} color={row.TransactionStatus == 'SELL' ? "error" : "success"} skin='light' />
              </TableCell>
              <TableCell align="right">{row.nftName}</TableCell>
              <TableCell align="center">
                <Avatar variant='rounded' src={row.nftImg} /></TableCell>
              <TableCell align="right">{row.AddressNewOwner}</TableCell>
              <TableCell align="right">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {row.TransactionToken == 'sol' ? <Avatar sx={{ width: 18, height: 18, marginRight: 2 }} src='/assets/svg/sol.svg' /> : ''}
                  {row.TransactionToken == 'eth' ? <Avatar sx={{ width: 18, height: 18, marginRight: 2 }} src='/assets/svg/eth.svg' /> : ''}
                  {row.TransactionValue.toFixed(2).replace(".", ",")}
                </Box>
              </TableCell>
              <TableCell align="right">
                {row.ScanImg == 'bscscan' ? <Avatar title='BscScan(BNB)' sx={{ width: 25, height: 25 }} src={theme.palette.mode === 'dark' ? "/assets/svg/bscscan-light.svg" : "/assets/svg/bscscan-dark.svg"} /> : ''}
                {row.ScanImg == 'etherscan' ? <Avatar title='Etherscan' sx={{ width: 25, height: 25 }} src={theme.palette.mode === 'dark' ? "/assets/svg/etherscan-light.svg" : "/assets/svg/etherscan-dark.svg"} /> : ''}
                {row.ScanImg == 'solscan' ? <Avatar title='Solscan' sx={{ width: 25, height: 25 }} src="/assets/svg/solscan.png" /> : ''}
              </TableCell>
              <br />
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}


