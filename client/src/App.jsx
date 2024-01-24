import './styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Posters, About, Contact } from './pages'
import { Header, Footer } from './components'

function App() {

    return (
      <div className='container'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/posters' Component={Posters} />
            <Route path='/about' Component={About} />
            <Route path='/contact' Component={Contact} />
          </Routes>
          <Footer />
        </Router>
      </div>
    )
  }

export default App