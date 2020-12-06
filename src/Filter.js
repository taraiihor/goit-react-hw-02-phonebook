const Filter = ({ value, onChangle }) => (
  <label>
    Пошук Імені
    <input type="text" value={value} onChange={onChangle} />
  </label>
);

export default Filter;
