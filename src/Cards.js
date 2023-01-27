import React from 'react'

function Cards(props) {

 console.log(props)

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

export default Cards
