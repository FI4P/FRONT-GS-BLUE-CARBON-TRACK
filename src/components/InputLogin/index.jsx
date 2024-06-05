import './styles.scss';

function InputLogin({
  inputType,
  placeholder,
  inputId,
  inputWidth,
  value,
  handleLogin = () => {
    return
  },
  handleSingIn = () => {
    return
  },
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
          onChange={handleLogin}
          value={value}
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