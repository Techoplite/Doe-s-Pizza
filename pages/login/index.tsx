import React, { ChangeEvent, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import styles from "../../styles/AuthForms.module.scss";
import Footer from '../components/Footer';
import TextField from '@mui/material/TextField';
import DefaultBtn from '../components/DefaultBtn';
import LoginIcon from '@mui/icons-material/Login';
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setIsAuthenticated } from '../../redux/auth/authSlice';
import AlertDialog from '../components/AlertDialog';
import { setNavBackground } from '../../redux/navBackground/navBackgroundSlice';
import { TextInput } from '../../styles/styled/constants';

// TODO: AlertDialog background color not working 
const StyledDialog = styled(AlertDialog)({
  '& .MuiDialog-paper': {
    backgroundColor: yellow[200]
  }
});
export default function LogIn() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })
  const handleScroll = () => {
    // Toggles the navbar background if page has been scrolled down from top
    window.scrollY === 0 ? dispatch(setNavBackground(false)) : dispatch(setNavBackground(true))
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openDialog, setOpenDialog] = useState(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const credentials = useAppSelector(state => state.auth.credentials)
  const initialState = {
    username: '',
    password: '',
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form, setForm] = useState(initialState)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.id;
    const value = event.target.value;
    setForm(values => ({ ...values, [name]: value }))
  }
  const handleSubmitForm = () => {
    if (
      isFormValid() &&
      form.username !== '' &&
      form.password !== '' &&
      form.username === credentials.username &&
      form.password === credentials.password) {
      const authData = {
        isAuthenticated: true,
        credentials
      }
      const data = {
        title: "Login Successful",
        message: "You have successfully logged in.",
        successRedirect: '/',
      }
      dispatch(setIsAuthenticated(authData)) && setDialogData(data)
    } else {
      const data = {
        title: "Account does not exists",
        message: "The credentials provided do not match any account. Please enter a valid username and password.",
        successRedirect: null,
      }
      isFormValid() && setDialogData(data)
    }
    isFormValid() && setOpenDialog(true)
  }
  const initialDialogData = {
    title: "",
    message: "",
    successRedirect: null,
  }
  const [dialogData, setDialogData] = useState(initialDialogData)
  const initialErrors = {
    username: '',
    password: '',
  }
  const [errors, setErrors] = useState(initialErrors)
  const isFormValid = () => {
    let isValid = true
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
    if (!form.password) {
      // Password cannot be empty
      isValid = false
      setErrors(prevErrors => {
        return { ...prevErrors, password: 'This field is required.' }
      })
    } else {
      setErrors(prevErrors => {
        return { ...prevErrors, password: '' }
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
  return (
    <Provider store={store}>
      <div className={styles['container']}>
        <StyledDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          title={dialogData.title}
          message={dialogData.message}
          successRedirect={dialogData.successRedirect}
        />
        <Navbar />
        <div className={styles['card']}>
          <div className={styles['page-title-wrapper']}>
            <LoginIcon sx={{ color: yellow[200], fontSize: 50}} />
            <h1 className={styles['page-title']}>Log In</h1>
          </div>
          <div className={styles['input']}>
            <TextInput
              id="username"
              label="Username"
              variant="filled"
              value={form.username}
              onChange={handleChange}
              error={getInputError('username')}
              helperText={errors.username}
            />
          </div>
          <div className={styles['input']}>
            <TextInput
              id="password"
              label="Password"
              variant="filled"
              type="password"
              value={form.password}
              onChange={handleChange}
              error={getInputError('password')}
              helperText={errors.password}
            />
          </div>
          <DefaultBtn
            label="Log In"
            className={styles['icon']}
            handler={handleSubmitForm}
          />
          <div className={styles['wrapper']}>
            <Link href="/signup" passHref >
              <a className={styles['a']}>
                Or go to sign up.
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
