
import "./App.css";
import { useState } from "react";
import FormInputs from './components/FormInputs';

const App = () => {
  const [values,setValues]=useState({
    username:"",
    email:"",
    date:"",
    s_hours:"",
    e_hours:"",
    



  });

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      label:"Username"
    },
    {
      id:2,
      name:"email",
      type:"text",
      placeholder:"Email",
      label:"Email"
    },
    {
      id:3,
      name:"date",
      type:"date",
      placeholder:"Date",
      label:"Date"
    },
    {
      id:4,
      name:"s_hours",
      type:"time",
      placeholder:"s_Hours",
      label:"Start time"
    },
    {
      id:5,
      name:"e_hours",
      type:"time",
      placeholder:"E_hours",
      label:"End time"
    }
  ]
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    
  }

  const onChange =(e)=>{
    setValues({...values,[e.target.name]: e.target.value});
  }
  console.log(values);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input)=>(
        <FormInputs key={input.id}{...input} value={values[input.name]}  onChange={onChange}/>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
