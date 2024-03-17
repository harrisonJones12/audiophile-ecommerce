import React from 'react'

import backgroundImage from './assets/mobile/image-header.jpg'

const CallToAction = () => {
    return (
        <div className="call-to-action-container">
            {/* background image is applied to this */}
            <div className="featured-product">
                <span className="announcement-text gray-text">
                    New Product
                </span>
                <h1 className="featured-product-heading white-text">
                    XX99 Mark II
                    HeadphoneS
                </h1>
                <p className="featured-product-description gray-text">
                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </p>
                <button className="see-product-button">See Product</button>
            </div>
            {/* <img src={backgroundImage} alt="headphones" /> */}
        </div>
    )
}

export default CallToAction