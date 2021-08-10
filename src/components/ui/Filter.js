import { getOptions } from '../services/filter'

export default function Filter(props) {
  const { filter, changeFilter } = props;
  const getClass = (key) => (key === filter ? 'selected' : '');
  const options = getOptions();
  // className="selected"
  return (
    <ul className="filters list-unstyled clearfix">
      {
        Object.keys(options).map(key => (
          <li key={key} >
            <a onClick={() => { changeFilter(key) }} className={getClass(key)}>{options[key]}
            </a>
          </li>
        ))
      }
    </ul >
  )
}