import * as React from 'react';
import styled from '@mui/system/styled';
import Grid from '@mui/material/Grid'
import Box from '@mui/system/Box';
import NftCard from './nftCard';
import Typography from '@mui/material/Typography'
import { MouseEvent, SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Analytics from '../analytics';

// const Item = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   border: '1px solid',
//   borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
//   padding: theme.spacing(1),
//   borderRadius: '4px',
//   textAlign: 'center',
// }));

export default function RowAndColumnSpacing() {

  const [value, setValue] = useState<string>('1')
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 5 }}>Collections</Typography>
      </Grid>
      <Grid item xs={12}>
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label='nav tabs example'>
            <Tab
              value='1' component='a' label='Rarities' href='/rarities'
              onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
            />
            <Tab value='2' component='a' label='Analytics' href='/analytics'
              onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
            />
          </TabList>
          <TabPanel value='1' sx={{ mt: 10, pl: 0 }}>
            <NftCard />
          </TabPanel>
          <TabPanel value='2' sx={{ mt: 10, pl: 0 }}>
            <Analytics />
          </TabPanel>
        </TabContext>
      </Grid >
    </Grid >
  );
}


