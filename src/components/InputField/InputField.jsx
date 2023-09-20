import PropTypes from "prop-types";

export default function InputField({ labelText, type = "text", id, name, checked, value }) {

    const labelJSX = (
        <label className={`${type}-label`} for={id}>
            {labelText}
        </label>
    )

    const textInput = (<input className={`${type}-input`} type={type} id={id} name={name} />);
    const radioInput = (<input className={`${type}-input`} type={type} id={id} name={name} checked={checked} value={value} />);

    return (
        <div className="input-label-group">
            {labelJSX}
            {type === "text" ? textInput : radioInput}
        </div>
    )

}

InputField.propTypes = {
    labelText: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    value: PropTypes.string
};
