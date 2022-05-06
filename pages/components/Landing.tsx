import React, { useState } from 'react'
import styles from "../../styles/Landing.module.scss";
import LandingBtn from './LandingBtn';
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useRouter } from 'next/router';
import AlertDialog from '../components/AlertDialog'
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { toggle } from '../../redux/menu/menuSlice';

// TODO: AlertDialog background color not working 
const StyledDialog = styled(AlertDialog)({
  '& .MuiDialog-paper': {
    backgroundColor: yellow[200]
  }
});

export default function Landing() {
  const router = useRouter();
  const dispatch = useAppDispatch()
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  const handleClick = () => {
    isAuthenticated ? router.push('/online-order') : setOpenDialog(true)
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openDialog, setOpenDialog] = useState(false)
  return (
    <section className={styles['section-landing']} id='landing'>
      <StyledDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        title="Account Required"
        message="You need an account in order to make an online order. Please Sign Up or Log In."
        successRedirect={null}
      />
      <h1>LIKE MAMMA USED TO MAKE...</h1>
      <div className={styles['buttons-wrapper']}>
        <LandingBtn label="Book Now" linkRef='/book-now' handler={null} />
        <LandingBtn
          label="Order Online*"
          handler={handleClick}
          linkRef={null}
        />
      </div>
      <div className={styles.businessInfo}>
        <div className={styles.openingHours}>
          <h2>Open from 11am to 11pm</h2>
          <h2>Tuesday closed</h2>
        </div>
        <div className={styles.accountRequired}>
          <h3>*Account required</h3>
        </div>
      </div>
      <div
        className={styles.downChevrons}
        onClick={() => dispatch(toggle({ section: 'popular-pizzas', open: false }))}
      >
        <Image
          src="/down-chevrons.png"
          alt="Landscape picture"
          width={30}
          height={30}
        />
      </div>
    </section>
  )
}
