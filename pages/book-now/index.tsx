import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../../styles/BookNow.module.scss";
import Footer from '../components/Footer';
import TextField from '@mui/material/TextField';
import DefaultBtn from '../components/DefaultBtn';
import LoginIcon from '@mui/icons-material/Login';
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

// TODO: datetime to be dynamic

export default function LogIn() {
    return (
        <Provider store={store}>
            <div className={styles['container']}>
                <Navbar />
                <div className={styles['card']}>
                    <LoginIcon sx={{ color: yellow[200], fontSize: 50, marginBottom: '1rem' }} />
                    <div className={styles['input']}>
                        <TextInput
                            id="date-time"
                            label="Date and Time"
                            variant="filled"
                            type='datetime-local'
                            defaultValue="2017-05-24T10:30"
                        />
                    </div>
                    <div className={styles['input']}>
                        <TextInput
                            id="party-size"
                            label="Party Size"
                            variant="filled"
                            type="number"
                            defaultValue="2"
                        />
                    </div>
                    <div className={styles['input']}>
                        <TextInput
                            id="last-name"
                            label="Last Name"
                            variant="filled"
                            type="text"
                        />
                    </div>
                    <DefaultBtn label="Book" className={styles['icon']} />
                </div>
                <div className={styles['footer-wrapper']}>
                    <Footer />
                </div>
            </div>
        </Provider>
    )
}
