interface FormComponentProps {
    val: string
    setVal: Function
    placeholder: string
}
  

export default function FormComponent( { val, setVal, placeholder } : FormComponentProps) {
    return (
        <input
          value={val}
          placeholder={placeholder} // ...force the input's value to match the state variable...
          onChange={e => setVal(e.target.value)} // ... and update the state variable on any edits!
        />
      );
}