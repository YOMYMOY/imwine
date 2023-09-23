import { createContext, useState } from 'react'

const userContext = createContext(null)

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const login = () => {
        setUser('Matias')
    }

    const logout = () => {
        setUser(null)
    }

    const contextValue = {
        user,
        login,
        logout
    }

  return (
    <userContext.Provider value={contextValue}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider
