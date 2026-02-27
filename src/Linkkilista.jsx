import * as React from 'react'
 
function Linkkilista(props) {
  return (
    <ul>
      {props.linkit.map((item, index) => (
        <li key={index}><a href={item.url}>{item.nimi}</a></li>
      ))}
    </ul>
  )
}
 
export default Linkkilista