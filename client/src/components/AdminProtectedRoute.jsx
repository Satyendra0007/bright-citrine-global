import { Navigate } from "react-router-dom"
import { useContextStore } from "../store/ContextStore"

export default function AdminProtectedRoute({ children }) {
  const { userData } = useContextStore()

  if (!userData || !userData?.isAdmin) {
    return <Navigate to="/admin/login" replace />
  }

  return (
    <>
      {children}
    </>
  )
}
