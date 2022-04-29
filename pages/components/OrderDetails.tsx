import React, { ChangeEvent } from 'react'
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import styles from "../../styles/AuthForms.module.scss";
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setDetails } from '../../redux/order/orderSlice';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { times } from '../../utils/constants';

const CustomSelect = styled(Select)({})

const TextInput = styled(TextField)({
  '& .MuiFilledInput-root': {
    color: yellow[200],
    overflow: 'hidden',
    backgroundColor: '#935e5e4d',
    '&:hover': {
      backgroundColor: '#935e5e4d',
    },
    '&.Mui-focused': {
      backgroundColor: '#935e5e4d',
      borderColor: yellow[200],
    },
    "& .MuiFilledInput-underline": {
      borderBottomColor: yellow[200]
    }
  },
  '& .MuiFilledInput-root:before': {
    borderBottomColor: "white",

  },
  '& .MuiFilledInput-root:after': {
    borderBottomColor: "white",

  },
  "& label": {
    color: 'white',
    "&.Mui-focused": {
      color: 'white'
    },
    "&.Mui-error": {
      color: 'orange'
    }
  },
  '& .MuiFormHelperText-root.Mui-error': {
    color: 'orange'
  },

  // TODO: setting the correct padding here will prevent inputs from bumping layout, but custom setting not working
  '& .MuiFormControl-root': {
    '&.MuiTextField-root': {
      minHeight: '700px'
    }
  },
});


// TODO: datetime default to be dynamic

// TODO: switch to be yellow when 'on'

export default function OrderDetails() {
  const orderDetails = useAppSelector(state => state.order.details)
  const dispatch = useAppDispatch()
  const toggleDelivery = () => {
    const details = {
      ...orderDetails,
      isDelivery: !orderDetails.isDelivery
    }
    dispatch(setDetails(details))
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.id;
    const value = event.target.value;
    const details = {
      ...orderDetails,
      [name]: value
    }
    dispatch(setDetails(details))
  }
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    const details = {
      ...orderDetails,
      time: value
    }
    dispatch(setDetails(details))
  }

  return (
    <>
      <div className={styles['wrapper']}>
        <Typography color={'white'}>Pick Up</Typography>
        <Switch
          inputProps={{ 'aria-label': 'ant design' }}
          checked={orderDetails.isDelivery}
          onChange={toggleDelivery}
          color="default"
        />
        <Typography color={'white'}>Delivery</Typography>
      </div>
      <div className={styles['input']}>
        <TextInput
          id="lastName"
          label="Last Name"
          variant="filled"
          onChange={handleChange}
        />
      </div>
      <div className={styles['input']}>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <CustomSelect
            labelId="Time"
            id="time"
            value={orderDetails.time}
            label="Age"
            onChange={handleSelectChange}
          >
            {times.map(time => {
              return <MenuItem value={time} key={time}>{time}</MenuItem>
            })}
          </CustomSelect>
        </FormControl>
      </div>
    </>
  )
}
