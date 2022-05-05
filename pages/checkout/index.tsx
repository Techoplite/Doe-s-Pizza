import React, { useState, ChangeEvent, useEffect } from 'react'
import Navbar from '../components/Navbar'
import styles from "../../styles/Checkout.module.scss";
import Footer from '../components/Footer';
import DefaultBtn from '../components/DefaultBtn';
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import Link from 'next/link'
import OrderSummary from '../components/OrderSummary';
import AlertDialog from '../components/AlertDialog'
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setDetails } from '../../redux/order/orderSlice';
import { SelectChangeEvent } from '@mui/material/Select';
import { addOrder } from '../../redux/yourOrders/yourOrdersSlice';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const StyledDialog = styled(AlertDialog)({
  '& .MuiDialog-paper': {
    backgroundColor: yellow[200]
  }
});

export default function CheckOut() {
  const dispatch = useAppDispatch()
  const toggleDelivery = () => {
    let details = JSON.parse(JSON.stringify(order.details))
    details.isDelivery = !details.isDelivery
    dispatch(setDetails(details))
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.id;
    const value = event.target.value;
    let details = JSON.parse(JSON.stringify(order.details))

    details[name] = value
    dispatch(setDetails(details))
  }
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    let details = JSON.parse(JSON.stringify(order.details))
    details.time = event.target.value
    dispatch(setDetails(details))
  }

  const [openDialog, setOpenDialog] = useState(false)
  const order = useAppSelector(state => state.order)
  const getOrderInfo = () => {
    return order.details.isDelivery ?
      `Your food will be with you by ${order.details.time}` :
      `Your food will be ready to be picked up by ${order.details.time}`
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const initialErrors = {
    firstName: '',
    lastName: '',
    address: '',
    postcode: '',
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [errors, setErrors] = useState(initialErrors)
  const isFormValid = () => {
    let isValid = true
    if (!order.details.lastName) {
      isValid = false
      // Last Name cannot be empty
      setErrors(prevErrors => {
        return { ...prevErrors, lastName: 'This field is required.' }
      })
    } else {
      setErrors((prevErrors => {
        return { ...prevErrors, lastName: '' }
      }))
    }
    if (!order.details.address && order.details.isDelivery) {
      isValid = false
      // Address cannot be empty if delivery
      setErrors(prevErrors => {
        return { ...prevErrors, address: 'This field is required.' }
      })
    } else {
      setErrors((prevErrors => {
        return { ...prevErrors, address: '' }
      }))
    }
    if (!order.details.postcode && order.details.isDelivery) {
      isValid = false
      // Postcode cannot be empty if delivery
      setErrors(prevErrors => {
        return { ...prevErrors, postcode: 'This field is required.' }
      })
    } else {
      setErrors((prevErrors => {
        return { ...prevErrors, postcode: '' }
      }))
    }
    return isValid
  }
  const items = useAppSelector(state => state.order.items)
  const handleSubmitForm = () => {
    if (isFormValid()) {
      setOpenDialog(true)
      dispatch(addOrder(order))
    }
  }
  const [deliveryFee, setDeliveryFee] = useState(0)
  useEffect(() => {
    setDeliveryFee(order.details.isDelivery ? 2.50 : 0.00)
  }, [order.details.isDelivery])

  const serviceCharge = 0.50
  const [subtotal, setSubtotal] = useState(0)
  useEffect(() => {
    let subtotal = 0
    items.map(item => {
      subtotal += item.price * item.quantity
    })
    setSubtotal(subtotal)
  }, [items])
  useEffect(() => {
    let details = JSON.parse(JSON.stringify(order.details))
    details.total = subtotal + deliveryFee + serviceCharge
    dispatch(setDetails(details))
  }, [subtotal, deliveryFee])
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
          <div className={styles['page-title-wrapper']}>
            <ShoppingCartCheckoutIcon sx={{ color: yellow[200], fontSize: 50 }} />
            <h1 className={styles['page-title']}>Checkout</h1>
          </div>
          <OrderSummary
            errors={errors}
            toggleDelivery={toggleDelivery}
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}
            total={order.details.total}
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            serviceCharge={serviceCharge}
          />
          <Link href="/checkout" passHref >
            <div className={styles['btn']}>
              <DefaultBtn
                label="Confirm Order"
                handler={handleSubmitForm}
              />
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
