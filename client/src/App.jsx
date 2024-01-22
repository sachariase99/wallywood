import './styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Posters } from './pages'
import { Nav } from './components'

function App() {

    return (
      <div className='container'>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/posters' Component={Posters} />
          </Routes>
        </Router>
      </div>
    )
  }

export default App