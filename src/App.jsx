import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormikForm from './components/FormikForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1>Formik Virtuoso</h1>
      </div>
      <div className='container'>
        <FormikForm />
      </div>
    </>
  )
}

export default App
