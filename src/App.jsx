import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='flex flex-col gap-10 mt-10'>
      <div className='sm:flex sm:flex-col md:flex md:flex-row md:justify-evenly lg:flex lg:flex-row lg:justify-evenly xl:flex xl:flex-row xl:justify-evenly'>
      
      <Card name="Asad" />
      
      <Card name="Ferozi" />
      
      </div>
      <div className='sm:flex sm:flex-col md:flex md:flex-row md:justify-evenly lg:flex lg:flex-row lg:justify-evenly xl:flex xl:flex-row xl:justify-evenly'>

      <Card name="Welcome"/>
      <Card  name="PUCIT"/>
      
      </div>
      </div> 
      
    </>
  )
}

export default App
