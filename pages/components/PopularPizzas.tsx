import React from 'react'
import styles from "../../styles/PopularPizzas.module.scss";
import { useAppSelector } from '../../redux/hooks';
import PopPizzaItem from './PopPizzaItem';


export default function PopularPizzas() {
    const pizzas = useAppSelector(state => state.pizzas)
    return (
      <section
        className={styles['section-popular-pizzas']}
        id='popular-pizzas'
      >
            <>
                <div className={styles['top-spacer']}></div>
                <h1>Popular Pizzas</h1>
                <ul>
                    {pizzas.data.nodes && pizzas.data.nodes.map(pizza =>
                        <li key={pizza.title}>
                            <PopPizzaItem
                                name={pizza.title}
                                price={pizza.data.price}
                                fadeDirection={`fade-right`}
                                imageUrl={pizza.featuredImage.node.sourceUrl} />
                        </li>
                    )}

                </ul>
            </>
        </section>
    )
}
