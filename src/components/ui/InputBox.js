import enhance from '../hoc/wrapInputBox'
function InputBox(props) {
  const { value, handleChange, handleKeyUp } = props;
  return (
    <input
      autoFocus
      type="text"
      className="form-control add-todo"
      value={value}
      onKeyUp={handleKeyUp}
      onChange={handleChange}
      placeholder="新增待办事项"
    />

  );
}

export default enhance(InputBox)
