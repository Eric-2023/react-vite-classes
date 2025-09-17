import React from 'react'
import Products from './Products'
import dresses from '../data'

function Items() {
    const productList = dresses.map((item) =>
        <Products key={item.id}
        name={item.name}
        price={item.price}
        descr={item.description}
        image={item.image}
        button = "Buy"
        onClick={() => alert(`You have selected the ${item.name} priced at $${item.price}`)}
         />
    );
return (
    <div className='container'>
        <h1>Products Available</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
            {productList}
        </div>
    </div>
)
}

export default Items