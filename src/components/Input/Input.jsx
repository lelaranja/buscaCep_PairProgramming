import React from 'react'

const Input = ({info,valor,onChange, tipo}) => {
  return (
    <input placeholder={info} value={valor} onChange={onChange} type={tipo}/>
  )
}

export default Input