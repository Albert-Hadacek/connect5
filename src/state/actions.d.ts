type Action =
  {type: 'make_move', move: HistoryEntry} |
  {type: 'use_timebank', player: Player} 
