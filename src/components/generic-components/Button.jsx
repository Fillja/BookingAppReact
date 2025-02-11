import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({color, url, text, icon}) => {
  return (
    <>
    <NavLink className={`btn btn-${color}`} to={url}>{text}{icon}</NavLink>
    </>
  )
}

export default Button