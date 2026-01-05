import { useForm } from "react-hook-form";
import { useNavigate, Navigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserShield } from "react-icons/fa";
import axios from "axios";
import { useContextStore } from "../store/ContextStore";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { saveToLocalStorage, userData } = useContextStore()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (userInput) => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/login`, userInput)
      saveToLocalStorage(data.token)
      toast.success(data.message)
    } catch (error) {
      console.log(error.message)
      toast.error(error?.response?.data?.message)
    }
  };

  useEffect(() => {
    if (userData?.isAdmin) {
      navigate("/admin/messages", { replace: true })
    }
  }, [userData, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8 space-y-6"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <FaUserShield className="text-primary text-2xl" />
          </div>
          <h2 className="text-2xl font-semibold">Admin Login</h2>
          <p className="text-sm text-gray-500">
            Access admin panel
          </p>
        </div>

        {/* Email */}
        <div>
          <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 focus-within:bg-white focus-within:shadow-md transition">
            <FaEnvelope className="text-gray-400" />
            <input
              type="email"
              placeholder="Admin Email"
              className="w-full bg-transparent outline-none text-sm"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 focus-within:bg-white focus-within:shadow-md transition">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none text-sm"
              {...register("password", { required: "Password is required" })}
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-full bg-primary text-white font-semibold hover:shadow-lg transition disabled:bg-gray-400"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
