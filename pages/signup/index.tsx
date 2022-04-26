import React, { ChangeEvent, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import styles from "../../styles/SignUp.module.scss";
import Footer from '../components/Footer';
import TextField from '@mui/material/TextField';
import DefaultBtn from '../components/DefaultBtn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlertDialog from '../components/AlertDialog'
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { setIsAuthenticated } from '../redux/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';

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
    '& .MuiFilledInput-root.Mui-error::after': {
        borderBottomColor: 'orange'
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
    }
});

export default function index() {
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
        // Password cannot be empty
        if (!form.password) {
            isValid = false
            setErrors(prevErrors => {
                return { ...prevErrors, password: 'This field is required.' }
            })
        } else {
            setErrors(prevErrors => {
                return { ...prevErrors, password: '' }
            })
        }
        if (!form.confirmPassword) {
            isValid = false
            setErrors(prevErrors => {
                return {
                    ...prevErrors,
                    confirmPassword: 'This field is required.'
                }
            })

        } else {
            setErrors(prevErrors => {
                return {
                    ...prevErrors,
                    confirmPassword: ''
                }
            })
        }
        if (form.password.length < 8) {
            isValid = false
            // Password must be at least 8 characters
            setErrors(prevErrors => {
                return {
                    ...prevErrors,
                    password: 'Passwords must be at least 8 characters.',
                }
            })
        } else {
            setErrors(prevErrors => {
                return {
                    ...prevErrors,
                    password: '',
                }
            })
        }
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
        }
        isValid && setOpenDialog(true)
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
        isFormValid() && dispatch(setIsAuthenticated(true))
    }
    return (
        <Provider store={store}>
            <div className={styles['container']}>
                <AlertDialog
                    openDialog={openDialog}
                    setOpenDialog={setOpenDialog}
                    title="Subscription Confirm"
                    message="You have successfully signed up."
                    successRedirect='/'
                />
                <Navbar />
                <div className={styles['card']}>
                    <AccountCircleIcon sx={{ color: yellow[200], fontSize: 50, marginBottom: '1rem' }} />
                    <div className={styles['input']}>
                        <TextInput
                            error={getInputError('username')}
                            id="username"
                            label="Username"
                            variant="filled"
                            value={form.username}
                            onChange={handleChange}
                            helperText={errors.username}
                        />
                    </div>
                    <div className={styles['input']}>
                        <TextInput
                            error={getInputError('password')}
                            id="password"
                            label="Password"
                            variant="filled"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            helperText={errors.password}

                        />
                    </div>
                    <div className={styles['input']}>
                        <TextInput
                            error={getInputError('confirmPassword')}
                            id="confirmPassword"
                            label="Confirm Password"
                            variant="filled"
                            type="password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            helperText={errors.confirmPassword}
                        />
                    </div>
                    <DefaultBtn
                        label="Sign Up"
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
