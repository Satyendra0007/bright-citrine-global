import React from "react";

const Input = React.forwardRef(
  ({ icon, placeholder, type, error, ...rest }, ref) => {
    return (
      <div className="space-y-1">
        <div
          className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ease-in-out
          ${error
              ? "bg-red-50 border border-red-400"
              : "bg-gray-100 focus-within:bg-white focus-within:shadow-md"
            }`}
        >
          <span
            className={`text-sm ${error ? "text-red-500" : "text-gray-400"}`}
          >
            {icon}
          </span>

          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className="w-full bg-transparent outline-none text-sm placeholder-gray-500"
            {...rest}
          />
        </div>

        {error && (
          <p className="text-xs text-red-500 pl-2">{error.message}</p>
        )}
      </div>
    );
  }
);

export default Input;

