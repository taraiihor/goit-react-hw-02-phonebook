import './Filter.css';
const Filter = ({ value, onChangle }) => (
  <label className="item__filter">
    <p className="item__text-filter">Пошук контактів</p>
    <input
      className="item__element"
      type="text"
      value={value}
      onChange={onChangle}
    />
  </label>
);

export default Filter;
