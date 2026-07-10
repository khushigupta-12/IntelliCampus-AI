import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      localStorage.setItem(
        "role",
        response.data.role
      );

      if (response.data.role === "student") {
        navigate("/student/dashboard");
      } else if (response.data.role === "faculty") {
        navigate("/faculty/dashboard");
      } else {
        navigate("/admin/dashboard");
      }
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/30 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">

        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div className="hidden flex-col justify-between bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 p-12 text-white lg:flex">

            <div>

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl">
                  🤖
                </div>

                <div>

                  <h1 className="text-4xl font-bold">
                    IntelliCampus AI
                  </h1>

                  <p className="mt-1 text-blue-100">
                    AI Powered Campus Platform
                  </p>

                </div>

              </div>

              <div className="mt-12">

                <h2 className="text-3xl font-bold leading-tight">
                  Welcome Back 👋
                </h2>

                <p className="mt-5 text-lg leading-8 text-blue-100">
                  Sign in to access your intelligent dashboard,
                  AI assistant, faculty appointments,
                  student analytics, PDF question answering,
                  and much more.
                </p>

              </div>

              <div className="mt-12 space-y-5">

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">

                  <div className="text-2xl">
                    💬
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      AI Chat Assistant
                    </h3>

                    <p className="text-sm text-blue-100">
                      Powered by Google Gemini
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">

                  <div className="text-2xl">
                    📄
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      PDF Question Answering
                    </h3>

                    <p className="text-sm text-blue-100">
                      Upload and ask anything
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">

                  <div className="text-2xl">
                    📊
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      Student Analytics
                    </h3>

                    <p className="text-sm text-blue-100">
                      AI Performance Prediction
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur">

                  <div className="text-2xl">
                    📅
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      Faculty Appointments
                    </h3>

                    <p className="text-sm text-blue-100">
                      Book meetings instantly
                    </p>

                  </div>

                </div>

              </div>

            </div>

            <p className="text-sm text-blue-100">
              Secure authentication • JWT • FastAPI • React • Gemini AI
            </p>

          </div>

          {/* RIGHT SIDE */}

          <div className="bg-white px-8 py-10 sm:px-12">

            <div className="mx-auto max-w-md">

              <div className="mb-10 text-center lg:text-left">

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-3xl text-white shadow-xl lg:mx-0">
                  🚀
                </div>

                <h2 className="text-4xl font-bold text-slate-900">
                  Sign In
                </h2>

                <p className="mt-3 text-slate-500">
                  Continue to your IntelliCampus AI account.
                </p>

              </div>

              <form
                onSubmit={handleLogin}
                className="space-y-6"
              >

                <div>

                  <label className="mb-2 block font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    required
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-medium text-slate-700">
                    Password
                  </label>

                  <div className="relative">

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) =>
                        setPassword(
                          e.target.value
                        )
                      }
                      required
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 pr-16 outline-none transition duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      {showPassword
                        ? "Hide"
                        : "Show"}
                    </button>

                  </div>

                </div>

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                  </div>
                )}
                                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"
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
                          className="opacity-20"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>

                        <path
                          className="opacity-90"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>

                      Signing In...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>

              </form>

              <div className="mt-8 text-center">

                <p className="text-slate-600">
                  Don't have an account?

                  <Link
                    to="/register"
                    className="ml-2 font-semibold text-blue-600 transition hover:text-blue-700"
                  >
                    Create Account
                  </Link>

                </p>

              </div>

              <div className="mt-10">

                <div className="mb-4 h-px bg-slate-200"></div>

                <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Powered By
                </p>

                <div className="flex flex-wrap justify-center gap-3">

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:scale-105">
                    ⚛ React
                  </span>

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:scale-105">
                    ⚡ FastAPI
                  </span>

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:scale-105">
                    🤖 Gemini AI
                  </span>

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:scale-105">
                    🔐 JWT
                  </span>

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:scale-105">
                    🛢 MySQL
                  </span>

                </div>

              </div>

              <div className="mt-10 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-5">

                <h3 className="text-sm font-semibold text-slate-800">
                  IntelliCampus AI
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A modern AI-powered campus platform that combines intelligent
                  conversations, PDF question answering, faculty appointments,
                  performance prediction, and role-based dashboards into one
                  seamless experience.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LoginForm;