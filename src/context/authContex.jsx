    import {React , createContext, useState} from "react"
  
    
    export const AuthContext = createContext()
    
    const AuthContextProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState({})
    const saveUser=(user)=>{
      setLoggedUser(user)
    }
    return <AuthContext.Provider value = {{loggedUser, setLoggedUser, saveUser}}>{children}</AuthContext.Provider>}
    //los 3 puntos son para redefinir el objeto


    export default AuthContextProvider


  