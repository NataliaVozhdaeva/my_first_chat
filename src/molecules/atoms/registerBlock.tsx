import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
//import './registerBlock.scss'

type formValues = {
  userName: string,
  password: string | number,
}

function RegisterBlock(): JSX.Element {
  const onSubmit: SubmitHandler<formValues> = (data) => console.log(data)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>()

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>
      <label htmlFor="userName">User name</label>
      <br></br>
      {errors.userName && <p> {errors.userName.message} </p>}
      <input
        id="userName"
        className="inputField initial"
        {...register('userName', { required: 'Please, complete' })}
      />
      <p></p>
      <label htmlFor="password">Password</label>
      <br></br>
      {errors.password && <p>{errors.password.message}</p>}
      <input
        id="password"
        className="inputField typing"
        {...register('password', { required: 'Please, complete' })}
      />
      <p></p>
      <input className="button" type="submit" value="Log In" />
    </form>
  )
}

export default RegisterBlock
