// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'

// ** Third Party Components
import axios from 'axios'

// ** Types
import { InvoiceType } from 'src/types/apps/invoiceTypes'
import { UserLayoutType, UsersType } from 'src/types/apps/userTypes'

// ** Demo Components Imports
import UserViewLeft from 'src/views/apps/user/view/UserViewLeft'
import UserViewRight from 'src/views/apps/user/view/UserViewRight'

const UserView = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={5} lg={4}>
        <UserViewLeft />
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <UserViewRight />
      </Grid>
    </Grid>
  )
}

export default UserView
