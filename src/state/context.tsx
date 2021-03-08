import React, { createContext, useReducer, useContext, Dispatch } from 'react'
import mainReducer from './reducer'

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

const StoreContext = createContext<{
  state: InitialState
  dispatch: Dispatch<Action>
}>({ state: initialState, dispatch: () => null })


const StoreContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)

export default StoreContextProvider
