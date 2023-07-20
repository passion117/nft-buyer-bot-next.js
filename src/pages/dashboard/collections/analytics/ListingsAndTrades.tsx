import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container';
import EthereumIcon from 'src/icons/EthereumIcon';
import SolanaIcon from 'src/icons/SolanaIcon';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import CustomChip from 'src/@core/components/mui/chip';
import Avatar from '@mui/material/Avatar';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.divider
}));

function createData(
  nftCollectionImg: string,
  nftCollectionRank: number,
  nftCollectionID: number,
  TransactionTime: string,
  TransactionMarketplace: string,
  TransactionToken: string,
  TransactionValue: number,
) {
  return {
    nftCollectionImg,
    nftCollectionRank,
    nftCollectionID,
    TransactionTime,
    TransactionMarketplace,
    TransactionToken,
    TransactionValue,
  };
}

const rows = [
  createData('/assets/images/nft2.png', 3268, 3452, '05/26, 06:11:28 PM', 'solanart', 'eth', 1690.54),
  createData('/assets/images/nft2.png', 3268, 3452, '05/26, 06:11:28 PM', 'solanart', 'eth', 1690.54),
  createData('/assets/images/nft2.png', 3268, 3452, '05/26, 06:11:28 PM', 'solanart', 'eth', 1690.54),
  createData('/assets/images/nft2.png', 3268, 3452, '05/26, 06:11:28 PM', 'solanart', 'sol', 1690.54),
  createData('/assets/images/nft2.png', 3268, 3452, '05/26, 06:11:28 PM', 'solanart', 'sol', 1690.54),
  createData('/assets/images/nft2.png', 3268, 3452, '05/26, 06:11:28 PM', 'solanart', 'sol', 1690.54),

];

export default function ListingsAndTrades() {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={12} xl={6}>
        <Typography variant='h6' sx={{ fontWeight: '500', mb: 2 }}>Listings</Typography>
        <TableContainer component={Paper} sx={{ mb: 2, maxHeight: 330 }}>
          <Table size="small">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.nftCollectionImg} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row" sx={{ width: 3, paddingRight: 0 }} >
                    <TableRow sx={{ display: 'flex', alignItems: ' center' }}>
                      <StyledAvatar variant='rounded' src={row.nftCollectionImg} />
                    </TableRow>
                  </TableCell>
                  <TableCell component="th" scope="row" >
                    <TableRow sx={{ display: 'flex', alignItems: ' center' }}>
                      <Typography variant='body2' sx={{ fontWeight: 500, mr: 2 }}>RANK: {row.nftCollectionRank}</Typography>
                      <Typography variant='caption' color='primary' sx={{ fontWeight: 500 }}>ID: {row.nftCollectionID}</Typography>
                    </TableRow>
                    <TableRow sx={{ display: 'flex', alignItems: ' center' }}>
                      <Typography variant='caption' color='primary' sx={{ fontWeight: 500 }}>{row.TransactionTime}</Typography>
                    </TableRow>
                  </TableCell>
                  <TableCell align="left">
                    <TableRow sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                      {row.TransactionMarketplace == 'opensea' ? <Avatar sx={{ width: 16, height: 16, marginRight: 2 }} src='/assets/svg/opensea.svg' /> : ''}
                      {row.TransactionMarketplace == 'solanart' ? <Avatar sx={{ width: 16, height: 16, marginRight: 2 }} src={theme.palette.mode === 'dark' ? "/assets/svg/solanart-light.svg" : "/assets/svg/solanart-dark.svg"} /> : ''}
                      {row.TransactionMarketplace == 'magiceden' ? <Avatar sx={{ width: 16, height: 16, marginRight: 2 }} src='/assets/svg/magiceden.png' /> : ''}
                      {row.TransactionMarketplace == 'hyperspace' ? <Avatar sx={{ width: 16, height: 16, marginRight: 2 }} src='/assets/svg/hyperspace.png' /> : ''}
                      <Typography variant='body2' sx={{ fontWeight: 600, textAlign: 'right' }}>{row.TransactionValue.toFixed(2).replace(".", ",")}</Typography>
                    </TableRow>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={12} xl={6}>
        <Typography variant='h6' sx={{ fontWeight: '500', mb: 2 }}>Trades</Typography>
        <TableContainer component={Paper} sx={{ mb: 2, maxHeight: 330 }}>
          <Table size="small">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.nftCollectionImg} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row" sx={{ width: 3, paddingRight: 0 }} >
                    <TableRow sx={{ display: 'flex', alignItems: ' center' }}>
                      <StyledAvatar variant='rounded' src={row.nftCollectionImg} />
                    </TableRow>
                  </TableCell>
                  <TableCell component="th" scope="row" >
                    <TableRow sx={{ display: 'flex', alignItems: ' center' }}>
                      <Typography variant='body2' sx={{ fontWeight: 500, mr: 2 }}>RANK: {row.nftCollectionRank}</Typography>
                      <Typography variant='caption' color='primary' sx={{ fontWeight: 500 }}>ID: {row.nftCollectionID}</Typography>
                    </TableRow>
                    <TableRow sx={{ display: 'flex', alignItems: ' center' }}>
                      <Typography variant='caption' color='primary' sx={{ fontWeight: 500 }}>{row.TransactionTime}</Typography>
                    </TableRow>
                  </TableCell>
                  <TableCell align="left">
                    <TableRow sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                      <Typography variant='body2' sx={{ fontWeight: 600, textAlign: 'right', mr: 2 }}>{row.TransactionValue.toFixed(2).replace(".", ",")}</Typography>
                      {row.TransactionToken == 'eth' ? <EthereumIcon fontSize='medium' sx={{ fontSize: '150%' }} /> : <SolanaIcon fontSize='medium' sx={{ fontSize: '150%' }} />}
                    </TableRow>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
