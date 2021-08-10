import { MODE_SEARCH, MODE_CREATE } from "../services/mode";
import InputBox from "./InputBox";
import SearchBox from "./SearchBox";
export default function InputWrapper(props) {
  const { mode, addNew, query, setSearchQuery } = props;
  switch (mode) {
    case MODE_CREATE:
      return <InputBox {...{ addNew }} />;
    case MODE_SEARCH:
      return <SearchBox {...{ setSearchQuery }} />
    default:
      return null;
  }
}
