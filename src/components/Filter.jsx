import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filter.reducer';
import css from './Form.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <form className={css.Form}>
      <label>
        <span>Find contacts by name</span>
        <input
          type="text"
          name="filter"
          onChange={event => dispatch(addFilter(event.target.value))}
        ></input>
      </label>
    </form>
  );
};

export default Filter;
