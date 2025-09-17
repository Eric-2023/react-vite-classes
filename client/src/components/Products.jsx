import React from 'react'

function Products({ name, price, descr, image, button, onClick }) {
  return (
    <div className="card m-2" style={{ width: "14rem", height: "350px", fontSize: "0.8rem", display: "flex", flexDirection: "column" }}>
      <img src={image} className="card-img-top" alt={name} style={{ height: "175px", objectFit: "cover" }} />
      
      <div className="card-body d-flex flex-column" style={{ flexGrow: 1 }}>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{descr}</p>
        <p className="card-text" style={{ fontWeight: "bold" }}>${price}</p>
        
        {/* Push button to the bottom */}
        <div className="mt-auto">
          <button 
            className="btn btn-primary" 
            style={{ fontSize: "0.8rem", padding: "0.3rem 0.6rem" }}
            onClick={onClick}
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products
