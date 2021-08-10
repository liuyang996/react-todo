import ListItem from "./TodoItem";
export default function FilteredList(props) {
  /**
   * 1.未完成数据
   * 2.以完成数据
   * 3.无数据时展示
   */
  const { items, changeStatus } = props;

  if (!items.length) {
    return (<p className="alert alert-info">There are no items.</p>);
  }
  const ListDom = (items.map((item) => <ListItem key={item.id} data={item} changeStatus={changeStatus} />))
  return (
    <ul className="list-unstyled">
      {ListDom}
    </ul>
  );
}