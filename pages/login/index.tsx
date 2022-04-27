import React, { ChangeEvent, useState } from 'react'
import Navbar from '../components/Navbar'
import styles from "../../styles/Login.module.scss";
import Footer from '../components/Footer';
import TextField from '@mui/material/TextField';
import DefaultBtn from '../components/DefaultBtn';
import LoginIcon from '@mui/icons-material/Login';
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setIsAuthenticated } from '../redux/auth/authSlice';
import AlertDialog from '../components/AlertDialog';

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
export default function LogIn() {
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
      form.username === credentials.username &&
      form.password === credentials.password) {
      const authData = {
        isAuthenticated: true,
        credentials
      }
      dispatch(setIsAuthenticated(authData)) && setOpenDialog(true)
    }
  }
  return (
    <Provider store={store}>
      <div className={styles['container']}>
        <StyledDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          title="Login Successful"
          message="You have successfully logged in."
          successRedirect='/'
        />
        <Navbar />
        <div className={styles['card']}>
          <LoginIcon sx={{ color: yellow[200], fontSize: 50, marginBottom: '1rem' }} />
          <div className={styles['input']}>
            <TextInput
              id="username"
              label="Username"
              variant="filled"
              value={form.username}
              onChange={handleChange}
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
