import React, { useState, ChangeEvent } from 'react'
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

const StyledDialog = styled(AlertDialog)({
  '& .MuiDialog-paper': {
    backgroundColor: yellow[200]
  }
});



export default function CheckOut() {
  const dispatch = useAppDispatch()
  const toggleDelivery = () => {
    setForm(values => ({ ...values, isDelivery: !values.isDelivery }))
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.id;
    const value = event.target.value;
    setForm(values => ({ ...values, [name]: value }))
  }
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setForm(prevState => ({ ...prevState, time: event.target.value }))
  }

  const [openDialog, setOpenDialog] = useState(false)
  const order = useAppSelector(state => state.order)
  const getOrderInfo = () => {
    return order.details.isDelivery ?
      `Your food will be with you by ${order.details.time}` :
      `Your food will be ready to be picked up by ${order.details.time}`
  }
  const initialState = {
    firstName: '',
    lastName: '',
    address: '',
    postcode: '',
    isDelivery: false,
    date: new Date().getDate().toString(),
    time: '',
    total: 0
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form, setForm] = useState(initialState)
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
    if (!form.lastName) {
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
    if (!form.address && form.isDelivery) {
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
    if (!form.postcode && form.isDelivery) {
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
      form.total = getTotal()
      dispatch(setDetails(form))
      setOpenDialog(true)
      dispatch(addOrder(order))
    }
  }
  const getSubtotal = () => {
    let subtotal = 0
    items.map(item => {
      subtotal += item.price * item.quantity
    })
    return subtotal
  }
  
  const deliveryFee = form.isDelivery ? 2.50 : 0.00
  const serviceCharge = 0.50
  const getTotal = () => {
    return getSubtotal() + deliveryFee + serviceCharge
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
          <OrderSummary
            form={form}
            errors={errors}
            toggleDelivery={toggleDelivery}
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}
            getTotal={getTotal}
            getSubtotal={getSubtotal}
            deliveryFee={deliveryFee}
            serviceCharge={serviceCharge}
          />
          <Link href="/checkout" passHref >
            <div className={styles['btn']}>
              <DefaultBtn
                label="Confirm"
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
