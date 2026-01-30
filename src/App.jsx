import * as React from 'react'
import Tervehdys from './Tervehdys.jsx'
import OpiskelijaTiedot from './OpiskelijaTiedot.jsx'
 
function App() {
  return(
    <div>
      {/* <Tervehdys name='Nicolas'/> */}
      <OpiskelijaTiedot nimi='Matti Meikäläinen' ika='16' kurssi='Reactin perusteet'/>
    </div>
  )
}
 
export default App