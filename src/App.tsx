import './App.css'

import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import DishTable from './components/DishTable'
import Student from './components/Student'
import { type Dish } from './interface/Dish'

function App() {
  const url = 'https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json'

  const [dishes, setDishes] = useState<Dish[]>([])

  useEffect(() => {
    const getDishes = async () => {
      const response = await fetch(url)
      const data: Dish[] = await response.json()
      setDishes(data)
    }

    void getDishes()
  }, [])

  return (
    <Grid container spacing={5}>
      <Grid size={{ xs: 12 }}>
        <Student apellidos="Villon" nombres="Gabriela" paralelo="6" />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <DishTable data={dishes} />
      </Grid>
    </Grid>
  )
}

export default App
