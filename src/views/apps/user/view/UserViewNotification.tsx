// ** MUI Imports
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'
import Checkbox from '@mui/material/Checkbox'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import TableContainer from '@mui/material/TableContainer'

const UserViewNotification = () => {
  return (
    <Card>
      <CardHeader title='Notifications' titleTypographyProps={{ variant: 'h6' }} />

      <Divider sx={{ m: 0 }} />

      <CardContent>
        <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
          You will receive notification for the below selected items.
        </Typography>
      </CardContent>

      <Divider sx={{ m: 0 }} />

      <TableContainer>
        <Table sx={{ minWidth: 500 }}>
          <TableHead
            sx={{ backgroundColor: theme => (theme.palette.mode === 'light' ? 'grey.50' : 'background.default') }}
          >
            <TableRow>
              <TableCell sx={{ py: 3 }}>Type</TableCell>
              <TableCell sx={{ py: 3 }} align='center'>
                Email
              </TableCell>
              <TableCell sx={{ py: 3 }} align='center'>
                Browser
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow hover>
              <TableCell>Bought NFT</TableCell>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked />
              </TableCell>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox />
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Bot status</TableCell>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox />
              </TableCell>
              <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                <Checkbox defaultChecked />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <CardActions>
        <Button variant='contained' sx={{ mr: 2 }}>
          Save Changes
        </Button>
        <Button color='secondary' variant='outlined'>
          Discard
        </Button>
      </CardActions>
    </Card>
  )
}

export default UserViewNotification
