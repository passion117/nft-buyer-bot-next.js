import * as React from 'react';
import Box from '@mui/material/Box';
import ethers from 'ethers';
import Typography from '@mui/material/Typography';
import { useMoralis } from "react-moralis";

// ** Icons Imports
import GasStation from 'mdi-material-ui/GasStation';
import LoginVariant from 'mdi-material-ui/LoginVariant';
import Wallet from 'mdi-material-ui/Wallet';
import Button from '@mui/material/Button'
import { ExternalProvider } from "@ethersproject/providers";

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

import styled from '@mui/system/styled';

declare global {
  interface Window {
    ethereum: ExternalProvider
  }
}
const MetamaskButton = styled('div')(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // border: '1px solid',
  // borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
  borderColor: 'text.primary',
  display: 'flex',
  border: 2,
  m: 0,
}));

const UserInformation = () => {
  const { Moralis, authenticate, isAuthenticated, logout, user, web3 } = useMoralis();

  return (
    <>
      {!isAuthenticated ?
        <MetamaskButton>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 2,
            },
          }}>
            <Button onClick={() => { authenticate({ provider: "metamask" }) }} variant='outlined' color='primary' startIcon={<LoginVariant />}>
              Sign in with Metamask
            </Button>
          </Box>
        </MetamaskButton> :
        <>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 2,
            },
          }}>
            <Button variant='outlined' color='primary' startIcon={<Wallet />} onClick={logout}>
              {user?.get("ethAddress").slice(0, 4)}....{user?.get("ethAddress").slice(-4)}
            </Button>
            <Button variant='outlined' color='primary' startIcon={<GasStation />}>
              54,02
            </Button>
          </Box>
        </>}
    </>
  )
}
export default UserInformation
