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

