import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormInputValidation } from 'react-form-input-validation';

const Login = () => {
    // var [email,setemail] =useState();
    // const  Name=(e)=>{
    // setemail(email=(e.target.value))
    // console.log(email)
    // } 
    const [fields,errors,form]=useFormInputValidation({
        email_address:"",
        password:""
    },{
        email_address:"required|email",
        password:"required"
    })
  return (
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          value={fields.email}
          onBlur={form.handleBlurEvent}
          onChange={form.handleChangeEvent}
          name='email_address'
          id="outlined-error"
          label='email address'
          helperText={errors.email_address?errors.email_address:""}
        /><br></br>
        <TextField
          value={fields.password}
          onBlur={form.handleBlurEvent}
          onChange={form.handleChangeEvent}
          name='password'
          id="outlined-error-helper-text"
          label='password'
          helperText={errors.password?errors.password:""}
          type={"password"}
        />
      </div>
      
    </Box>
  )
}

export default Login
