import "./formInputs.css"
const FormInputs = (props) => {
  
  const {label,onChange,id, ...inputProps}=props;
  
    return (
    <div className='formInputs'>
        <label>{label}</label>
        <input 
        {...inputProps} onChange={onChange}
      />
      
    </div>
  )
}

export default FormInputs


