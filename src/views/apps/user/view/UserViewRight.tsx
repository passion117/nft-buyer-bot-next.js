// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab, { TabProps } from '@mui/material/Tab'

// ** Icons Imports
import LockOutline from 'mdi-material-ui/LockOutline'
import BellOutline from 'mdi-material-ui/BellOutline'
import LinkVariant from 'mdi-material-ui/LinkVariant'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import BookmarkOutline from 'mdi-material-ui/BookmarkOutline'

// ** Demo Components Imports
import UserViewBilling from 'src/views/apps/user/view/UserViewBilling'
import UserViewOverview from 'src/views/apps/user/view/UserViewOverview'
import UserViewSecurity from 'src/views/apps/user/view/UserViewSecurity'
import UserViewConnection from 'src/views/apps/user/view/UserViewConnection'
import UserViewNotification from 'src/views/apps/user/view/UserViewNotification'

// ** Types

// ** Styled Tab component
const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(1)
  }
}))

const UserViewRight = () => {
  const [value, setValue] = useState<string>('1')
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList>
        <Tab value='1' label='Overview' icon={<AccountOutline sx={{ fontSize: '18px' }} />} />
        <Tab value='2' label='Security' icon={<LockOutline sx={{ fontSize: '18px' }} />} />
        <Tab value='3' label='Notification' icon={<BellOutline sx={{ fontSize: '18px' }} />} />
      </TabList>
      <Box sx={{ mt: 3 }}>
        <TabPanel sx={{ p: 0 }} value='1'>
          {/* <UserViewOverview invoiceData={invoiceData} /> */}
          Componente desativado 1
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='2'>
          {/* <UserViewSecurity /> */}
          Componente desativado 2
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='3'>
          {/* <UserViewNotification /> */}
          Componente desativado 3
        </TabPanel>
      </Box>
    </TabContext>
  )
}

export default UserViewRight
