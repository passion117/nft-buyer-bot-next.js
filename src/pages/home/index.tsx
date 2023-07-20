// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CollectionInfo from '../dashboard/collectionInfo'
import DropTable from './dropTable'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>(DROP) Check out all collections that are dropping soon!</Typography>
      </Grid>
      <Grid item xs={12}>
        {/* <DropTable /> */}
        <CollectionInfo />
      </Grid>
    </Grid>
  )
}

export default Home
