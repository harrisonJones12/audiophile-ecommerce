type Props = {
  type: string;
  label: string;
  id: string;
  text: string;
  color: string;
};

export default function Button({
  type,
  label,
  id,
  text,
  name,
  color = "black",
}: Props) {
  const radioButton = (
    <fieldset>
      <div className="radio-button-container">
        <div className="radio-button-inner-container">
          <input
            className={`${label} radio-button`}
            type="radio"
            id={id}
            name={name}
          />
          <label className={`${label} radio-label`} for={id}>
            {text}
          </label>
        </div>
      </div>
    </fieldset>
  );

  const regularButton = (
    <button type="button" className={`regular-button ${color}`}>
      {text}
    </button>
  );

  const renderButton = () => {
    switch (type) {
      case "radio":
        return radioButton;
      case "regular-button":
        return regularButton;

      default:
        console.log("Empty action received.");
        break;
    }
  };

  return (
    <>
      <div class="main-container">{renderButton()}</div>
    </>
  );
}
