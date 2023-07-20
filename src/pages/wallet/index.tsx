// ** React Imports
import MintBot from "../../layouts/components/mintBot"
import Typography from '@mui/material/Typography'

// ** MUI Imports
import Grid from '@mui/material/Grid'

const Wallet = () => {
  // ** State

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Wallet Manager</Typography>
      </Grid>
      <Grid item xs={12}>
        <MintBot />
      </Grid>
    </Grid>

  )
}

export default Wallet
