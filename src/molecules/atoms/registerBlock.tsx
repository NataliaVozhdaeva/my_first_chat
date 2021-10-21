import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import './registerBlock.scss'
import './buttonStyle.scss'

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
  } = useForm<formValues>({ shouldFocusError: false })

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>
      <label htmlFor="userName">User name</label>
      <br></br>
      <input
        id="userName"
        className={`inputField ${errors.userName ? 'error' : ''}`}
        placeholder={'Input user name'}
        {...register('userName', {
          pattern: /(\b[A-Z][a-z]+)/g,
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
      <p></p>

      <input className="button" type="submit" value="Log In" />
    </form>
  )
}

export default RegisterBlock

/*Пыталась разбить на компоненты "Input" и "Submit", не смогла настроить валидацию... 
Собираться все собиралось, а ошибки не отрабатывались
*/

/* это просто попытки валидации, они стоили некоторых трудов, пока жалко их просто выбросить)

const renderChangeColor = () => {
    const style: React.CSSProperties = {}
    if (errors.userName) {
      style['borderColor'] = 'red'
      style['background'] = 'url("../345.png") no-repeat center right 16px' 
    } else {
      style['borderColor'] = '#b3cdf8'
    }
    return style
  }

  const renderChangeColor = () => {
    let style = 'none'
    if (errors.userName) {
      style = 'inputField error'
    } else {
      style = 'inputField'
    }
    return style
  } 
  
  {renderChangeColor()} 

 
*/
