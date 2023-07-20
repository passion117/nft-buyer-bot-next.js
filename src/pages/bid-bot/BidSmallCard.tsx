// ** MUI Imports
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar'
import * as React from 'react';

const CardStyled = styled(Card)(({ theme }) => ({
  width: '500px',
}));

const CardBorder = styled(Box)(({ theme }) => ({
  borderBottom: 'solid #666CFF',
  borderWidth: 7,
}));

function createData(
  nftImage: string,
  tokenId: string,
  expiry: number,
  expiryPercent: string,
  price: number,
  token: string,
  autoSign: string,
  remaining: number,
) {
  return { nftImage, tokenId, expiry, expiryPercent, price, token, autoSign, remaining };
}

const cards = [
  createData('assets/images/nfts/nft4.png', '10', 100, '30%', 0.001, 'WETH', 'Auto-Sign', 30),
  createData('assets/images/nfts/nft4.png', '10', 150, '100%', 0.001, 'WETH', 'Auto-Sign', 30),
  createData('assets/images/nfts/nft4.png', '10', 100, '80%', 0.001, 'WETH', 'Auto-Sign', 30),
];


export default function BidSmallCard() {
  return (
    <Box >
      <Grid container direction="row" justifyContent="end" alignItems="center" columnGap={6} rowGap={6}>

        {/* condition ? <BidSmallCard /> : exprIfFalse */}

        {cards.map((card) => (
          <Box key={card.nftImage}>
            {card.expiry >= 0.1 ?
              <CardStyled >
                <CardContent>
                  <Grid container sx={{ p: 0 }}>
                    <Grid xs={3} sx={{ p: 0 }}>
                      <Avatar sx={{ width: 66, height: 66 }} src={card.nftImage} />
                    </Grid>
                    <Grid xs={9} sx={{ p: 0 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <Typography variant='body1' sx={{ fontWeight: 600 }}>Collection Name</Typography>
                        <Avatar title='OpenSea Marketplace' sx={{ width: 14, height: 14, ml: 2 }} src='/assets/svg/opensea.svg' />
                      </Box>
                      <Box sx={{ display: 'flex', mt: 1 }}>
                        <Typography variant='caption'>Token ID {card.tokenId} </Typography>
                        <Typography variant='caption' sx={{ mr: 2, ml: 2 }} >|</Typography>
                        <Typography variant='caption'>Expiry: {card.expiry} mins</Typography>
                        <Typography variant='caption' sx={{ mr: 2, ml: 2 }} >|</Typography>
                        <Typography variant='caption'>Price: {card.price} {card.token}</Typography>
                      </Box>

                      <Box sx={{ display: 'flex', mt: 1 }}>
                        <Typography variant='caption'>{card.autoSign}</Typography>
                        <Typography variant='caption' sx={{ mr: 2, ml: 2 }} >|</Typography>
                        <Typography variant='caption'>{card.remaining} remaining</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardBorder sx={{ width: card.expiryPercent }}  ></CardBorder>
              </CardStyled>
              : ''}
          </Box>
        ))
        }
      </Grid>
    </Box >

  );
}
