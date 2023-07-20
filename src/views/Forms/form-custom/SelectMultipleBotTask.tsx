// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select, { SelectChangeEvent } from '@mui/material/Select'

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
  'Bloca 1',
  'Bloca 2',
  'Bloca 3',
  'Bloca 4',
  'Bloca 5'
]

const SelectMultipleBotTask = () => {
  // ** State
  const [personName, setPersonName] = useState<string[]>([])
  const [personNameNative, setPersonNameNative] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setPersonName(event.target.value as string[])
  }

  const handleChangeMultipleNative = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { options } = event.target
    const value: string[] = []
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }
    setPersonNameNative(value)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id='demo-multiple-chip-label'>Select Multiple Wallets</InputLabel>
      <Select
        multiple
        label='Select Multiple Wallets'
        value={personName}
        MenuProps={MenuProps}
        id='demo-multiple-chip'
        onChange={handleChange}
        labelId='demo-multiple-chip-label'
        renderValue={selected => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {(selected as unknown as string[]).map(value => (
              <Chip key={value} label={value} sx={{ m: 0.75 }} />
            ))}
          </Box>
        )}
      >
        {names.map(name => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectMultipleBotTask
