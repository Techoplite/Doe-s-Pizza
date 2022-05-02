import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import styles from "../../styles/Checkout.module.scss";
import Footer from '../components/Footer';
import DefaultBtn from '../components/DefaultBtn';
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import Link from 'next/link'
import OrderSummary from '../components/OrderSummary';
import { useAppSelector } from '../../redux/hooks';
import AlertDialog from '../components/AlertDialog'
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const StyledDialog = styled(AlertDialog)({
  '& .MuiDialog-paper': {
    backgroundColor: yellow[200]
  }
});



export default function CheckOut() {
  const [openDialog, setOpenDialog] = useState(false)
  const orderDetails = useAppSelector(state => state.order.details)
  const getOrderInfo = () => {
    return orderDetails.isDelivery ?
      `Your food will be with you by ${orderDetails.time}` :
      `Your food will be ready to be picked up by ${orderDetails.time}`
  }
  return (
    <Provider store={store}>
      <div className={styles['container']}>
        <StyledDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          title="Order Placed"
          message={`Yor order has been submitted. ${getOrderInfo()}`}
          successRedirect='/'
        />
        <Navbar />
        <div className={styles['main-content']}>
          <OrderSummary />
          <Link href="/checkout" passHref >
            <div className={styles['btn']}>
              <DefaultBtn label="Confirm" handler={() => setOpenDialog(true)} />
            </div>
          </Link>
        </div>
        <div className={styles['footer-wrapper']}>
          <Footer />
        </div>
      </div>
    </Provider>
  )
}
