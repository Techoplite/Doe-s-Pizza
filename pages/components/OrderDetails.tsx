import React, { ChangeEvent } from 'react'
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import styles from "../../styles/AuthForms.module.scss";
import Switch, { SwitchProps } from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setDetails } from '../redux/order/orderSlice';



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


// TODO: datetime to be dynamic

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
  return (
    <>
      <div className={styles['wrapper']}>
        <Typography color={'white'}>Pick Up</Typography>
        <Switch
          inputProps={{ 'aria-label': 'ant design' }}
          checked={orderDetails.isDelivery}
          onChange={toggleDelivery}
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
        <TextInput
          id="dateTime"
          label="Date and Time"
          variant="filled"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          onChange={handleChange}
        />
      </div>
    </>
  )
}
