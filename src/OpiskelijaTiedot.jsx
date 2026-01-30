import * as React from 'react'
 
function OpiskelijaTiedot({nimi, ika, kurssi}) {
    return(
      <div>
        <p>Nimi: {nimi}</p>
        <p>Ikä: {ika}</p>
        <p>Kurssi: {kurssi}</p>
      </div>
    )
}
 
export default OpiskelijaTiedot