import { GlobalCss } from './styles'

import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
      <Cart />
    </BrowserRouter>
  )
}

export default App
// npm i
// npm i --save styled-components
// npm install --save-dev @types/styled-components
// npm i --save react-redux @reduxjs/toolkit
// npm install @types/react --save-dev
