import { InputComponentProps } from "../Interfaces/AppInterface";

function InputComponent({
  label,
  children,
  onChange,
  value,
}: InputComponentProps) {
  return (
    <div className="input_area">
      <label htmlFor={label}>{label}</label>
      <div>
        {children}
        <input
          type="number"
          inputMode="numeric"
          placeholder="0"
          id={label}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}

export default InputComponent;
