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
import { makeStyles } from '@mui/styles';
import { useAppSelector } from '../../redux/hooks';
import { TextInput } from '../../styles/styled/constants';

const CustomFormControl = styled(FormControl)({
  '& .MuiFormControl-root': {
    margin: '1rem 0',
  },
  '#time': {
    background: '#935e5e4d',
    color: 'white'
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



// TODO: datetime default to be dynamic

// TODO: switch to be yellow when 'on'

const useStyles = makeStyles({
  select: {
    '&:before': {
      borderColor: 'white',
      color: 'white'
    },
    '&:after': {
      borderColor: 'white',
      color: 'yellow'
    },
    '&:not(.Mui-disabled):hover::before': {
      borderColor: 'white',
    },
    '&MuiSelect-nativeInput': {
      color: 'white',
    },
  },
})

export default function OrderDetails(props: { data: OrderProps }) {
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: '10rem'
      }
    }
  };
  const details = useAppSelector(state => state.order.details)
  const classes = useStyles()
  return (
    <>
      {props.data && props.data.errors &&
        <>
          <div className={styles['wrapper']}>
            <Typography color={'white'}>Pick Up</Typography>
            <Switch
              inputProps={{ 'aria-label': 'ant design' }}
              checked={details.isDelivery}
              onChange={props.data.toggleDelivery}
              color="default"
            />
            <Typography color={'white'}>Delivery</Typography>
          </div>
          <div className={styles['input']}>
            <TextInput
              id="lastName"
              label="Last Name"
              variant="filled"
              fullWidth={true}
              onChange={props.data.handleChange}
              value={details.lastName}
              helperText={props.data.errors.lastName}
              error={props.data.errors.lastName && true}
            />
          </div>
          {details.isDelivery &&
            <div className={styles['input']}>
              <TextInput
                id="address"
                label="Address"
                variant="filled"
                fullWidth={true}
                onChange={props.data.handleChange}
                value={details.address}
                helperText={props.data.errors.address}
                error={props.data.errors.address && true}

              />
            </div>
          }
          {details.isDelivery &&
            <div className={styles['input']}>
              <TextInput
                id="postcode"
                label="Post Code"
                variant="filled"
                fullWidth={true}
                onChange={props.data.handleChange}
                value={details.postcode}
                helperText={props.data.errors.postcode}
                error={props.data.errors.postcode && true}

              />
            </div>
          }
          <div className={styles['input']}>
            <CustomFormControl variant="filled" fullWidth={true}>
              <InputLabel id="time">Time</InputLabel>
              <Select
                className={classes.select}
                MenuProps={MenuProps}
                labelId="Time"
                id="time"
                value={details.time}
                label="Age"
                onChange={props.data.handleSelectChange}
                error={props.data.errors.time && true}
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
