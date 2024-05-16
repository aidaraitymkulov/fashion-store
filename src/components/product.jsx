import {Card} from '../components/card'
import card1 from '../pictures/firts.jpg'
import card2 from '../pictures/second.jpg'
import card3 from '../pictures/third.jpg'
import card4 from '../pictures/Mask Group.jpg'


export const Products = () => {
    return(
        <section className='products'>
            <h2 className='womens__fashion'>WOMEN’S FASHION</h2>
            <h3 className='womens__description'>Shop our new arrivals from established brands</h3>
        <div className='container grid'>
            <Card
            imageLink={card1}
            title='IGURE'
            desc='GREEN MUSCLE FIT POLO SHIRT'
            price={'$229.00'}
            second__price={'$129.00'}
            />
            <Card
            imageLink={card2}
            title='IGURE'
            desc='GREEN MUSCLE FIT POLO SHIRT'
            price={'$229.00'}
            second__price={'$129.00'}
            />
            <Card
            imageLink={card3}
            title='IGURE'
            desc='GREEN MUSCLE FIT POLO SHIRT'
            price={'$229.00'}
            second__price={'$129.00'}
            />
            <Card
            imageLink={card4}
            title='IGURE'
            desc='GREEN MUSCLE FIT POLO SHIRT'
            price={'$229.00'}
            second__price={'$129.00'}
            />

        </div>
      </section>
    )
}