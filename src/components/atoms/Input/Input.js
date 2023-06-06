import './Input.scss';

const Input = (props) => {
  const { customClass, type, placeholder, value, label, onChange, onKeyPress } = props;
  return (
    <div className={`input  ${customClass} ${label && value ? 'input__with-label' : ''}`}>
      {label && value && <span className="input__label">{label}</span>}
      <input
        type={type}
        placeholder={placeholder || ''}
        value={value}
        onChange={(el) => {
          onChange(el);
        }}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default Input;
