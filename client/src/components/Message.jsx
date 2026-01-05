import {
  FaEnvelopeOpenText,
  FaUser,
  FaPhoneAlt,
  FaCalendarAlt,
  FaTrash,
  FaCheckCircle
} from "react-icons/fa";
import { useState } from "react";

export default function Message({ data, onDelete, onToggleRead }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border p-5 transition-all
        ${data.isRead ? "bg-white" : "bg-blue-50 border-blue-200"}
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-4">
        <div
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <p className="font-semibold text-gray-800 flex items-center gap-2">
            <FaUser className="text-blue-600" />
            {data.name}
            {!data.isRead && (
              <span className="ml- text-[9px] bg-blue-600 text-white px-2 py-0.5 rounded-full">
                NEW
              </span>
            )}
          </p>

          <p className="text-sm font-semibold capitalize  text-gray-600"> {data.subject}</p>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <FaCalendarAlt />
            {new Date(data.createdAt).toLocaleDateString()}
          </span>

          {/* Delete */}
          <button
            onClick={() => onDelete(data._id)}
            className="p-2 bg-red-100 rounded-full cursor-pointer text-red-500 hover:text-red-600 hover:bg-red-200 transition"
            title="Delete"
          >
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="mt-4 border-t pt-4 space-y-3 text-sm text-gray-700">
          <a href={`mailto:{data.email}`} className="flex items-center gap-2">
            <FaEnvelopeOpenText className="text-indigo-500" />
            {data.email}
          </a>

          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-emerald-500" />
            {data.phone}
          </p>

          <p>{data.message}</p>

          {/* Mark as Read Button */}
          {!data.isRead && (
            <button
              onClick={() => onToggleRead(data._id)}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full
                         bg-green-600 text-white hover:bg-green-700 transition"
            >
              <FaCheckCircle />
              Mark as Read
            </button>
          )}
        </div>
      )}
    </div>
  );
}
