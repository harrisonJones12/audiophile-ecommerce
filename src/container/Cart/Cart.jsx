
import InputField from "components/InputField/InputField";

const billingDetailsLabels = ["Name", "Email Address", "Phone Number"];

const shippingInfoLabels = ["Your Address", "ZIP Code", "City", "Country"];

const renderBillingDetailInputFields =
    billingDetailsLabels.map((billingDetailsLabel, index) => {
        console.log('billingDetailsLabel', billingDetailsLabel)
        return (
            <li className="billing-details-input-list-item">
                <InputField labelText={billingDetailsLabel} id={billingDetailsLabel} />
            </li>
        )
    });


export default function Cart() {
    return (
        <div className="main-cart-container">
            <span className="go-back-text">
                Go Back
            </span>
            <div className="checkout-container">
                <h1 className="checkout-heading">Checkout</h1>
                <div className="billing-details-container">
                    <h2 className="billing-details-text">Billing Details</h2>
                    <form className="billing-details-form">
                        <ul className="billing-details-input-list">
                            {renderBillingDetailInputFields}
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}
