import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../../styles/OnlineOrder.module.scss";
import Footer from '../components/Footer';
import TextField from '@mui/material/TextField';
import DefaultBtn from '../components/DefaultBtn';
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import OrderItem from '../components/OrderItem';


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

export default function LogIn() {
    return (
        <Provider store={store}>
            <div className={styles['container']}>
                <Navbar />
                <div className={styles['main-content']}>
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                </div>
                <div className={styles['btn']}>
                    <DefaultBtn label="Checkout" />
                </div>
                <div className={styles['footer-wrapper']}>
                    <Footer />
                </div>
            </div>
        </Provider>
    )
}
