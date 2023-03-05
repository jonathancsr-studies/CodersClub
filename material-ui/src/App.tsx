import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button, Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Typography
         variant='h6'
      >
        Hello From Mui
      </Typography>
  
      <Button variant='contained'>
          Hello From Mui
      </Button>
    </div>
  )
}

export default App
