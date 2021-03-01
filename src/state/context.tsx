import React, { createContext, useReducer } from 'react'

type Player = 1 | 2

interface HistoryEntry {
  x: number
  y: number
  player: Player
}

interface InitialState {
  player: Player
  board: number[][]
  history: HistoryEntry[]
  isFinished: boolean
  winner: null | 1 | 2
  time: number
  timeBanks1: number
  timeBanks2: number
}

const initialState: InitialState = {
  player: 1,
  board: new Array(19).fill(new Array(19).fill(0)),
  history: [],
  isFinished: false,
  winner: null,
  time: 0,
  timeBanks1: 3,
  timeBanks2: 3,
}

const StateContext = createContext<InitialState>(initialState)


const StateContextProvider = () => {
  const [dispatch, state] = useReducer()
}

export default StateContext
