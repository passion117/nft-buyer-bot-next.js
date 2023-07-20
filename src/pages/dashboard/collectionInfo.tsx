import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';

export default function CollectionInfo() {
  return (

    <Grid item xs={12} md={6} >
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', }}>
        <Avatar src='../../assets/images/nfts/nft4.png' sx={{ width: 82, height: 82, mr: 4 }} />
        <Box>
          <Typography variant='h6'>Cursed Stone</Typography>
          <Typography variant='body2' color={'primary'}>0x78as1da8sd1as6d51a6sd51as6</Typography>
          <Box>
            <Box sx={{ pt: 1, display: 'flex', justifyContent: 'flex-start', }}>
              <Avatar title='OpenSea' sx={{ width: 18, height: 18, marginRight: 1.5 }} src='/assets/svg/opensea.svg' />
              <Avatar title='Discord' variant='square' sx={{ width: 18, height: 18, marginRight: 1.5 }} src='/assets/svg/discord.svg' />
              <Avatar title='Instagram' variant='square' sx={{ width: 18, height: 18, marginRight: 1.5 }} src='/assets/svg/instagram.svg' />
              <Avatar title='Website' variant='square' sx={{ width: 18, height: 18, marginRight: 1.5 }} src='/assets/svg/web.svg' />
              <Avatar title='ETH' sx={{ width: 18, height: 18, marginRight: 1.5 }} src='/assets/svg/eth.svg' />
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>

  );
}
