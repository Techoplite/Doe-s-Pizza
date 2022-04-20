import * as React from 'react';
import Navbar from '../components/Navbar'
import styles from "../../styles/BookNow.module.scss";
import Footer from '../components/Footer';
import TextField from '@mui/material/TextField';
import DefaultBtn from '../components/DefaultBtn';
import BookIcon from '@mui/icons-material/Book';
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

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
        '& .MuiFilledInput-underline': {
            borderBottomColor: yellow[200]
        }
    },
    '& .MuiFilledInput-root:before': {
        borderBottomColor: "white",

    },
    '& .MuiFilledInput-root:after': {
        borderBottomColor: "white",

    },
    '& label': {
        color: 'white',
        "&.Mui-focused": {
            color: 'white'
        },

    },
    '& .MuiOutlinedInput-root': {
        color: yellow[200]
    }
});

export default function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState<Date | null>(new Date());
    return (
        <Provider store={store}>
            <div className={styles['container']}>
                <Navbar />
                <div className={styles['card']}>
                    <BookIcon sx={{ color: yellow[200], fontSize: 50, marginBottom: '1rem' }} />
                    <div className={styles['input']}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                label="DateTimePicker"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </LocalizationProvider>

                    </div>
                    <div className={styles['input']}>
                        <TextInput
                            id="party-size"
                            label="Party Size"
                            variant="filled"
                            type="number"
                        />
                    </div>
                    <div className={styles['input']}>
                        <TextInput
                            id="last-name"
                            label="Last Name"
                            variant="filled"
                            type="last-name"
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
