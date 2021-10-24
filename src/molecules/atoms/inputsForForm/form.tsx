import React from 'react'
import { useForm } from 'react-hook-form'

import './formStyle.scss'

type formValues = {
  userName: string,
  password: string,
}

function InputsForForm(): JSX.Element {
  const {
    register,
    formState: { errors },
  } = useForm<formValues>({ shouldFocusError: false })

  return (
    <React.Fragment>
      <label htmlFor="userName">User name</label>
      <br></br>
      <input
        id="userName"
        className={`inputField ${errors.userName ? 'error' : ''}`}
        placeholder={'Input user name'}
        {...register('userName', {
          validate: (value) => value.length > 3, //тестовый для простоты
        })}
      />
      {errors.userName && <p className="errorMessage"> Something goes wrong </p>}
      <p></p>

      <label htmlFor="password">Password</label>
      <br></br>
      {errors.password && <p className="errorMessage"> Please, complete </p>}
      <input
        id="password"
        className={`inputField ${errors.password ? 'error' : ''}`}
        {...register('password', { required: true })}
      />
    </React.Fragment>
  )
}

export default InputsForForm
