import { InputComponentProps } from "../Interfaces/AppInterface";

function InputComponent({
  label,
  children,
  onChange,
  value,
  errorMessage,
  onBlur,
}: InputComponentProps) {
  const errorStyle = {
    border: errorMessage ? "0.2rem solid red" : "initial",
  };

  return (
    <div className="input_area">
      <div className="input__area-label">
        <label htmlFor={label}>{label}</label>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <div className="input__area-field">
        {children}
        <input
          type="number"
          inputMode="numeric"
          value={value}
          min={0}
          placeholder="0"
          id={label}
          onChange={onChange}
          onBlur={onBlur}
          style={errorStyle}
        />
      </div>
    </div>
  );
}

export default InputComponent;
