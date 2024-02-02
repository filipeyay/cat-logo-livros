import React from 'react';
import LivroLista from './components/LivroLista'
import LivroDados from './components/LivroDados'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <Router>
      <nav className='navbar text-white navbar-expand-lg navbar-dark bg-dark'>
        <ul className='navbar-bar'>
          <li className='nav-item'>
            <NavLink to="/" className="nav-link" style={{font:"Arial", color:"#fff"}}>Cátalogo</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/livro-dados" className="nav-link" style={{font:"Arial", color:"#fff"}}>Novo</NavLink>
          </li>
        </ul>
      </nav>
      <body style={{width: '90%', margin: '0 auto', textAlign: 'center'}}>
        <Routes>
          <Route path="/" element={<LivroLista/>}/>
          <Route path="/livro-dados" element={<LivroDados/>}/>
        </Routes>
      </body>
    </Router>
  )
}

export default App;
