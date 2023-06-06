import './Checkbox.scss';

const Checkbox = ({ id, label, value, onChange }) => {
  return (
    <div className="checkbox">
      <label className="checkbox__container">
        <input type="checkbox" checked={value} onChange={onChange} />
        <span className="checkmark"></span>
        <span className="checkbox__label">{label} </span>
      </label>
    </div>
  );
};

export default Checkbox;
