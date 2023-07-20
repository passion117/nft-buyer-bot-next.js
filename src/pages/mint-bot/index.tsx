// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import StepperMintBotTasks from 'src/views/Forms/form-custom/StepperMintBotTasks'

const MintBot = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Mint Bot - Tasks</Typography>
        {/* <Typography variant='h6'>caption if necessary</Typography> */}
      </Grid>
      <Grid item xs={12}>
        <StepperMintBotTasks />
      </Grid>
    </Grid>
  )
}

export default MintBot
