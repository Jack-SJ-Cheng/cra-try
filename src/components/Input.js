const Input = ({id, labelText, text, onChangeHandler}) => {
  return (<>
      <label htmlFor={id}>{labelText}</label>
      <input type="text" id={id} placeholder="Enter text here" value={text} onChange={onChangeHandler} />
    </>
  );
}

export default Input;