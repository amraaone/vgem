import React from "react"
export const AppContext = React.createContext({})

export const AppConsumer = AppContext.Consumer

export const AppProvider = ({ currentUser, children }) => {
  return (
    <AppContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
