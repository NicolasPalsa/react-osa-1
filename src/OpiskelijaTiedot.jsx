import * as React from 'react'
 
function OpiskelijaTiedot(props) {
    return(
      <div>
        <p>Nimi: {props.nimi}</p>
        <p>Ikä: {props.ika}</p>
        <p>Kurssi: {props.kurssi}</p>
      </div>
    )
}
 
export default OpiskelijaTiedot