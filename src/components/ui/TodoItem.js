import classnames from 'classnames'
import CheckBox from './CheckBox'
export default function TodoItem(props) {
  const { data, changeStatus } = props
  const handleChange = (checked) => changeStatus(data.id, checked)

  return (
    <li className={classnames('todo-item', 'ui-state-default', { 'completed': data.completed, 'pending': !data.completed })} >
      <div className="checkbox">
        <label>
          <CheckBox checked={data.completed} onChange={handleChange} />
          {/* <input type="checkbox" checked={data.completed}  /> */}
          {data.text}
        </label>
      </div>
    </ li>
  )
}