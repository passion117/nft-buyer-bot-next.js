import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { styled, alpha } from '@mui/material/styles';
import { red, green, blue, yellow, orange, purple } from '@mui/material/colors';
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Magnify from 'mdi-material-ui/Magnify'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import BidCard from './BidCard'

import { MouseEvent, useState } from 'react'

import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'

const ToggleButtonCustom = styled(ToggleButton)(({ theme }) => ({
  borderRadius: 4,
  padding: 4,
  paddingLeft: 10,
  paddingRight: 10
}));

const InputAdornmentCustom = styled(InputAdornment)(({ theme }) => ({

}));



export default function BidConfig() {
  const [alignment, setAlignment] = useState<string | null>('rank')

  const handleAlignment = (event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment)
  }

  return (

    <Card sx={{height: '100%'}}>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Box sx={{ mb: 5 }}>
              <Typography color='primary' sx={{ fontWeight: '600', mb: 2 }}>BID ON</Typography>
              <ToggleButtonGroup exclusive color='primary' value={alignment} onChange={handleAlignment}>
                <ToggleButtonCustom value='rank' sx={{ fontWeight: '600' }}>RANK</ToggleButtonCustom>
                <ToggleButtonCustom value='tokenId' sx={{ fontWeight: '600' }}>TOKEN ID</ToggleButtonCustom>
              </ToggleButtonGroup>
            </Box>

            <Box sx={{ mb: 5 }}>
              <Typography color='primary' sx={{ fontWeight: '600', mb: 2 }}>FROM</Typography>
              <TextField id='size-small' defaultValue='0' size='small' type='number' InputProps={{ inputProps: { min: 0 } }} />
            </Box>

            <Box sx={{ mb: 10 }}>
              <Typography color='primary' sx={{ fontWeight: '600', mb: 2 }}>TO</Typography>
              <TextField id='size-small' defaultValue='0' size='small' type='number' InputProps={{ inputProps: { min: 0 } }} />
            </Box>

            <Box>
              <Typography color='primary' sx={{ fontWeight: '600', mb: 1 }}>SUMMARY</Typography>
              <Typography variant='body2' sx={{ mb: 4 }} align='left'>What collection do you want to bid on?</Typography>
              <Button variant='contained' color='success' size='large' fullWidth>CREATE TASK</Button>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ mb: 5 }}>
              <Typography color='primary' sx={{ fontWeight: '600', mb: 2 }}>EXPIRATION</Typography>
              <FormControl >
                <OutlinedInput size='small' type='number' endAdornment={
                  <InputAdornmentCustom position='start'>
                    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                      <Box>
                        <AccessTimeFilledIcon color='primary' fontSize='small' sx={{ mt: 1.5, mr: 1.5, p: 0 }} />
                      </Box>
                      <Box>
                        <Typography color='primary'>Mins</Typography>
                      </Box>
                    </Box>
                  </InputAdornmentCustom>}
                />
              </FormControl>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography color='primary' sx={{ fontWeight: '600', mb: 2 }}>PRICE(WETH)</Typography>
              <TextField fullWidth id='size-small' defaultValue='0' size='small' type='number' InputProps={{ inputProps: { min: 0 } }} />
            </Box>
            <Grid
              container
              direction="row"
              justifyContent='flex-start'
              alignItems="start"
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }} >
              <Grid item >
                <Button variant='contained' size='small'>150% F.P</Button>
              </Grid>
              <Grid item>
                <Button variant='contained' size='small'>125% F.P</Button>
              </Grid>
              <Grid item>
                <Button variant='contained' size='small'>F.P</Button>
              </Grid>
              <Grid item>
                <Button variant='contained' size='small'>75% F.P</Button>
              </Grid>
              <Grid item>
                <Button variant='contained' size='small'>50% F.P</Button>
              </Grid>

            </Grid>
            {/* <Box sx={{ display: 'flex', justifyContent: 'space-between' }}> */}

            {/* </Box> */}

          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
