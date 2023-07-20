// ** React Import
import { ReactNode, MouseEvent, useState } from 'react'


// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TableContainer from '@mui/material/TableContainer'

// ** Icons Imports
import Circle from 'mdi-material-ui/Circle'
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Type Import
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

interface DataType {
  title: string
  amount: string
  icon: ReactNode
  color: ThemeColor
  trendAmount: number
}

const data: DataType[] = [
  {

    amount: '$845k',
    trendAmount: 82,
    color: 'success',
    title: 'Buy',
    icon: <ChevronUp sx={{ color: 'success.main' }} />
  },
  {
    trendAmount: 52,
    amount: '$12.5k',
    color: 'error',
    title: 'Sell',
    icon: <ChevronDown sx={{ color: 'error.main' }} />
  }
]

const series = [
  {
    name: 'Buy',
    data: [155, 135, 320, 100, 150, 335, 160]
  },
  {
    name: 'Sell',
    data: [110, 235, 125, 230, 215, 115, 200]
  }
]

const WhalesValue = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '41%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yaxis: { show: false },
    colors: [hexToRGBA(theme.palette.success.main, 1), hexToRGBA(theme.palette.error.main, 1)],
    grid: {
      strokeDashArray: 10,
      padding: {
        top: 0,
        left: -4,
        right: -5,
        bottom: -14
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 6,
      curve: 'smooth',
      lineCap: 'round',
      colors: [theme.palette.background.paper]
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '50%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '50%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '35%'
            }
          }
        }
      },
      {
        breakpoint: 430,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '45%'
            }
          }
        }
      }
    ]
  }

  // ** State
  const [alignment, setAlignment] = useState<string | null>('web')

  const handleAlignment = (event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment)
  }

  return (
    <Box >
      {/* sx={{ backgroundColor: 'action.hover' }} */}
      <CardHeader
        title='Whales Value'
        action={
          <ToggleButtonGroup exclusive color='primary' value={alignment} onChange={handleAlignment}>
            <ToggleButton value='7D' color='error' >7D</ToggleButton>
            <ToggleButton value='24H' color='warning'>24H</ToggleButton>
            <ToggleButton value='1H' color='success'>1H</ToggleButton>
          </ToggleButtonGroup>
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <ReactApexcharts type='bar' height={287} series={series} options={options} />
      </CardContent>
      <TableContainer sx={{ mb: 3.75 }}>
        <Table>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                sx={{ '& .MuiTableCell-root': { borderBottomWidth: 0, py: `${theme.spacing(1.125)} !important` } }}
              >
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Circle sx={{ mr: 2.25, fontSize: '0.75rem', color: `${theme.palette[item.color].main}` }} />
                    <Typography variant='body2' sx={{ fontWeight: 600, whiteSpace: 'nowrap', color: 'text.primary' }}>
                      {item.title}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant='body2'>{item.amount}</Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Typography
                      variant='body2'
                      sx={{ mr: 2.5, fontWeight: 600, color: 'text.primary' }}
                    >{`${item.trendAmount}%`}</Typography>
                    {item.icon}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default WhalesValue
