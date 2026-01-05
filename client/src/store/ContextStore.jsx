import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
export const ContextStore = createContext()

export default function ContextWrapper({ children }) {

  const [token, setToken] = useState(localStorage.getItem("token"))
  const [isLoggedIn, setIsLoggedIn] = useState(!!token)
  const [userData, setUserData] = useState(null)

  const saveToLocalStorage = (token) => {
    localStorage.setItem("token", token)
    setToken(localStorage.getItem("token"))
    setIsLoggedIn(!!token)
  }

  const deleteFromLocalStorage = () => {
    localStorage.removeItem("token")
    setToken(null)
    setIsLoggedIn(false)
    setUserData({})
  }

  const fetchUserData = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUserData(data)
    } catch (error) {
      console.log(error?.message)
    }
  }

  useEffect(() => {
    if (token)
      fetchUserData();
  }, [token])

  return (
    <ContextStore.Provider value={{ token, saveToLocalStorage, deleteFromLocalStorage, isLoggedIn, userData }}>
      {children}
    </ContextStore.Provider>

  )
}

export const useContextStore = () => useContext(ContextStore)