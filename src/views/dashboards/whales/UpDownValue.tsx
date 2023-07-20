// ** MUI Imports
import Box from '@mui/material/Box'

import Typography from '@mui/material/Typography'


// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Icons Imports
import Monitor from 'mdi-material-ui/Monitor'
import ChevronUp from 'mdi-material-ui/ChevronUp'
import TrendingUpIcon from 'src/icons/TrendingUpIcon';
import TrendingDownIcon from 'src/icons/TrendingDownIcon';
import { height } from '@mui/system'

const UpDownValue = () => {
  return (
    <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center' }}>
          <CustomAvatar
            skin='light'
            color='success'
            sx={{ mr: 1.5, height: 24, width: 24, borderRadius: '6px' }}
          >
            <TrendingUpIcon sx={{ fontSize: '1.6rem' }} />
          </CustomAvatar>
          <Typography variant='caption' sx={{ color: 'success.main', pr: 1 }}>NotOkayBears</Typography>
          <Typography variant='caption'>was the most BOUGHT collection by </Typography>
        </Box>
        <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center' }}>
          <CustomAvatar
            skin='light'
            color='error'
            sx={{ mr: 1.5, height: 24, width: 24, borderRadius: '6px' }}
          >
            <TrendingDownIcon sx={{ fontSize: '1.6rem' }} />
          </CustomAvatar>
          <Typography variant='caption' sx={{ color: 'error.main', pr: 1 }}>Project PXN</Typography>
          <Typography variant='caption'>was the most SOLD collection by </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default UpDownValue
