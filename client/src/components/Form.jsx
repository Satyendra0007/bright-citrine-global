import { useForm } from "react-hook-form";
import Input from "./Input";
import { FaUser, FaEnvelope, FaPhoneAlt, FaPen } from "react-icons/fa";
import Spinner from "./Spinner";

export default function Form({ text, handleOnSubmit, handleToogleForm }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    const result = await handleOnSubmit(data)
    if (result.success === true)
      reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl shadow-xl border border-gray-300 p-10 max-w-3xl mx-auto space-y-8"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        {text}______
      </h2>

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          icon={<FaUser />}
          type="text"
          placeholder="Your Name"
          error={errors.name}
          {...register("name", { required: "Name is required" })}
        />

        <Input
          icon={<FaEnvelope />}
          type="email"
          placeholder="Email Address"
          error={errors.email}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address"
            }
          })}
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          icon={<FaPhoneAlt />}
          type="number"
          placeholder="Phone Number"
          error={errors.phone}
          {...register("phone", {
            required: "Phone number is required",
            minLength: {
              value: 10,
              message: "Phone must be 10 digits"
            },
            maxLength: {
              value: 10,
              message: "Phone must be 10 digits"
            }
          })}
        />

        <Input
          icon={<FaPen />}
          type="text"
          placeholder="Subject"
          error={errors.subject}
          {...register("subject", { required: "Subject is required" })}
        />
      </div>

      {/* Message */}
      <div className="space-y-1">
        <div
          className={`bg-gray-100 rounded-2xl p-4 ${errors.message ? "border border-red-400 bg-red-50" : ""
            }`}
        >
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-transparent outline-none resize-none text-sm"
            {...register("message")}
          />
        </div>
        {errors.message && (
          <p className="text-xs text-red-500 pl-2">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-12 py-3 rounded-full font-semibold shadow-md transition flex items-center justify-center gap-2 cursor-pointer
             ${isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary text-white hover:shadow-lg"
            }`}
        >
          {isSubmitting ? (
            <>
              <Spinner />
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </button>


        {handleToogleForm && (
          <button
            type="button"
            onClick={handleToogleForm}
            disabled={isSubmitting}
            className="px-12 py-3 rounded-full bg-gray-200 font-semibold shadow-md hover:shadow-lg transition cursor-pointer disabled:opacity-50"
          >
            Close
          </button>
        )}

      </div>
    </form >
  );
}
