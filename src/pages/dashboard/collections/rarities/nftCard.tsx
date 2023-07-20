import * as React from 'react';

// ** MUI Imports
import CustomChip from 'src/@core/components/mui/chip'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import { red, green, blue, yellow } from '@mui/material/colors';
import CustomAvatar from 'src/@core/components/mui/avatar'
import Divider from '@mui/material/Divider';

// ** Material Icons
import SailBoat from 'mdi-material-ui/SailBoat';
import DiamondIcon from 'src/icons/DiamondIcon';
import Medal from 'mdi-material-ui/Medal';
import EthereumIcon from 'src/icons/EthereumIcon';
import SolanaIcon from 'src/icons/SolanaIcon';
import { Cards } from 'mdi-material-ui';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import CollectionInfo from '../../collectionInfo';

function createData(
  nftImage: string,
  nftId: number,
  nftMarket_Opensea: boolean,
  nftMarket_Solanart: boolean,
  nftMarket_Hyperspace: boolean,
  nftMarket_Magiceden: boolean,
  nftRank: number,
  nftTop: number,
  nftScore: number,
  nftRarityColor: string,
  nftToken: string,
  nftPrice: number,
) {
  return {
    nftImage, nftId, nftMarket_Opensea, nftMarket_Solanart, nftMarket_Hyperspace, nftMarket_Magiceden, nftRank, nftTop, nftScore, nftRarityColor, nftToken, nftPrice
  };
}

const items = [
  createData('https://img.seadn.io/files/7b5368ac3675d939796145977f8dd96a.png?fit=max&w=1000',
    5454, true, false, false, true, 1120, 120, 413.0, 'info', 'eth', 0.335),

  createData('https://solanart.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdemo%2Fimage%2Ffetch%2Fh_500%2Fhttps%3A%2F%2Farweave.net%2Fk8ZtSuwk7nM9TaUqIHDxCZf-hcbSrcGa_U5cKbBms04&w=1920&q=75',
    554, false, true, true, true, 502, 84, 303.0, 'info', 'sol', 4.96),


  createData('https://i.seadn.io/gae/1Axwc9lubiJAf2WBADTitb4HcSxrRdxkz4Fb08HD9CEGt-fIn87DkE-3oB9POT7gA-jT7As50qdGEbjok0-gKxr7ZHqSqa7xq0b4tVI?auto=format&w=1000',
    928, true, false, false, false, 4530, 500, 940.0, 'warning', 'eth', 0.445),

  createData('https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://metadata.y00ts.com/y/12223.png',
    12224, false, false, false, true, 102, 54, 203.0, 'primary', 'sol', 126.0626),

  createData('https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://shdw-drive.genesysgo.net/9wpiHvK8Hgg1uYYzae5CG7umNWzXj4KjoKxidXLEUmU1/3056.png',
    3057, false, false, false, true, 102, 54, 703.0, 'info', 'sol', 6.3),

  createData('https://solanart.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdemo%2Fimage%2Ffetch%2Fh_500%2Fhttps%3A%2F%2Farweave.net%2Fk8ZtSuwk7nM9TaUqIHDxCZf-hcbSrcGa_U5cKbBms04&w=1920&q=75',
    554, false, false, false, true, 502, 84, 303.0, 'info', 'sol', 4.96),

  createData('https://i.seadn.io/gae/1Axwc9lubiJAf2WBADTitb4HcSxrRdxkz4Fb08HD9CEGt-fIn87DkE-3oB9POT7gA-jT7As50qdGEbjok0-gKxr7ZHqSqa7xq0b4tVI?auto=format&w=1000',
    928, true, false, false, false, 4530, 500, 940.0, 'warning', 'eth', 0.445),

  createData('https://img.seadn.io/files/7b5368ac3675d939796145977f8dd96a.png?fit=max&w=1000',
    5454, true, false, false, true, 1120, 120, 413.0, 'info', 'eth', 0.335),

  createData('https://i.seadn.io/gae/1Axwc9lubiJAf2WBADTitb4HcSxrRdxkz4Fb08HD9CEGt-fIn87DkE-3oB9POT7gA-jT7As50qdGEbjok0-gKxr7ZHqSqa7xq0b4tVI?auto=format&w=1000',
    928, true, false, false, false, 4530, 500, 940.0, 'warning', 'eth', 0.445),

];

const Root = styled(CardMedia)(({ theme }) => ({
  borderRadius: 22,
  height: 250,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    height: 350,
  },
  [theme.breakpoints.down('xs')]: {
    height: 250,
  },
}));

