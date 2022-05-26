import React, { ChangeEvent, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import styles from "../../styles/AuthForms.module.scss";
import Footer from '../components/Footer';
import DefaultBtn from '../components/DefaultBtn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlertDialog from '../components/AlertDialog'
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import { setIsAuthenticated } from '../../redux/auth/authSlice';
import { useAppDispatch } from '../../redux/hooks';
import Link from 'next/link'
import { TextInput } from '../../styles/styled/constants';
import { setNavBackground } from '../../redux/navBackground/navBackgroundSlice';


// TODO: AlertDialog background color not working 
const StyledDialog = styled(AlertDialog)({
  '& .MuiDialog-paper': {
    backgroundColor: yellow[200]
  }
});

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })
  const handleScroll = () => {
    // Toggles the navbar background if page has been scrolled down from top
    window.scrollY === 0 ? dispatch(setNavBackground(false)) : dispatch(setNavBackground(true))
  }
  const initialState = {
    username: '',
    password: '',
    confirmPassword: '',
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form, setForm] = useState(initialState)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openDialog, setOpenDialog] = useState(false)
  const initialErrors = {
    username: '',
    password: '',
    confirmPassword: ''
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
    if (form.password !== form.confirmPassword) {
      isValid = false
      // Passwords must be same
      setErrors(prevErrors => {
        return {
          ...prevErrors,
          password: 'Passwords must match.',
          confirmPassword: 'Passwords must match.'
        }
      })
    } else {
      setErrors((prevErrors => {
        return { ...prevErrors, password: '', confirmPassword: '' }
      }))
    }
    if (!form.username) {
      isValid = false
      // Username cannot be empty
      setErrors(prevErrors => {
        return { ...prevErrors, username: 'This field is required.' }
      })
    } else {
      setErrors((prevErrors => {
        return { ...prevErrors, username: '' }
      }))
    }
    if (!form.confirmPassword) {
      isValid = false
      setErrors(prevErrors => {
        return {
          ...prevErrors,
          password: '',
          confirmPassword: 'This field is required.'
        }
      })
    } else {
      setErrors(prevErrors => {
        if (!prevErrors.confirmPassword) {
          return {
            ...prevErrors,
            confirmPassword: ''
          }
        } else {
          return prevErrors
        }
      })
    }
    if (form.password.length < 8) {
      isValid = false
      // Password must be at least 8 characters
      setErrors(prevErrors => {
        return {
          ...prevErrors,
          password: 'Must be at least 8 characters.',
        }
      })
    } else {
      setErrors(prevErrors => {
        if (prevErrors && !prevErrors.password) {
          return {
            ...prevErrors,
            password: '',
          }
        } else {
          return prevErrors
        }
      })
    }
    return isValid
  }
  const getInputError = (inputId: string) => {
    if (errors) {
      for (const [key, value] of Object.entries(errors)) {
        if (key === inputId && value !== '') {
         return true
       }
     }
    }
  }
  const handleSubmitForm = () => {
    const authData = {
      isAuthenticated: true,
      credentials: {
        username: form.username,
        password: form.password,
      }
    }
    isFormValid() &&
      dispatch(setIsAuthenticated(authData)) &&
      setOpenDialog(true)

  }
  return (
    <Provider store={store}>
      <div className={styles['container']}>
        <StyledDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          title="Sign Up Successful"
          message="You have successfully signed up."
          successRedirect='/'
        />
        <Navbar />
        <div className={styles['card']}>
          <div className={styles['page-title-wrapper']}>
            <AccountCircleIcon sx={{ color: yellow[200], fontSize: 50 }} />
            <h1 className={styles['page-title']}>Sign Up</h1>
          </div>
          <div className={styles['input']}>
            <TextInput
              data-test='username_input'
              error={getInputError('username')}
              id="username"
              label="Username"
              variant="filled"
              value={form.username}
              onChange={handleChange}
              helperText={errors && errors.username}
            />
          </div>
          <div className={styles['input']}>
            <TextInput
              data-test='password_input'
              error={getInputError('password')}
              id="password"
              label="Password"
              variant="filled"
              type="password"
              value={form.password}
              onChange={handleChange}
              helperText={errors && errors.password}

            />
          </div>
          <div className={styles['input']}>
            <TextInput
              data-test='confirm-password_input'
              error={getInputError('confirmPassword')}
              id="confirmPassword"
              label="Confirm Password"
              variant="filled"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              helperText={errors && errors.confirmPassword}
            />
          </div>
          <DefaultBtn
            dataTest='form_sign-up_btn'
            label="Sign Up"
            className={styles['icon']}
            handler={handleSubmitForm}
          />
          <div className={styles['wrapper']}>
            <Link href="/login" passHref >
              <a className={styles['a']}>
                Or go to login.
              </a>
            </Link>
          </div>
        </div>
        <div className={styles['footer-wrapper']}>
          <Footer />
        </div>
      </div>
    </Provider>
  )
}
