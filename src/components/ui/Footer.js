import Filter from "./Filter"
import ButtonWrapper from "./ButtonWrapper";
export default function Footer(props) {
  const { count, filter, changeFilter, changeMode, mode } = props;

  return (
    <footer className="clearfix">
      <div className="pull-left buttons">
        <ButtonWrapper {...{ changeMode, mode }} />
      </div>
      <div className="pull-left">{count}条代办事项</div>
      <div className="pull-right">
        <Filter {...{ filter, changeFilter }} />
      </div>
    </footer>
  )
}