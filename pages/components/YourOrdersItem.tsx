import React from 'react'
import { OrderState } from '../../redux/order/orderSlice'
import styles from "../../styles/YourOrdersItem.module.scss";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';


export default function YourOrdersItem(props: { item: OrderState }) {
  return (
    <>
      {props.item &&
        <div className={styles['container']}>
          <div className={styles['detail']}>
            {props.item.details.date}, {props.item.details.time}
          </div>
          <div className={`${styles['detail']} ${styles['bold']}`}>
            £{props.item.details.total.toFixed(2)}
          </div>
          <div className={`${styles['detail']} ${styles['bold']}`}>
            {props.item.details.isDelivery ?
              <DeliveryDiningIcon /> : <TakeoutDiningIcon />
            }
          </div>
          <div className={`${styles['detail']} ${styles['bold']}`}>
            {props.item.isCompleted ?
              <CheckCircleIcon color="success" /> : <AccessTimeFilledIcon color='warning' />
            }
          </div>
        </div>
      }
    </>
  )
}
