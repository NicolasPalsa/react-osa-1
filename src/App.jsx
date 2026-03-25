import * as React from 'react'
import Tervehdys from './Tervehdys.jsx'
import OpiskelijaTiedot from './OpiskelijaTiedot.jsx'
import Infolista from './Infolista.jsx'
import Linkkilista from './Linkkilista.jsx'
import Kayttajakortti from './Kayttajakortti.jsx'
import Counter from './Counter.jsx'
import Header from './Header.jsx'
import ShoppingList from './ShoppingList.jsx'
 
/*  Tervehdys ja Opiskelijatiedot */

function App() {
  return(
    <div>
      <Tervehdys name='Nicolas'/>
      <OpiskelijaTiedot nimi='Matti Meikäläinen' ika='16' kurssi='Reactin perusteet'/>
    </div>
  )
}



/*  Infolista, Linkkilista, Kayttajakortti

const tiedot = ["React", "JavaScript", "CSS"];  

const linkit = 
[{id: 1,nimi: "Google", url: "https://google.com"},
{id: 2, nimi: "React", url: "https://react.dev"}];

function App() {
  return(
    
    <div>
      <h1>Listat</h1>

      <h2>Listan käyttö</h2>
      <Infolista taulukko={tiedot} />

      <h2>Linkkien lista</h2>
      <Linkkilista linkit={linkit} />

      <h2>Käyttäkäkortti</h2>
      <Kayttajakortti nimi="Ville" lista={["React", "TypeScript", "CSS"]} />
    </div>
  )
} */



/*  Counter

function App() {
  return (
    <Counter/>
  )
} */


/*
function App() { 

  return (
    <div>
      <Header />

      <ShoppingList />
    </div>
  )
*/
 
export default App