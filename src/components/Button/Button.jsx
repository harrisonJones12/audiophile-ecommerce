import PropTypes from "prop-types";


export default function Button(props) {


    const radioButton = (
        <fieldset>
            <div className="radio-button-container">
                <label className={`${props.label} radio-label`}> {props.text}</label>
                <input className={`${props.label} radio-button`} type="radio" id={props.id} name={props.name} />
            </div>
        </fieldset>
    );

    const renderButton = () => {

        switch (props.type) {
            case 'radio': return radioButton;
            case 'button':
                console.log("The Button component will return a regular button")
                break;
            default:
                console.log("Empty action received.");
                break;
        }
    }


    return (
        <>
            <div class="main-container">
                {renderButton()}
            </div>
        </>
    )
}


Button.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
};