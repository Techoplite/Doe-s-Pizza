import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import styles from "../../styles/OnlineOrder.module.scss";
import Footer from '../components/Footer';
import DefaultBtn from '../components/DefaultBtn';
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import MenuItem from '../components/MenuItem';
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import { yellow } from '@mui/material/colors';
import { setNavBackground } from '../../redux/navBackground/navBackgroundSlice';


export default function OnlineOrder() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch()
  const handleScroll = () => {
    // Toggles the navbar background if page has been scrolled down from top
    window.scrollY === 0 ? dispatch(setNavBackground(false)) : dispatch(setNavBackground(true))
  }
  // TODO: on mount should populate with redux store order data
  const pizzas = useAppSelector(state => state.pizzas)
  return (
    <Provider store={store}>
      <div className={styles['container']}>
        <Navbar />
        <div className={styles['main-content']}>
          <div className={styles['page-title-wrapper']}>
            <BookOnlineIcon sx={{ color: yellow[200], fontSize: 50 }} />
            <h1 className={styles['page-title']}>Order Online</h1>
          </div>
          <ul>
            {pizzas.data.nodes && pizzas.data.nodes.map(pizza =>
              <li key={pizza.title}>
                <MenuItem
                  imageSrc={pizza.featuredImage.node.sourceUrl}
                  title={pizza.title}
                  ingredients={pizza.data.ingredients}
                  price={pizza.data.price}

                />
              </li>
            )}
          </ul>
        </div>
        <Link href="/checkout" passHref >
          <div className={styles['btn']}>
            <DefaultBtn label="Checkout" maxWidth='18rem'/>
          </div>
        </Link>
        <div className={styles['footer-wrapper']}>
          <Footer />
        </div>
      </div>
    </Provider>
  )
}
