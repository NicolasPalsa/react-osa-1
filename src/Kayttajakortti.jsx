import * as React from 'react'
import Tervehdys from './Tervehdys.jsx'
import Infolista from './Infolista.jsx'
 
function Kayttajakortti(props) {
  return (
    <div>
        <Tervehdys name={props.nimi}/>
        <Infolista taulukko={props.lista} />
    </div>
  )
}
 
export default Kayttajakortti