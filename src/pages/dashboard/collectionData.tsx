import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomChip from 'src/@core/components/mui/chip'


export default function CollectionData() {
  return (
    <Grid item xs={12} md={6} >
      <Box>
        <Box sx={{ display: 'flex', justifyContent: {sm: 'flex-center', md: 'flex-end'} }}>
          <Box sx={{ textAlign: 'center', mx: 4 }}>
            <Typography variant='subtitle2' sx={{ textAlign: 'center', fontWeight: 'bold', mb:1 }} >FLOOR</Typography>
            <Typography variant='subtitle2' sx={{ textAlign: 'center' }} >9995</Typography>
          </Box>

          <Box sx={{ textAlign: 'center', mx: 4 }}>
            <Typography variant='subtitle2' sx={{ textAlign: 'center', fontWeight: 'bold', mb:1 }} >SUPPLY</Typography>
            <Typography variant='subtitle2' sx={{ textAlign: 'center' }} >9995</Typography>
          </Box>

          <Box sx={{ textAlign: 'center', mx: 4 }}>
            <Typography variant='subtitle2' sx={{ textAlign: 'center', fontWeight: 'bold', mb:1 }} >HOLDERS</Typography>
            <Typography variant='subtitle2' sx={{ textAlign: 'center' }}>92%</Typography>
          </Box>

          <Box sx={{ textAlign: 'center', mx: 4 }}>
            <Typography variant='subtitle2' sx={{ textAlign: 'center', fontWeight: 'bold' }} >REVEALED</Typography>
            <Button variant='contained' color='success' size='small'>100%</Button>
          </Box>

          <Box sx={{ textAlign: 'center', mx: 4 }}>
            <Typography variant='subtitle2' sx={{ textAlign: 'center', fontWeight: 'bold' }} >ROYALTY</Typography>
            <Button variant='contained'  color='error' size='small'>5%</Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
