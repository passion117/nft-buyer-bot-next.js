import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { styled } from '@mui/material/styles';
import EthereumIcon from 'src/icons/EthereumIcon';

const CardImage = styled(CardMedia)(({ theme }) => ({
  borderRadius: 22,
  height: 250,
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    height: 350,
  },
  [theme.breakpoints.down('md')]: {
    height: 350,
  },
  [theme.breakpoints.down('xs')]: {
    height: 250,
  },
}));

const CustomCard = styled(Card)(({ theme }) => ({
  height: '100%'
}));

export default function BidCard() {
  return (
    <CustomCard>
      <CardContent>
        <Box>
          <CardImage image='https://i.seadn.io/gae/1Axwc9lubiJAf2WBADTitb4HcSxrRdxkz4Fb08HD9CEGt-fIn87DkE-3oB9POT7gA-jT7As50qdGEbjok0-gKxr7ZHqSqa7xq0b4tVI?auto=format&w=1000' />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontWeight: '500' }} variant='h6' align='left'>Collection Name</Typography>
          <Typography color='primary' variant='body2' align='left'>0x78as1da8sd1as6d51a6sd51as6</Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Grid container>
            <Grid item xs={6} sm={6} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
              <Typography sx={{ fontWeight: '600', mr: 2 }} color='primary' variant='subtitle1' align='left'>Floor</Typography>
              <Typography sx={{ mr: 1 }} variant='subtitle1' align='left'>15,00</Typography>
              <EthereumIcon fontSize='small' />
            </Grid>
            <Grid item xs={6} sm={6} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
              <Typography sx={{ fontWeight: '600', mr: 2 }} color='primary' variant='subtitle1' align='left'>Supply</Typography>
              <Typography sx={{ mr: 1 }} variant='subtitle1' align='left'>10000</Typography>
            </Grid>
          </Grid>
        </Box>
        <Typography></Typography>
      </CardContent>
    </CustomCard>
  )
}
