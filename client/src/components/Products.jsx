import React from 'react'

function Products() {
return (
    <>
            <div className="card m-2" style={{width: "14rem", height: "350px", fontSize: "0.8rem"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5csr0QaZmco4dgz5P0UxPsO60fTasp_EMQ&s" className="card-img-top" alt="..." />
            <div className="card-body">
                    <h5 className="card-title">Dress</h5>
                    <p className="card-text">Beautiful, elegant dress</p>
                    <a href="#" className="btn btn-primary" style={{fontSize: "0.8rem", padding: "0.3rem 0.6rem"}}>Add to Cart</a>
            </div>
            </div>
    </>
)
}

export default Products