// ** MUI Imports
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { styled, alpha } from '@mui/material/styles';
import { red, green, blue, yellow, orange, purple } from '@mui/material/colors';
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Magnify from 'mdi-material-ui/Magnify'
import EthereumIcon from 'src/icons/EthereumIcon';



export default function BidSearch() {
  return (
    <TextField
      fullWidth
      size='medium'
      placeholder='Search for collection...'
      sx={{ '& .MuiInputBase-root': { borderRadius: 2 } }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <Magnify fontSize='small' />
          </InputAdornment>
        )
      }}
    />
  );
}
