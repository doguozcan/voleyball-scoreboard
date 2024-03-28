import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    teamASetScore: 0,
    teamAMatchScore: 0,
    teamBSetScore: 0,
    teamBMatchScore: 0,
  },
  reducers: {
    incrementASetScore: (state) => {
      state.teamASetScore += 1
    },
    incrementBSetScore: (state) => {
      state.teamBSetScore += 1
    },
    decrementASetScore: (state) => {
      state.teamASetScore -= 1
    },
    decrementBSetScore: (state) => {
      state.teamBSetScore -= 1
    },
    incrementAMatchScore: (state) => {
      state.teamAMatchScore += 1
    },
    incrementBMatchScore: (state) => {
      state.teamBMatchScore += 1
    },
  },
})

export const aSetScore = (state) => state.counter.teamASetScore
export const bSetScore = (state) => state.counter.teamBSetScore
export const aMatchScore = (state) => state.counter.teamAMatchScore
export const bMatchScore = (state) => state.counter.teamBMatchScore

export const {
  incrementASetScore,
  incrementBSetScore,
  decrementASetScore,
  decrementBSetScore,
  incrementAMatchScore,
  incrementBMatchScore,
} = counterSlice.actions

export default counterSlice.reducer
