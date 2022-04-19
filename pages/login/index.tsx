import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../../styles/LogIn.module.scss";
import Footer from '../components/Footer';
import TextField from '@mui/material/TextField';
import DefaultBtn from '../components/defaultBtn';
import LoginIcon from '@mui/icons-material/Login';
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';


const TextInput = styled(TextField)({
  '& .MuiFilledInput-root': {
    color: yellow[200],
    overflow: 'hidden',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
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

export default function LogIn() {
  return (
    <div className={styles['container']}>
      <Navbar />
      <div className={styles['card']}>
        <LoginIcon sx={{ color: yellow[200], fontSize: 50 }} />
        <div className={styles['input']}>
          <TextInput
            id="email"
            label="Email"
            variant="filled"
          />
        </div>
        <div className={styles['input']}>
          <TextInput
            id="password"
            label="Password"
            variant="filled"
            type="password"
          />
        </div>
        <DefaultBtn label="Log In" className={styles['icon']} />
      </div>
      <div className={styles['footer-wrapper']}>
        <Footer />
      </div>
    </div>
  )
}
