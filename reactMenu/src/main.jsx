import React from 'react'
import ReactDOM from 'react-dom/client'
import data from '../data/recipe.json'
import Menu from './components/menu'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu recipes={data} />
  </React.StrictMode>,
)
