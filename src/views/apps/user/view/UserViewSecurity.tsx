// ** React Imports
import { ChangeEvent, Fragment, MouseEvent, useState, SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import AlertTitle from '@mui/material/AlertTitle'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import DialogTitle from '@mui/material/DialogTitle'
import OutlinedInput from '@mui/material/OutlinedInput'
import DialogContent from '@mui/material/DialogContent'
import InputAdornment from '@mui/material/InputAdornment'
import TableContainer from '@mui/material/TableContainer'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import DeleteOutline from 'mdi-material-ui/DeleteOutline'
import PencilOutline from 'mdi-material-ui/PencilOutline'

interface State {
  newPassword: string
  showNewPassword: boolean
  confirmNewPassword: string
  showConfirmNewPassword: boolean
}

interface DataType {
  device: string
  browser: string
  location: string
  recentActivity: string
}

const data: DataType[] = [
  {
    device: 'Dell XPS 15',
    location: 'United States',
    browser: 'Chrome on Windows',
    recentActivity: '10, Jan 2020 20:07'
  },
  {
    location: 'Ghana',
    device: 'Google Pixel 3a',
    browser: 'Chrome on Android',
    recentActivity: '11, Jan 2020 10:16'
  },
  {
    location: 'Mayotte',
    device: 'Apple iMac',
    browser: 'Chrome on MacOS',
    recentActivity: '11, Jan 2020 12:10'
  },
  {
    location: 'Mauritania',
    device: 'Apple iPhone XR',
    browser: 'Chrome on iPhone',
    recentActivity: '12, Jan 2020 8:29'
  }
]

const UserViewSecurity = () => {

  return (
    <Fragment>
      <Card>
        <CardHeader title='Recent devices' titleTypographyProps={{ variant: 'h6' }} />

        <Divider sx={{ m: 0 }} />

        <TableContainer>
          <Table sx={{ minWidth: 500 }}>
            <TableHead
              sx={{ backgroundColor: theme => (theme.palette.mode === 'light' ? 'grey.50' : 'background.default') }}
            >
              <TableRow>
                <TableCell sx={{ py: 3 }}>Browser</TableCell>
                <TableCell sx={{ py: 3 }}>Device</TableCell>
                <TableCell sx={{ py: 3 }}>Location</TableCell>
                <TableCell sx={{ py: 3 }}>Recent Activity</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((item: DataType, index: number) => (
                <TableRow hover key={index} sx={{ '&:last-of-type td': { border: 0 } }}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img width='22' height='22' alt='Chrome' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png' />
                      <Typography sx={{ ml: 2 }}>'{item.browser}'</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>'{item.device}'</TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>'{item.location}'</TableCell>
                  <TableCell sx={{ color: 'text.secondary' }}>'{item.recentActivity}'</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Fragment>
  )
}

export default UserViewSecurity
