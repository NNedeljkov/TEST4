import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getAllCountries, getByRegion } from './services'
import { Countries } from './components/countries'
import { Select } from './components/select'

const App = () => {
  
  const [country, setCountries] = useState([])
  const [select, setSelect] = useState('')

  // console.log(country);
  useEffect(() => {
    getAllCountries().then(res => setCountries(res.data))
  }, [])

  const handleSelect = (e) =>{
    setSelect(e.target.value)
  }

  useEffect(() => {
    getByRegion(select).then(res => {
      setCountries(res.data)
    })
  }, [select])
  

  return (
    <div>
      <Select handleSelect={handleSelect}/>
      <Countries country = {country} key = {country.capital}/>
    </div>
  )
  
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
