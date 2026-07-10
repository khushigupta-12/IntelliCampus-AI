import { useState } from "react";
import api from "../services/api";

function Appointment() {
  const [form, setForm] = useState({
    student_id: 1,
    faculty_id: 1,
    appointment_date: "",
    appointment_time: "",
    reason: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    });

    setSuccess("");
    setError("");
  };

  const bookAppointment = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await api.post(
        "/appointments/book",
        form
      );

      setSuccess(res.data.message);

      setForm({
        student_id: 1,
        faculty_id: 1,
        appointment_date: "",
        appointment_time: "",
        reason: "",
      });

    } catch (err) {
      console.error(err);
      setError("Booking Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Background Blur */}

      <div className="absolute inset-0">

        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-700/20 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-12">

        <div className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl lg:grid-cols-2">

          {/* LEFT PANEL */}

          <div className="hidden bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-900 p-12 text-white lg:flex lg:flex-col lg:justify-between">

            <div>

              <h1 className="text-4xl font-bold">
                📅 Book Appointment
              </h1>

              <p className="mt-6 text-lg leading-8 text-cyan-100">
                Schedule meetings with faculty members
                quickly and efficiently using
                IntelliCampus AI.
              </p>

              <div className="mt-12 space-y-5">

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <h3 className="font-semibold">
                    👨‍🏫 Meet Faculty
                  </h3>

                  <p className="mt-2 text-sm text-cyan-100">
                    Discuss academics, placements,
                    research and projects.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <h3 className="font-semibold">
                    ⚡ Instant Booking
                  </h3>

                  <p className="mt-2 text-sm text-cyan-100">
                    Schedule appointments within
                    seconds.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <h3 className="font-semibold">
                    🔒 Secure
                  </h3>

                  <p className="mt-2 text-sm text-cyan-100">
                    Protected with JWT Authentication.
                  </p>
                </div>

              </div>

            </div>

            <p className="text-sm text-cyan-100">
              React • FastAPI • JWT • MySQL
            </p>

          </div>

          {/* RIGHT PANEL */}

          <div className="bg-white p-8 md:p-12">

            <div className="mx-auto max-w-lg">

              <h2 className="text-4xl font-bold text-slate-900">
                Schedule Meeting
              </h2>

              <p className="mt-3 text-slate-500">
                Fill in the details below to book
                your appointment.
              </p>

              <form
                onSubmit={bookAppointment}
                className="mt-8 space-y-6"
              >

                <div className="grid gap-5 md:grid-cols-2">

                  <div>

                    <label className="mb-2 block font-medium text-slate-700">
                      Student ID
                    </label>

                    <input
                      type="number"
                      name="student_id"
                      value={form.student_id}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block font-medium text-slate-700">
                      Faculty ID
                    </label>

                    <input
                      type="number"
                      name="faculty_id"
                      value={form.faculty_id}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    />

                  </div>

                </div>

                <div className="grid gap-5 md:grid-cols-2">

                  <div>

                    <label className="mb-2 block font-medium text-slate-700">
                      Appointment Date
                    </label>

                    <input
                      type="date"
                      name="appointment_date"
                      value={form.appointment_date}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block font-medium text-slate-700">
                      Appointment Time
                    </label>

                    <input
                      type="time"
                      name="appointment_time"
                      value={form.appointment_time}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    />

                  </div>

                </div>
                                <div>

                  <label className="mb-2 block font-medium text-slate-700">
                    Reason for Appointment
                  </label>

                  <textarea
                    rows={5}
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                      required
                    placeholder="Describe why you want to meet the faculty..."
                    className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />

                </div>

                {error && (

                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">

                    {error}

                  </div>

                )}

                {success && (

                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">

                    {success}

                  </div>

                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"
                >

                  {loading ? (

                    <div className="flex items-center gap-3">

                      <svg
                        className="h-5 w-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >

                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          className="opacity-20"
                        />

                        <path
                          fill="currentColor"
                          className="opacity-90"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />

                      </svg>

                      Booking Appointment...

                    </div>

                  ) : (

                    "Book Appointment"

                  )}

                </button>

              </form>
                            <div className="mt-10 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 p-6">

                <h3 className="text-lg font-semibold text-slate-800">
                  Appointment Tips
                </h3>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">

                  <li>
                    ✅ Arrive 5–10 minutes before your scheduled meeting.
                  </li>

                  <li>
                    ✅ Clearly mention your purpose in the reason field.
                  </li>

                  <li>
                    ✅ Carry any project documents or notes if required.
                  </li>

                  <li>
                    ✅ Respect the faculty member's scheduled time.
                  </li>

                </ul>

              </div>

              <div className="mt-8">

                <div className="mb-4 h-px bg-slate-200"></div>

                <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Powered By
                </p>

                <div className="flex flex-wrap justify-center gap-3">

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                    ⚛ React
                  </span>

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                    ⚡ FastAPI
                  </span>

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                    🛢 MySQL
                  </span>

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                    🔐 JWT
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Appointment;