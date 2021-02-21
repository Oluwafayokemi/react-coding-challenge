import React, { useContext, createContext, useReducer } from 'react'

const initialState = {
  data: [],
  loading: false,
  error: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_ENTRIES':
      return {
        ...state,
        entries: action.data,
        loading: action.loading,
        error: action.error
      }
    default:
      return state
  }
}

const EntriesStateContext = createContext()
const EntriesDispatchContext = createContext()

export const EntriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <EntriesStateContext.Provider value={state}>
      <EntriesDispatchContext.Provider value={dispatch}>
        {children}
      </EntriesDispatchContext.Provider>
    </EntriesStateContext.Provider>
  )
}

export const useEntriesState = () => {
  const state = useContext(EntriesStateContext)

  if (state === undefined) {
    throw new Error('useEntriesState must be used inside a EntriesProvider')
  }

  return state
}

export const useEntriesDispatch = () => {
  const dispatch = useContext(EntriesDispatchContext)

  if (dispatch === undefined) {
    throw new Error('useEntriesDispatch must be used inside a EntriesProvider')
  }

  return dispatch
}
