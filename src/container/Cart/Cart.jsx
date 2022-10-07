
import InputField from "components/InputField/InputField";

const billingDetailsLabels = ["Name", "Email Address", "Phone Number"];

const shippingInfoLabels = ["Your Address", "ZIP Code", "City", "Country"]

export default function Cart() {
    return (
        <div className="main-cart-container">
            <span className="go-back-text">
                Go Back
            </span>
            <div className="checkout-container">
                <h1>Checkout</h1>
                <form>
                    <InputField labelText={billingDetailsLabels[0]}></InputField>

                    {/* <div className="summary-container">
                    <h1>Summary</h1>
                </div> */}
                </form>
            </div>
        </div>
    )
}
