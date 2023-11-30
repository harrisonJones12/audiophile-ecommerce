import React from 'react'
import earphonesmarkTwo from 'container/Cart/cart-assets/image-xx99-mark-two-headphones.jpg'

export default function CartSummary(props) {

    /*** 
    - Take in a prop which has the info of the products 

    - Calculate the total for each product and the amount of each product added to the cart

    - VAT is calculated as 20% of the product total, excluding shipping

    - After checking out a confirmation modal should be shown with an order summary
     

    ***/

    const itemsInCart = [{ productName: 'X355', quantity: 4, priceOfProduct: 100 }, { productN4ame: 'X355', quantity: 4, priceOfProduct: 100 }, { productName: 'X355', quantity: 4, priceOfProduct: 100 }]

    const renderProductsSummary =
        // render more than one product
        itemsInCart.map((product) => {
            return (< div className="product-quantity-container-wrapper" >

                <div className="product-quantity-container">
                    <img src={earphonesmarkTwo} alt="earphones mark two" className="product-image" />
                    <div className="product-name-total-container">
                        <span className="name cart-summary-bold-text">X5552</span>
                        <span className="total-price-of-product cart-summary-soft-text">$4333</span>
                    </div>
                </div>
                <span className="product-quantity cart-summary-quantity-text">x2</span>
            </div >)

        });

    return (
        <>
            <div className="cart-summary-main-container">

                <h2 className="cart-summary-heading">
                    Summary
                </h2>
                <div className="cart-summary-product-calculations">
                    {renderProductsSummary}

                    <button>
                        Continue & Pay
                    </button>
                </div>

            </div>
        </>
    )
}
