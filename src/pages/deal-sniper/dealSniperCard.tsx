import * as React from 'react';

// ** MUI Imports
import CustomChip from 'src/@core/components/mui/chip'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
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
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

// ** Temporary Imports
import IconButton from '@mui/material/IconButton'

import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Material Icons
import SailBoat from 'mdi-material-ui/SailBoat';
import Diamond from 'mdi-material-ui/Diamond';
import Medal from 'mdi-material-ui/Medal';
import ApplicationEditOutline from 'mdi-material-ui/ApplicationEditOutline';
import OpenSeaIcon from 'src/icons/OpenSeaIcon';
import Plus from 'mdi-material-ui/Plus'
import CloseThick from 'mdi-material-ui/CloseThick'
import CheckboxMultipleBlank from 'mdi-material-ui/CheckboxMultipleBlank'

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
}));

const CustomCard = styled(Card)(({ theme }) => ({
  minWidth: 400
}));

const CardStyled = styled(Card)(({ theme }) => ({
  borderRadius: 22,
  margin: '10px',
  maxWidth: 410
}));

function createData(
  botName: string,
  collectionImage: string,
  collectionName: string,
  botStatus: boolean,
  maxPrice: number,
  marketOpensea: boolean,
  marketSolanart: boolean,
  marketHyperspace: boolean,
  marketMagiceden: boolean,
  execution: string,
  gasPriority: number,
  gasMax: number,
  node: string,
  tokenIds: string,
  listProcessed: number,
  opportunitiesProcessed: number,
) {
  return {
    botName, collectionImage, collectionName, botStatus, maxPrice, marketOpensea, marketSolanart, marketHyperspace, marketMagiceden, execution, gasPriority, gasMax, node, tokenIds, listProcessed, opportunitiesProcessed
  };
}

const items = [
  createData('Oty Editons (MY BOT)', 'assets/images/nft2.png', 'Oty Editons', true, 10, true, true, true, true, 'Auto MetaMask', 100, 500, 'metamask', 'all', 3, 8,),

  createData('Oty Editons (MY BOT)', 'assets/images/nft2.png', 'Oty Editons', true, 10, true, false, false, true, 'Auto MetaMask', 100, 500, 'metamask', 'all', 3, 8,),
];

