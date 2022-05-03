import React, { useEffect } from 'react'
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import styles from "../../styles/AuthForms.module.scss";
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { times } from '../../utils/constants';
import InputLabel from '@mui/material/InputLabel';
import { OrderProps } from '../../types/order';

const CustomFormControl = styled(FormControl)({
  '& .MuiFormControl-root': {
    margin: '1rem 0',
  },
  '#time': {
    background: '#935e5e4d'
  },
  '& .MuiFormLabel-root': {
    color: 'white'
  },
  '& MuiSelect-root::before': {
    borderBottomColor: "white",
  },
  '& MuiSelect-root:after': {
    borderBottomColor: "white",
  },
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '& .MuiMenu-paper': {
    height: '3rem'
  }
})

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

export default function OrderDetails(props: { data: OrderProps }) {
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: '10rem'
      }
    }
  };
  return (
    <>
      {props.data && props.data.form &&
        <>
          <div className={styles['wrapper']}>
            <Typography color={'white'}>Pick Up</Typography>

            <Switch
              inputProps={{ 'aria-label': 'ant design' }}
              checked={props.data.form.isDelivery}
              onChange={props.data.toggleDelivery}
              color="default"
            />
            <Typography color={'white'}>Delivery</Typography>
          </div>
          <div className={styles['input']}>
            <TextInput
              id="firstName"
              label="First  Name"
              variant="filled"
              fullWidth={true}
              onChange={props.data.handleChange}
              value={props.data.form.firstName}
              helperText={props.data.errors.firstName}
            />
          </div>
          <div className={styles['input']}>
            <TextInput
              id="lastName"
              label="Last Name"
              variant="filled"
              fullWidth={true}
              onChange={props.data.handleChange}
              value={props.data.form.lastName}
              helperText={props.data.errors.lastName}
            />
          </div>
          {props.data.form.isDelivery &&
            <div className={styles['input']}>
              <TextInput
                id="address"
                label="Address"
                variant="filled"
                fullWidth={true}
                onChange={props.data.handleChange}
                value={props.data.form.address}
                helperText={props.data.errors.address}
              />
            </div>
          }
          {props.data.form.isDelivery &&
            <div className={styles['input']}>
              <TextInput
                id="postcode"
                label="Post Code"
                variant="filled"
                fullWidth={true}
                onChange={props.data.handleChange}
                value={props.data.form.postcode}
                helperText={props.data.errors.postcode}
              />
            </div>
          }
          <div className={styles['input']}>
            <CustomFormControl variant="filled" fullWidth={true}>
              <InputLabel id="time">Time</InputLabel>
              <Select
                MenuProps={MenuProps}
                labelId="Time"
                id="time"
                value={props.data.form.time}
                label="Age"
                onChange={props.data.handleSelectChange}
              >
                {times.map(time => {
                  return <MenuItem value={time} key={time}>{time}</MenuItem>
                })}
              </Select>
            </CustomFormControl>
          </div>
        </>
      }
    </>
  )
}
