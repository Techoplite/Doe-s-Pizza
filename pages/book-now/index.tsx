import React, { ChangeEvent, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import styles from "../../styles/BookNow.module.scss";
import Footer from '../components/Footer';
import TextField from '@mui/material/TextField';
import DefaultBtn from '../components/DefaultBtn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import { useAppDispatch } from '../../redux/hooks';
import { addBooking } from '../../redux/booking/bookingSlice';
import AlertDialog from '../components/AlertDialog';
import dayjs from 'dayjs';


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

  }
});

// TODO: AlertDialog background color not working 
const StyledDialog = styled(AlertDialog)({
  '& .MuiDialog-paper': {
    backgroundColor: yellow[200]
  }
});


export default function BookNow() {
  const datetimeDefault = dayjs().add(1, 'hour').format('YYYY-MM-DDThh:mm')
  // TODO: datetime to be dynamic
  const initialState = {
    dateTime: datetimeDefault,
    partySize: 0,
    firstName: '',
    lastName: '',
    contactNumber: '',
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form, setForm] = useState(initialState)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openDialog, setOpenDialog] = useState(false)
  const initialErrors = {
    dateTime: '',
    partySize: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [errors, setErrors] = useState(initialErrors)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.id;
    const value = event.target.value;
    setForm(values => ({ ...values, [name]: value }))
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch()
  const isFormValid = () => {
    let isValid = true
    if (!form.dateTime) {
      isValid = false
      // Username cannot be empty
      setErrors(prevErrors => {
        return { ...prevErrors, dateTime: 'This field is required.' }
      })
    } else {
      setErrors((prevErrors => {
        return { ...prevErrors, dateTime: '' }
      }))
    }
    if (!form.partySize) {
      // Password cannot be empty
      isValid = false
      setErrors(prevErrors => {
        return { ...prevErrors, partySize: 'This field is required.' }
      })
    } else {
      setErrors(prevErrors => {
        return { ...prevErrors, partySize: '' }
      })
    }
    if (!form.firstName) {
      isValid = false
      setErrors(prevErrors => {
        return {
          ...prevErrors,
          firstName: 'This field is required.'
        }
      })

    } else {
      setErrors(prevErrors => {
        return {
          ...prevErrors,
          firstName: ''
        }
      })
    }
    if (!form.lastName) {
      isValid = false
      setErrors(prevErrors => {
        return {
          ...prevErrors,
          lastName: 'This field is required.'
        }
      })

    } else {
      setErrors(prevErrors => {
        return {
          ...prevErrors,
          lastName: ''
        }
      })
    }
    return isValid
  }
  const getInputError = (inputId: string) => {
    for (const [key, value] of Object.entries(errors)) {
      if (key === inputId && value !== '') {
        return true
      }
    }
  }
  const handleSubmitForm = () => {
    isFormValid() && dispatch(addBooking(form)) && setOpenDialog(true)

  }

  useEffect(() => {
    // Force a default value if user clears the field
    !form.dateTime && setForm(values => ({ ...values, dateTime: datetimeDefault }))
  }, [form.dateTime, datetimeDefault])

  return (
    <Provider store={store}>
      <div className={styles['container']}>
        <StyledDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          title="Booking Successful"
          message={`You have successfully booked for ${form.partySize} people on the ${form.dateTime}`}
          successRedirect='/'
        />
        <Navbar />
        <div className={styles['card']}>
          <div className={styles['page-title-wrapper']}>
            <MenuBookIcon sx={{ color: yellow[200], fontSize: 50 }} />
            <h1 className={styles['page-title']}>Book Table</h1>
          </div>
          <div className={styles['input']}>
            <TextInput
              id="dateTime"
              label="Date and Time"
              variant="filled"
              type='datetime-local'
              value={form.dateTime}
              onChange={handleChange}
              helperText={errors.dateTime}
              error={getInputError('dateTime')}
            />
          </div>
          <div className={styles['input']}>
            <TextInput
              id="partySize"
              label="Party Size"
              variant="filled"
              type="number"
              value={form.partySize}
              onChange={handleChange}
              helperText={errors.partySize}
              error={getInputError('partySize')}
            />
          </div>
          <div className={styles['input']}>
            <TextInput
              id="firstName"
              label="First Name"
              variant="filled"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              helperText={errors.firstName}
              error={getInputError('firstName')}
            />
          </div>
          <div className={styles['input']}>
            <TextInput
              id="lastName"
              label="Last Name"
              variant="filled"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              helperText={errors.lastName}
              error={getInputError('lastName')}
            />
          </div>
          <div className={styles['input']}>
            <TextInput
              id="contactNumber"
              label="Contact Number"
              variant="filled"
              type="text"
              value={form.contactNumber}
              onChange={handleChange}
              helperText={errors.contactNumber}
              error={getInputError('contactNumber')}
            />
          </div>
          <DefaultBtn
            label="Book"
            className={styles['icon']}
            handler={handleSubmitForm}
          />
        </div>
        <div className={styles['footer-wrapper']}>
          <Footer />
        </div>
      </div>
    </Provider>
  )
}