export default function DealSniperCard() {
  const theme = useTheme();

  return (
    <Grid
      container
      direction="row"
      justifyContent="start"
      alignItems="center"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
      {items.map((card, index) => (
        <Item key={index}>
          <CardStyled>
            <CustomCard sx={{ p: 5 }}>
              <Grid>
                <Box sx={{ pt: 1, display: 'flex', justifyContent: 'space-between', }}>
                  <Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                      <Typography variant='h6'> {card.botName} </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <IconButton size='small' aria-label='settings' className='card-more-options'>
                      <ApplicationEditOutline />
                    </IconButton>

                    <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ mx: 3 }}>
                      <CheckboxMultipleBlank />
                    </IconButton>

                    <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ mx: 3 }}>
                      <CloseThick />
                    </IconButton>
                    {/* <CheckboxMultipleBlank fontSize='medium' sx={{ mx: 4 }} />
                  <WindowClose fontSize='medium' /> */}
                  </Box>
                </Box>
              </Grid>

              <Grid>
                <Box sx={{ my: 5, display: 'flex', justifyContent: 'space-between', }}>
                  <Box>
                    <ListItem sx={{ margin: 0, padding: 0 }}>
                      <ListItemAvatar>
                        <Avatar variant='rounded' src={card.collectionImage} alt={card.collectionName} />
                      </ListItemAvatar>
                      <Typography>{card.collectionName} </Typography>
                    </ListItem>
                  </Box>
                  <Box sx={{ ml: 2 }}>
                    <Button variant='contained' color='success' href='#'>
                      START
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid>
                <Box sx={{ pt: 1, display: 'flex', justifyContent: 'space-between', }}>
                  <Typography variant='overline' display='block' color='primary' sx={{ fontWeight: 'bold' }}>Max Price</Typography>
                  <Typography variant='overline' display='block' color='contrast' sx={{ fontWeight: 'bold' }}> {card.maxPrice} </Typography>
                </Box>

                <Box sx={{ pt: 1, display: 'flex', justifyContent: 'space-between', }}>
                  <Typography variant='overline' display='block' color='primary' sx={{ fontWeight: 'bold' }}>Marketplaces</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignSelf: 'center' }}>
                    {card.marketOpensea == true ? <Avatar title='OpenSea Marketplace' sx={{ width: 22, height: 22, marginRight: 1 }} src='/assets/svg/opensea.svg' /> : ''}
                    {card.marketSolanart == true ? <Avatar title='Solanart Marketplace' sx={{ width: 22, height: 22, marginRight: 1 }} src={theme.palette.mode === 'dark' ? "/assets/svg/solanart-light.svg" : "/assets/svg/solanart-dark.svg"} /> : ''}
                    {card.marketMagiceden == true ? <Avatar title='Magic Eden Marketplace' sx={{ width: 22, height: 22, marginRight: 1 }} src='/assets/svg/magiceden.png' /> : ''}
                    {card.marketHyperspace == true ? <Avatar title='HyperSpace Marketplace' sx={{ width: 22, height: 22, marginRight: 0 }} src='/assets/svg/hyperspace.png' /> : ''}
                  </Box>
                </Box>

                <Box sx={{ pt: 1, display: 'flex', justifyContent: 'space-between', }}>
                  <Typography variant='overline' display='block' color='primary' sx={{ fontWeight: 'bold' }}>Execution</Typography>
                  <Typography variant='overline' display='block' color='contrast' sx={{ fontWeight: 'bold' }}>{card.execution}</Typography>
                </Box>

                <Box sx={{ pt: 1, display: 'flex', justifyContent: 'space-between', }}>
                  <Typography variant='overline' display='block' color='primary' sx={{ fontWeight: 'bold' }}>Gas</Typography>
                  <Typography variant='overline' display='block' color='contrast' sx={{ fontWeight: 'bold' }}>Priority {card.gasPriority} GWEI | Max {card.gasMax} GWEI</Typography>
                </Box>

                <Box sx={{ pt: 1, display: 'flex', justifyContent: 'space-between', }}>
                  <Typography variant='overline' display='block' color='primary' sx={{ fontWeight: 'bold' }}>Node</Typography>
                  <Typography variant='overline' display='block' color='contrast' sx={{ fontWeight: 'bold' }}>{card.node}</Typography>
                </Box>

                <Box sx={{ pt: 1, display: 'flex', justifyContent: 'space-between', }}>
                  <Typography variant='overline' display='block' color='primary' sx={{ fontWeight: 'bold' }}># Token IDs</Typography>
                  <Typography variant='overline' display='block' color='contrast' sx={{ fontWeight: 'bold' }}>{card.tokenIds}</Typography>
                </Box>
              </Grid>
              <Divider />
              <Grid>
                <Box sx={{ pt: 1, display: 'flex', justifyContent: 'space-between', }}>
                  <Typography variant='overline' display='block' color='contrast' sx={{ fontWeight: 'bold' }}>Listings Processed</Typography>
                  <Typography variant='overline' display='block' color='contrast' sx={{ fontWeight: 'bold' }}>{card.listProcessed}</Typography>
                </Box>
              </Grid>
              <Divider />
              <Grid >
                <Box sx={{ pt: 1, display: 'flex', justifyContent: 'space-between', }}>
                  <Typography variant='overline' display='block' color='contrast' sx={{ fontWeight: 'bold' }}>Opportunities Processed</Typography>
                  <Typography variant='overline' display='block' color='contrast' sx={{ fontWeight: 'bold' }}>{card.opportunitiesProcessed}</Typography>
                </Box>
              </Grid>
            </CustomCard>
          </CardStyled>
        </Item >
      ))}
    </Grid >
  );
}
