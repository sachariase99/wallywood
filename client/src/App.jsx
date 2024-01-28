import './styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Posters, About, Contact, Login, PosterDetails } from './pages'
import { Header, Footer } from './components'

function App() {

  return (
    <div className='container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path="/posters/*" element={<Posters />} />
          <Route path="/posters/:slug" element={<PosterDetails />} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact} />
          <Route path='/login' Component={Login} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App