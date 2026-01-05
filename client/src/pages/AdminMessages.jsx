import React, { useEffect, useState } from "react";
import { FaEnvelopeOpenText, FaSignOutAlt } from "react-icons/fa";
import Message from "../components/Message";
import axios from "axios";
import { useContextStore } from "../store/ContextStore";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const { token, logout } = useContextStore();
  const navigate = useNavigate();

  const filteredMessages = messages
    .filter((msg) => {
      if (filter === "read") return msg.isRead;
      if (filter === "unread") return !msg.isRead;
      return true;
    })
    .filter(
      (msg) =>
        msg.name.toLowerCase().includes(search.toLowerCase()) ||
        msg.subject.toLowerCase().includes(search.toLowerCase())
    );

  const fetchMessages = async (silent = false) => {
    if (!silent) setLoading(true);

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/admin/contact`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setMessages(data);
    } catch (error) {
      console.error("Failed to fetch messages");
    } finally {
      if (!silent) setLoading(false);
    }
  };


  const handleToggleRead = async (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg._id === id ? { ...msg, isRead: true } : msg
      )
    );

    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/api/admin/contact/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      toast.success(data.message)
    } catch (error) {
      console.log(error?.message);
      toast.error(error?.response?.data?.message)
    }
  };

  const handleDelete = async (id) => {
    setMessages((prev) => prev.filter((msg) => msg._id !== id));

    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/api/admin/contact/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      toast.success(data.message);
    } catch (error) {
      console.log(error?.message);
      toast.error(error?.response?.data?.message)
    }
  };

  useEffect(() => {
    fetchMessages();

    const interval = setInterval(() => {
      if (search) return
      fetchMessages(true);
    }, 10000);

    const onFocus = () => fetchMessages(true);
    window.addEventListener("focus", onFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener("focus", onFocus);
    };
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading messages...</p>
      </div>
    );
  }

  return (
    <div className="p-2 md:px-6 pt-24 min-h-[90vh] max-w-6xl mx-auto space-y-6">

      {/* Header */}
      <div className="flex px-4 flex-wrap gap-4 justify-between items-center">
        <div className="flex items-center gap-3">
          <FaEnvelopeOpenText className="text-primary text-3xl" />
          <h1 className="text-3xl font-semibold">Contact Messages</h1>
        </div>

        <div className="flex items-center w-full justify-between gap-3">
          {/* Search */}
          <input
            type="text"
            placeholder="Search by name or subject..."
            className="px-4 w-72 py-2 rounded-xl bg-gray-100 outline-slate-300 border border-gray-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Logout */}
          <NavLink
            to="/signout"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition"
          >
            <FaSignOutAlt />
            Logout
          </NavLink>
        </div>
      </div>

      {/* Filters */}
      <div className="flex px-4 gap-3">
        {["all", "unread", "read"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition
              ${filter === f
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Messages */}
      {filteredMessages.length === 0 ? (
        <p className="text-gray-500 text-center">No messages found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredMessages.map((msg) => (
            <Message
              key={msg._id}
              data={msg}
              onDelete={handleDelete}
              onToggleRead={handleToggleRead}
            />
          ))}
        </div>
      )}
    </div>
  );
}
