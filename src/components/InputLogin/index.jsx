import './styles.scss';

function InputLogin({
  props,
  inputType,
  placeholder,
  inputId,
  inputWidth,
  handleInput = () => {
    return
  }
  
  }) {
  return (
    <div className='input-login' style={{ width: inputWidth}}>
      <fieldset>
        <input
          required
          type={inputType}
          placeholder={placeholder}
          id={inputId}
          name={inputId}
          style={{width : inputWidth}}
          onChange={handleInput}
        />
        <legend>
          <span>{placeholder}</span>
        </legend>
        <label htmlFor={inputId} className='placeholder'>{placeholder}</label>
      </fieldset>
    </div>
  )
}

export default InputLogin