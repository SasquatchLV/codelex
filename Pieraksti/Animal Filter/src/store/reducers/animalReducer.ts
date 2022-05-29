import { createSlice } from '@reduxjs/toolkit'

type AnimalsType = {
  id: number
  name: string
  image: string
  species: string
}

export const animalSlice = createSlice({
  name: 'animals',
  initialState: {
    animals: JSON.parse(localStorage.getItem('animals') || '[]') as AnimalsType[],
    species: JSON.parse(localStorage.getItem('species') || '[]') as string[],
  },
  reducers: {
    addAnimal: (state, action) => {
      const animals = [...state.animals, action.payload]
      localStorage.setItem('animals', JSON.stringify(animals))
      state.animals = animals
    },
    addSpecies: (state, action) => {
      const species = [...state.species, action.payload]
      localStorage.setItem('species', JSON.stringify(species))
      state.species = species
    },
    filterBySpecies: (state, action) => {
      const allAniamls = JSON.parse(localStorage.getItem('animals') || '[]') as AnimalsType[]
      if (action.payload === 'all') {
        state.animals = allAniamls
      } else {
        state.animals = allAniamls.filter((animal) => animal.species === action.payload)
      }
    },
    removeAnimal: (state, action) => {
      const animals = state.animals.filter((animal) => animal.id !== action.payload)
      localStorage.setItem('animals', JSON.stringify(animals))
      state.animals = animals
    },
    removeSpecies: (state, action) => {
      const species = state.species.filter((animal) => animal !== action.payload)
      localStorage.setItem('species', JSON.stringify(species))
      state.species = species
    },

  },
})

// Action creators are generated for each case reducer function
export const {
  addAnimal, addSpecies, filterBySpecies, removeAnimal, removeSpecies,
} = animalSlice.actions

export default animalSlice.reducer
