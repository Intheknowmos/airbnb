import { useState } from 'react'
import airbnbLogo from './assets/airbnb-logo.png'
import './App.css'
import Hero from './Hero'
import Card from './Card'
import data from './data.js'

function App() {

  const dataTable = data.map((each)=> {
    return <Card 
              key={each.id}
              {...each} />
  })
  return (
    <div className='container'>
      <div className="navbar">
        <img src={airbnbLogo} className="logo" alt="airbnb logo"/>
      </div>
      <Hero />
      <section className='cards-list'>
        {dataTable}
      </section>
    </div>
  )
}

export default App
