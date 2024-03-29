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
      // if game is not over
      if (state.teamAMatchScore !== 3 && state.teamBMatchScore !== 3) {
        // if not in the last set
        if (!(state.teamAMatchScore === 2 && state.teamBMatchScore === 2)) {
          // if team a win the set with the set score of 25
          if (state.teamASetScore == 24 && state.teamBSetScore < 24) {
            state.teamASetScore = 0
            state.teamBSetScore = 0
            state.teamAMatchScore += 1
          }
          // if 24-24 and upper
          else if (state.teamASetScore >= 24 && state.teamBSetScore >= 24) {
            // if the difference is 2 after 24-24
            if (state.teamASetScore - state.teamBSetScore === 1) {
              state.teamASetScore = 0
              state.teamBSetScore = 0
              state.teamAMatchScore += 1
            } else {
              state.teamASetScore += 1
            }
          } else {
            state.teamASetScore += 1
          }
        }
        // last set, ends in 15
        else {
          if (state.teamASetScore == 15 && state.teamBSetScore < 14) {
            state.teamASetScore = 0
            state.teamBSetScore = 0
            state.teamAMatchScore += 1
          } else if (state.teamASetScore >= 14 && state.teamBSetScore >= 14) {
            // if the difference is 2 after 14-14
            if (state.teamASetScore - state.teamBSetScore === 1) {
              state.teamASetScore = 0
              state.teamBSetScore = 0
              state.teamAMatchScore += 1
            } else {
              state.teamASetScore += 1
            }
          } else {
            state.teamASetScore += 1
          }
        }
      }
    },
    incrementBSetScore: (state) => {
      if (state.teamAMatchScore !== 3 && state.teamBMatchScore !== 3) {
        if (!(state.teamBMatchScore === 2 && state.teamAMatchScore === 2)) {
          if (state.teamBSetScore == 24 && state.teamASetScore < 24) {
            state.teamBSetScore = 0
            state.teamASetScore = 0
            state.teamBMatchScore += 1
          } else if (state.teamBSetScore >= 24 && state.teamASetScore >= 24) {
            if (state.teamBSetScore - state.teamASetScore === 1) {
              state.teamBSetScore = 0
              state.teamASetScore = 0
              state.teamBMatchScore += 1
            } else {
              state.teamBSetScore += 1
            }
          } else {
            state.teamBSetScore += 1
          }
        }
        // last set, ends in 15
        else {
          if (state.teamBSetScore == 15 && state.teamASetScore < 14) {
            state.teamBSetScore = 0
            state.teamASetScore = 0
            state.teamBMatchScore += 1
          } else if (state.teamBSetScore >= 14 && state.teamASetScore >= 14) {
            // if the difference is 2 after 14-14
            if (state.teamBSetScore - state.teamASetScore === 1) {
              state.teamBSetScore = 0
              state.teamASetScore = 0
              state.teamBMatchScore += 1
            } else {
              state.teamBSetScore += 1
            }
          } else {
            state.teamBSetScore += 1
          }
        }
      }
    },
    decrementASetScore: (state) => {
      // if game is not over
      if (state.teamAMatchScore !== 3 && state.teamBMatchScore !== 3) {
        // if not the last set
        if (!(state.teamAMatchScore === 2 && state.teamBMatchScore === 2)) {
          // if not over 24
          if (state.teamASetScore <= 24 && state.teamBSetScore <= 24) {
            if (state.teamASetScore != 0) {
              state.teamASetScore -= 1
            }
          }
          // if over 24
          else {
            if (state.teamASetScore + 1 === state.teamBSetScore) {
              state.teamASetScore = 0
              state.teamBSetScore = 0
              state.teamBMatchScore += 1
            } else {
              state.teamASetScore -= 1
            }
          }
        }
        // if last set
        else {
          // if not over 14
          if (state.teamASetScore <= 14 && state.teamBSetScore <= 14) {
            if (state.teamASetScore != 0) {
              state.teamASetScore -= 1
            }
          }
          // if over 14
          else {
            if (state.teamASetScore + 1 === state.teamBSetScore) {
              state.teamASetScore = 0
              state.teamBSetScore = 0
              state.teamBMatchScore += 1
            } else {
              state.teamASetScore -= 1
            }
          }
        }
      }
    },
    decrementBSetScore: (state) => {
      // if game is not over
      if (state.teamBMatchScore !== 3 && state.teamAMatchScore !== 3) {
        // if not the last set
        if (!(state.teamBMatchScore === 2 && state.teamAMatchScore === 2)) {
          // if not over 24
          if (state.teamBSetScore <= 24 && state.teamASetScore <= 24) {
            if (state.teamBSetScore != 0) {
              state.teamBSetScore -= 1
            }
          }
          // if over 24
          else {
            if (state.teamBSetScore + 1 === state.teamASetScore) {
              state.teamBSetScore = 0
              state.teamASetScore = 0
              state.teamAMatchScore += 1
            } else {
              state.teamBSetScore -= 1
            }
          }
        }
        // if last set
        else {
          // if not over 14
          if (state.teamBSetScore <= 14 && state.teamASetScore <= 14) {
            if (state.teamBSetScore != 0) {
              state.teamBSetScore -= 1
            }
          }
          // if over 14
          else {
            if (state.teamBSetScore + 1 === state.teamASetScore) {
              state.teamBSetScore = 0
              state.teamASetScore = 0
              state.teamAMatchScore += 1
            } else {
              state.teamBSetScore -= 1
            }
          }
        }
      }
    },
  },
})

export const selectASetScore = (state) => state.counter.teamASetScore
export const selectBSetScore = (state) => state.counter.teamBSetScore
export const selectAMatchScore = (state) => state.counter.teamAMatchScore
export const selectBMatchScore = (state) => state.counter.teamBMatchScore

export const {
  incrementASetScore,
  incrementBSetScore,
  decrementASetScore,
  decrementBSetScore,
} = counterSlice.actions

export default counterSlice.reducer