const CardStyled = styled(Card)(({ theme }) => ({
  borderRadius: 32,
  minWidth: '320px',
  maxWidth: '320px',
  margin: '10px',
  [theme.breakpoints.down('md')]: {
    minWidth: '360px',
  },
}));


export default function NftCard() {
  const theme = useTheme();

  return (

    <Grid container direction="row" spacing={4}
      justifyContent={{ xs: 'center', sm: 'center', md: 'left', lg: 'center', xl: 'left' }}
      alignItems={{ xs: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'left' }}>
      <Grid xs={12} >
        <CollectionInfo />
      </Grid>
      {items.map((card, index) => (
        <CardStyled key={index}>
          <Card sx={{ p: 5 }}>
            {/* Card Image */}
            <Root image={card.nftImage}></Root>
            {/* Card Top */}
            <Box sx={{ mt: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }} variant='h6' align='left'>ID: {card.nftId} </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignSelf: 'center' }}>
                {card.nftMarket_Opensea == true ? <Avatar title='OpenSea Marketplace' sx={{ width: 22, height: 22, marginRight: 1 }} src='/assets/svg/opensea.svg' /> : ''}
                {/* {card.nftMarketplace == 'solanart' ? <Avatar sx={{ width: 22, height: 22, marginRight: 1 }} src='/assets/svg/solanart-light.svg' /> : ''} */}
                {card.nftMarket_Solanart == true ? <Avatar title='Solanart Marketplace' sx={{ width: 22, height: 22, marginRight: 1 }} src={theme.palette.mode === 'dark' ? "/assets/svg/solanart-light.svg" : "/assets/svg/solanart-dark.svg"} /> : ''}
                {card.nftMarket_Magiceden == true ? <Avatar title='Magic Eden Marketplace' sx={{ width: 22, height: 22, marginRight: 1 }} src='/assets/svg/magiceden.png' /> : ''}
                {card.nftMarket_Hyperspace == true ? <Avatar title='HyperSpace Marketplace' sx={{ width: 22, height: 22, marginRight: 0 }} src='/assets/svg/hyperspace.png' /> : ''}
              </Box>
            </Box>
            <Divider variant="middle" />
            {/* Card Info Content - Top*/}
            <Box sx={{
              pt: 1, display: 'flex', justifyContent: 'space-between',
            }}>
              <Box>
                <Box sx={{
                  display: 'flex', flexDirection: 'row',
                }}>
                  <Typography sx={{ fontWeight: 'bold' }} variant='subtitle1' align='left' color='primary'>RANK</Typography>
                  <Typography sx={{ pl: 2, fontWeight: 'bold' }} variant='subtitle1' align='left' color='light'>#{card.nftRank} </Typography>
                </Box>
              </Box>
              <Box>
                <CustomChip sx={{ fontWeight: 'bold' }} label={'Top ' + card.nftTop} icon={<Medal fontSize='small' />} skin='light' color='primary' />
              </Box>
            </Box>

            {/* Card Info Content - Mid*/}
            <Box sx={{
              pt: 1,
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <Box>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                  <Typography sx={{ pr: 2, fontWeight: 'bold' }}
                    variant='subtitle1' align='left' color='#42AB59'> {card.nftScore.toFixed(1).replace(".", ",")} </Typography>
                  <Typography sx={{ fontWeight: 'bold' }} variant='subtitle1' align='left' color='primary'>SCORE</Typography>
                </Box>
              </Box>
            </Box>
            {/* Card Info Content - Bot*/}
            <Box sx={{ pt: 1, display: 'flex', justifyContent: 'space-between', }}>
              <Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                  <CustomAvatar sx={{ bgcolor: 'primary' }} skin='light' color={(card.nftRarityColor as any)} variant='rounded'>
                    <DiamondIcon />
                  </CustomAvatar>
                </Box>
              </Box>
              <Box>
                <CustomChip sx={{ fontWeight: 'bold', borderRadius: '4px', alignSelf: 'center', height: '100%', fontSize: '100%' }}
                  label={card.nftPrice.toFixed(2).replace(".", ",")}
                  icon={card.nftToken == 'eth' ? <EthereumIcon fontSize='medium' sx={{ fontSize: '100%' }} /> : <SolanaIcon fontSize='medium' sx={{ fontSize: '100%' }} />} color='primary' />
              </Box>
              {/* {typeof cell === 'number' ? cell.toFixed( 2 ) : cell} */}
            </Box>
          </Card>
        </CardStyled>
      ))}
    </Grid>
  );
}
