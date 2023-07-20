// ** React Imports
import { Fragment, MouseEvent, useState } from 'react'
import * as React from 'react';

import SelectMultipleBotTask from './SelectMultipleBotTask';

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import StepContent from '@mui/material/StepContent'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';

import ListItemText from '@mui/material/ListItemText'

// ** Third Party Imports
import clsx from 'clsx'
import toast from 'react-hot-toast'

// ** Custom Components Imports
import StepperCustomDot from '../form-wizard/StepperCustomDot'

// ** Styled Component
import StepperWrapper from 'src/@core/styles/mui/stepper'



const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]


const steps = [
  {
    title: 'Contract',
    subtitle: 'Subtitle',
  },
  {
    title: 'Conditions',
    subtitle: 'Subtitle',
  },
  {
    title: 'Mint Method',
    subtitle: 'Subtitle',
  },
  {
    title: 'Gas',
    subtitle: 'Subtitle',
  },
  {
    title: 'Wallets',
    subtitle: 'Subtitle',
  }

]

const StepperVerticalWithNumbers = () => {
  // ** States
  const [activeStep, setActiveStep] = useState<number>(0)

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
    if (activeStep === steps.length - 1) {
      toast.success('Completed All Steps!!')
    }
  }
  const handleReset = () => {
    setActiveStep(0)
  }

  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;



  const getStepContent = (step: number) => {


    switch (step) {
      case 0:
        return (
          <div>
            <Grid  >
              <Typography variant='h5' color='primary'>Contract config</Typography>
              <Typography sx={{ mb: 5 }} variant='subtitle1'>This can be anything you want!</Typography>
            </Grid>
            <Grid md={12}>
              <FormControl fullWidth>
                <TextField InputLabelProps={{ shrink: true }} sx={{ mb: 5 }} required id='form-props-required' label='Task Name' placeholder='Cyber Punk Mint' />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl fullWidth>
                <TextField InputLabelProps={{ shrink: true }} required id='form-props-required' label='Contract Address' placeholder='0x57a204aa1042f6e66dd7730813f4024114d74f37' />
              </FormControl>
            </Grid>
          </div>
        )
      case 1:
        return (
          <div>
            <Grid  >
              <Typography variant='h5' color='primary'>Trigger Type</Typography>
              <Typography sx={{ mb: 5 }} variant='subtitle1'>A Trigger is aomething that starts the minting action. This trigger is usually a timestamp after which minting is allowed. The other popular trigger is the “sale flag” aka. “monitor method”. This is when the minting phase is starded by transaction to the blockchain.</Typography>
            </Grid>
            <Grid md={12}>
              <FormControl fullWidth>
                <TextField InputLabelProps={{ shrink: true }} sx={{ mb: 5 }} required id='form-props-required' label='Time Trigger' placeholder='Epoch Time (in miliseconds)' />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl fullWidth>
                <TextField InputLabelProps={{ shrink: true }} required id='form-props-required' label='Monitor Method' placeholder='mint' />
              </FormControl>
            </Grid>
          </div>
        )
      case 2:
        return (
          <div>
            <Grid md={12}>
              <Typography variant='h5' color='primary'>Mint Action</Typography>
            </Grid>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth sx={{ mb: 5, mt: 5 }}>
                  <InputLabel id='demo-simple-select-outlined-label' >Contract</InputLabel>
                  <Select
                    label='Contract'
                    defaultValue=''
                    id='demo-simple-select-outlined'
                    labelId='demo-simple-select-outlined-label'
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth sx={{ mb: 5, mt: 5 }}>
                  <TextField InputLabelProps={{ shrink: true }} sx={{ mb: 5 }} required id='form-props-required' label='numberOfTokensMax5(uint256)' placeholder='5' />
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <Grid xs={6}>
                  <FormControl fullWidth>
                    <Button variant='contained' size='large'>GENERATE TRANSACTION DATA</Button>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </div>
        )
      case 3:
        return (
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid md={12}>
              <Typography variant='h5' color='primary'>Gas</Typography>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField InputLabelProps={{ shrink: true }} sx={{ mb: 4 }} required id='form-props-required' label='Gas Limit' placeholder='300000' />
                <TextField InputLabelProps={{ shrink: true }} sx={{ mb: 4 }} id='form-props-required' label='Max Priority Fee (optional)' placeholder='300' />
                <TextField InputLabelProps={{ shrink: true }} id='form-props-required' label='Max Fee (optional)' placeholder='500' />
              </FormControl>
            </Grid>
            <Grid item xs={6}>

            </Grid>
          </Grid>
        )
      case 4:
        return (
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid md={12}>
              <Typography variant='h5' color='primary' sx={{ mb: 2 }} >Wallets</Typography>
            </Grid>
            <Grid item xs={6}>
              <SelectMultipleBotTask />
            </Grid>
          </Grid>
        )
      default:
        return null
    }
  }

  const renderContent = () => {
    if (activeStep === steps.length) {
      return (
        <Fragment>
          <Typography>All steps are completed!</Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              size='large' variant='contained' onClick={handleReset}>
              Reset
            </Button>
          </Box>
        </Fragment>
      )
    } else {
      return getStepContent(activeStep)
    }
  }

  return (
    <Card>
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((step, index) => {
              return (
                <Step key={index} className={clsx({ active: activeStep === index })}>
                  <StepLabel StepIconComponent={StepperCustomDot}>
                    <div className='step-label'>
                      <Typography className='step-number'>0{index + 1}</Typography>
                      <div>
                        <Typography className='step-title'>{step.title}</Typography>
                        <Typography className='step-subtitle'>{step.subtitle}</Typography>
                      </div>
                    </div>
                  </StepLabel>
                  <StepContent>
                    <>
                      {renderContent()}
                      <div className='button-wrapper'>
                        <Button
                          size='small'
                          color='secondary'
                          variant='outlined'
                          onClick={handleBack}
                          disabled={activeStep === 0}
                        >
                          Back
                        </Button>
                        <Button size='small' variant='contained' onClick={handleNext} sx={{ ml: 4 }}>
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </>
                  </StepContent>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </CardContent>
    </Card >
  )
}

export default StepperVerticalWithNumbers
