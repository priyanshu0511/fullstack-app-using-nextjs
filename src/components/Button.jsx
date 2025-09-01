import React from 'react'

const Button = ({text}) => {
  return (
    <button className="bg-green-400 px-5 py-2 cursor-pointer max-w-fit rounded-sm">{text}</button>
  )
}

export default Button