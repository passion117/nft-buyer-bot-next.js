// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'

// ** Third Party Imports
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

const label = { inputProps: { 'aria-label': 'Switch demo' } }

const data = [
  {
    name: '0',
    uv: 0,
    pv: 120,
    amt: 1000,
  },
  {
    name: '100',
    uv: 380,
    pv: 400,
    amt: 1000,
  },
  {
    name: '600',
    uv: 570,
    pv: 50,
    amt: 1000,
  },
  {
    name: '700',
    uv: 240,
    pv: 700,
    amt: 1000,
  },
  {
    name: '800',
    uv: 300,
    pv: 900,
    amt: 1000,
  },
  {
    name: '900',
    uv: 946,
    pv: 800,
    amt: 1000,
  },
];


const CustomTooltip = (props: TooltipProps<any, any>) => {
  // ** Props
  const { active, payload } = props

  if (active && payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <span>{`${payload[0].value}%`}</span>
      </div>
    )
  }

  return null
}

const SummaryChart = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ maxHeight: 330 }}>
        <Grid container>
          <Grid item xs={3}>
            <Box sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
              <Button variant='outlined' size='small' sx={{ minWidth: '2px', mr: 2 }}>1H</Button>
              <Button variant='outlined' size='small' sx={{ minWidth: '2px' }}>1D</Button>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant='h6'>Summary</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
              <Typography variant='body1'>Outliers</Typography>
              <Switch {...label} defaultChecked />
            </Box>
          </Grid>
        </Grid>
        <Card sx={{ height: '100%', mt: 0 }}>
          <CardContent>

          </CardContent>
          <CardContent>
            <Box sx={{ height: 250 }}>
              <ResponsiveContainer>
                <LineChart height={350} data={data} margin={{ left: 1, right: 15 }}>
                  <CartesianGrid />
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip content={CustomTooltip} />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>

            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SummaryChart;
