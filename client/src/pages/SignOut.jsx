import { useEffect } from "react"
import { useContextStore } from "../store/ContextStore"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export default function SignOut() {
  const { deleteFromLocalStorage } = useContextStore()
  const navigate = useNavigate()

  useEffect(() => {
    deleteFromLocalStorage()
    toast.success("logged Out ", { id: "1" })
    navigate("/admin/login", { replace: true })
  }, [])

  return null
}
