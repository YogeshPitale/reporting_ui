import React from 'react'
import {FormControl,InputLabel,FilledInput} from '@mui/material'
const LoginForm = () => {
  return (
    <form>
        <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Name</InputLabel>
        <FilledInput id="component-filled" defaultValue="Composed TextField" />
        </FormControl>
    </form>
  )
}

export default LoginForm