import { GlobalStyle } from './GlobalStyle'
import { CharacterCardFull } from './components/CharacterCardFull'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { CharacterCardSimple } from './components/CharacterCardSimple'

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<CharacterCardSimple/>}/>
          <Route path='/character/:id' element={<CharacterCardFull/>}/> 
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
