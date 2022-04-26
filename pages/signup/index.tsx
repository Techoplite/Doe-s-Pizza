import React, { ChangeEvent, useState } from 'react'
import Navbar from '../components/Navbar'
import styles from "../../styles/SignUp.module.scss";
import Footer from '../components/Footer';
import TextField from '@mui/material/TextField';
import DefaultBtn from '../components/DefaultBtn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { store } from '../redux/store'
import { Provider } from 'react-redux'

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

export default function index() {
    const initialState = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [form, setForm] = useState(initialState)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.id;
        const value = event.target.value;
        setForm(values => ({ ...values, [name]: value }))
    }
    return (
        <Provider store={store}>
            <div className={styles['container']}>
                <Navbar />
                <div className={styles['card']}>
                    <AccountCircleIcon sx={{ color: yellow[200], fontSize: 50, marginBottom: '1rem' }} />
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
                            id="email"
                            label="Email"
                            variant="filled"
                            value={form.email}
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
                    <div className={styles['input']}>
                        <TextInput
                            id="confirmPassword"
                            label="Confirm Password"
                            variant="filled"
                            type="password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <DefaultBtn label="Log In" className={styles['icon']} />
                </div>
                <div className={styles['footer-wrapper']}>
                    <Footer />
                </div>
            </div>
        </Provider>
    )
}