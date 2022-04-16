import React from 'react'
import styles from "../../styles/PopularPizzas.module.scss";
import PopPizzaItem from './PopPizzaItem';


export default function PopularPizzas() {
    return (
        <section className={styles['section-popular-pizzas']}>
            <div className={styles['top-spacer']}></div>
            <h1>Popular Pizzas</h1>
            {/* TODO: pizza items data below will have to be fetched from DB */}
            <PopPizzaItem
                imageUrl='/../public/pizzas/margherita.png' name="Margherita"
                price="7.99" />
            <PopPizzaItem
                imageUrl='/../public/pizzas/margherita.png' name="Margherita"
                price="7.99" />
            <PopPizzaItem
                imageUrl='/../public/pizzas/margherita.png' name="Margherita"
                price="7.99" />
            <PopPizzaItem
                imageUrl='/../public/pizzas/margherita.png' name="Margherita"
                price="7.99" />
            <PopPizzaItem
                imageUrl='/../public/pizzas/margherita.png' name="Margherita"
                price="7.99" />
            <PopPizzaItem
                imageUrl='/../public/pizzas/margherita.png' name="Margherita"
                price="7.99" />
        </section>
    )
}
