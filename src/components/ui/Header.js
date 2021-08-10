
import InputWrapper from "./InputWrapper"
export default function Heade(props) {
  return (
    <header>
      <h1>THINGS TO DO</h1>
      <InputWrapper  {...props} />
    </header>
  )
}