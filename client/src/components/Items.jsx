import React from 'react'
import Products from './Products'

function Items() {
return (
    <div className='container'>
        <h1>Products Available</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
        </div>
    </div>
)
}

export default Items