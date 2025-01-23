import React from 'react'

const ProductInfo = () => {
    const productInfo = {
        name: "Laptop",
        price: "$1200",
        availability: "In Stock",
      };


    return (
        <div>
            <p>
                name: {productInfo.name}
                price: {productInfo.price}
                availability: {productInfo.availability}
            </p>
        </div>

    )
}
export default ProductInfo
