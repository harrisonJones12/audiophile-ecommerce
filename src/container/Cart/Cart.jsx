
import InputField from "components/InputField/InputField";
import Button from "components/Button/Button";

const billingDetailsLabels = ["Name", "Email Address", "Phone Number"];

const shippingInfoLabels = ["Your Address", "ZIP Code", "City", "Country"];

const paymentDetailsLabels = ["e-Money Number", "e-Money PIN"];

const testObject = {
    billingDetailsLabels,
    shippingInfoLabels,
    paymentDetailsLabels
};

const renderBillingDetailInputFields =
    testObject.billingDetailsLabels.map((billingDetailsLabel, index) => {
        console.log('billingDetailsLabel', billingDetailsLabel)
        return (
            <li className="billing-details-input-list-item">
                <InputField labelText={billingDetailsLabel} id={billingDetailsLabel} />
            </li>
        )
    });

const renderShippingInfoInputFields =
    testObject.shippingInfoLabels.map((shippingInfoLabel, index) => {
        console.log('shippingInfoLabels', shippingInfoLabels)
        return (
            <li className="billing-details-input-list-item">
                <InputField labelText={shippingInfoLabel} id={shippingInfoLabel} />
            </li>
        )
    });

const renderPaymentDetailsInputFields =
    testObject.paymentDetailsLabels.map((paymentDetailLabel, index) => {
        console.log('billingDetailsLabel', paymentDetailLabel)
        return (
            <li className="billing-details-input-list-item">
                <InputField labelText={paymentDetailLabel} id={paymentDetailLabel} />
            </li>
        )
    });


const renderPaymentDetailsInputRadioButtons =
    testObject.paymentDetailsLabels.map((paymentDetailLabel, index) => {
        console.log('billingDetailsLabel', paymentDetailLabel)
        return (
            <li className="billing-details-input-list-item">
                <Button text={paymentDetailLabel} label={paymentDetailLabel} type="radio" id={paymentDetailLabel} name="payment method" />
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
                    <form className="billing-details-form">
                        <h2 className="billing-details-text">Billing Details</h2>
                        <ul className="billing-details-input-list">
                            {renderBillingDetailInputFields}
                        </ul>

                        <div className="shipping-details-list-container">
                            <h2 className="billing-details-text">Shipping Details</h2>
                            <ul className="shipping-details-input-list">{renderShippingInfoInputFields}</ul>
                        </div>
                        <div className="payment-details-container">
                            <h2 className="billing-details-text">Payment Details</h2>
                            <ul className="payment-details-input-list">{renderPaymentDetailsInputRadioButtons}</ul>
                            <div className="payment-details-input-field-container">
                                <ul className="shipping-details-input-list"> {renderPaymentDetailsInputFields}</ul>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
