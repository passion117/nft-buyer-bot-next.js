// ** React Imports
import { Fragment, MouseEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import MenuItem from '@mui/material/MenuItem'
import StepLabel from '@mui/material/StepLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'

// ** Third Party Imports
import * as yup from 'yup'
import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'

interface State {
  password: string
  password2: string
  showPassword: boolean
  showPassword2: boolean
}

const steps = [
  {
    title: 'Account Details',
    subtitle: 'Enter your Account Details'
  },
  {
    title: 'Personal Info',
    subtitle: 'Setup Information'
  },
  {
    title: 'Social Links',
    subtitle: 'Add Social Links'
  }
]

const defaultAccountValues = {
  email: '',
  username: '',
  password: '',
  'confirm-password': ''
}
const defaultPersonalValues = {
  country: '',
  language: [],
  'last-name': '',
  'first-name': ''
}
const defaultSocialValues = {
  google: '',
  twitter: '',
  facebook: '',
  linkedIn: ''
}

const accountSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  'confirm-password': yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})
const personalSchema = yup.object().shape({
  country: yup.string().required(),
  'last-name': yup.string().required(),
  'first-name': yup.string().required(),
  language: yup.array().min(1).required()
})
const socialSchema = yup.object().shape({
  google: yup.string().required(),
  twitter: yup.string().required(),
  facebook: yup.string().required(),
  linkedIn: yup.string().required()
})

const StepperLinearWithValidation = () => {
  // ** States
  const [activeStep, setActiveStep] = useState<number>(0)
  const [state, setState] = useState<State>({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  // ** Hooks
  const {
    reset: accountReset,
    control: accountControl,
    handleSubmit: handleAccountSubmit,
    formState: { errors: accountErrors }
  } = useForm({
    defaultValues: defaultAccountValues,
    resolver: yupResolver(accountSchema)
  })
  const {
    reset: personalReset,
    control: personalControl,
    handleSubmit: handlePersonalSubmit,
    formState: { errors: personalErrors }
  } = useForm({
    defaultValues: defaultPersonalValues,
    resolver: yupResolver(personalSchema)
  })
  const {
    reset: socialReset,
    control: socialControl,
    handleSubmit: handleSocialSubmit,
    formState: { errors: socialErrors }
  } = useForm({
    defaultValues: defaultSocialValues,
    resolver: yupResolver(socialSchema)
  })

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  const handleReset = () => {
    setActiveStep(0)
    socialReset({ google: '', twitter: '', facebook: '', linkedIn: '' })
    accountReset({ email: '', username: '', password: '', 'confirm-password': '' })
    personalReset({ country: '', language: [], 'last-name': '', 'first-name': '' })
  }
  const onSubmit = () => {
    setActiveStep(activeStep + 1)
    if (activeStep === steps.length - 1) {
      toast.success('Form Submitted')
    }
  }

  // Handle Password
  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword })
  }
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  // Handle Confirm Password
  const handleClickShowConfirmPassword = () => {
    setState({ ...state, showPassword2: !state.showPassword2 })
  }
  const handleMouseDownConfirmPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <div></div>
        )
      case 1:
        return (
          <div></div>
        )
      case 2:
        return (
          <div></div>
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
            <Button size='large' variant='contained' onClick={handleReset}>
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
          <Stepper activeStep={activeStep}>
            {steps.map((step, index) => {
              const labelProps: {
                error?: boolean
              } = {}
              if (index === activeStep) {
                labelProps.error = false
                if (
                  (accountErrors.email ||
                    accountErrors.username ||
                    accountErrors.password ||
                    accountErrors['confirm-password']) &&
                  activeStep === 0
                ) {
                  labelProps.error = true
                } else if (
                  (personalErrors.country ||
                    personalErrors.language ||
                    personalErrors['last-name'] ||
                    personalErrors['first-name']) &&
                  activeStep === 1
                ) {
                  labelProps.error = true
                } else if (
                  (socialErrors.google || socialErrors.twitter || socialErrors.facebook || socialErrors.linkedIn) &&
                  activeStep === 2
                ) {
                  labelProps.error = true
                } else {
                  labelProps.error = false
                }
              }

              return (
                <Step key={index}>
                  <StepLabel {...labelProps} StepIconComponent={StepperCustomDot}>
                    <div className='step-label'>
                      <Typography className='step-number'>0{index + 1}</Typography>
                      <div>
                        <Typography className='step-title'>{step.title}</Typography>
                        <Typography className='step-subtitle'>{step.subtitle}</Typography>
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </CardContent>

      <Divider sx={{ m: 0 }} />

      <CardContent>{renderContent()}</CardContent>
    </Card>
  )
}

export default StepperLinearWithValidation
