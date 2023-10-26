import React from "react";
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
  // state for passing the data
  const [data, setData] = React.useState(null)
  return(
  <UserContext.Provider value={{data, setData}}>
    {children}
  </UserContext.Provider>
  )
}

export default UserContextProvider;