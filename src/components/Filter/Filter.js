const Filter = ({ value, onChangle }) => (
  <label>
    Пошук контактів
    <input type="text" value={value} onChange={onChangle} />
  </label>
);

export default Filter;
